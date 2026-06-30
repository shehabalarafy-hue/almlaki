import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";
import { defineConfig, type Plugin, type ViteDevServer } from "vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

const PROJECT_ROOT = import.meta.dirname;
const LOG_DIR = path.join(PROJECT_ROOT, ".manus-logs");
const MAX_LOG_SIZE_BYTES = 1 * 1024 * 1024;
const TRIM_TARGET_BYTES = Math.floor(MAX_LOG_SIZE_BYTES * 0.6);

type LogSource = "browserConsole" | "networkRequests" | "sessionReplay";

function ensureLogDir() {
  if (!fs.existsSync(LOG_DIR)) {
    fs.mkdirSync(LOG_DIR, { recursive: true });
  }
}

function trimLogFile(logPath: string, maxSize: number) {
  try {
    if (!fs.existsSync(logPath) || fs.statSync(logPath).size <= maxSize) {
      return;
    }

    const lines = fs.readFileSync(logPath, "utf-8").split("\n");
    const keptLines: string[] = [];
    let keptBytes = 0;

    const targetSize = TRIM_TARGET_BYTES;
    for (let i = lines.length - 1; i >= 0; i--) {
      const lineBytes = Buffer.byteLength(`${lines[i]}\n`, "utf-8");
      if (keptBytes + lineBytes > targetSize) break;
      keptLines.unshift(lines[i]);
      keptBytes += lineBytes;
    }

    fs.writeFileSync(logPath, keptLines.join("\n"), "utf-8");
  } catch {
    /* ignore */
  }
}

function vitePluginManusDebugCollector(): Plugin {
  return {
    name: "manus-debug-collector",
    apply: "serve",
    configureServer(server: ViteDevServer) {
      ensureLogDir();

      server.middlewares.use((req, res, next) => {
        if (req.url?.includes("__manus__") && req.method === "POST") {
          let body = "";
          req.on("data", (chunk) => {
            body += chunk.toString();
          });
          req.on("end", () => {
            try {
              const payload = JSON.parse(body);
              const source = payload.source as LogSource;

              if (source && ["browserConsole", "networkRequests", "sessionReplay"].includes(source)) {
                const logPath = path.join(LOG_DIR, `${source}.log`);
                const timestamp = new Date().toISOString();
                const logEntry = `[${timestamp}] ${JSON.stringify(payload)}\n`;

                fs.appendFileSync(logPath, logEntry, "utf-8");
                trimLogFile(logPath, MAX_LOG_SIZE_BYTES);
              }
            } catch {
              /* ignore */
            }
            res.end(JSON.stringify({ ok: true }));
          });
        } else {
          next();
        }
      });
    },
  };
}

const jsxLocPlugin = () => ({
  name: "jsx-loc",
  apply: "serve" as const,
  transform(code: string, id: string) {
    if (!id.includes("node_modules") && (id.endsWith(".jsx") || id.endsWith(".tsx"))) {
      const lines = code.split("\n");
      const updatedLines = lines.map((line, index) => {
        if (line.includes("return") && line.includes("(")) {
          return line + ` /* ${id}:${index + 1} */`;
        }
        return line;
      });
      return updatedLines.join("\n");
    }
  },
});

const plugins = [react(), tailwindcss(), jsxLocPlugin(), vitePluginManusRuntime(), vitePluginManusDebugCollector()];

export default defineConfig({
  plugins,
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname),
  publicDir: path.resolve(import.meta.dirname, "public"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    host: true,
    allowedHosts: [
      ".manuspre.computer",
      ".manus.computer",
      ".manus-asia.computer",
      ".manuscomputer.ai",
      ".manusvm.computer",
      "localhost",
      "127.0.0.1",
    ],
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
