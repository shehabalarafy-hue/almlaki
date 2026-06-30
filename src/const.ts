export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

// Generate login URL at runtime so redirect URI reflects the current origin.
export const getLoginUrl = () => {
  // Use environment variables with safe fallbacks
  const oauthPortalUrl = import.meta.env.VITE_OAUTH_PORTAL_URL || "https://auth.manus.space";
  const appId = import.meta.env.VITE_APP_ID || "";
  
  // If appId is missing, log warning and return safe fallback
  if (!appId) {
    console.warn("[Auth] VITE_APP_ID is not configured. Login may not work correctly.");
    return "#";
  }
  
  try {
    const redirectUri = `${window.location.origin}/api/oauth/callback`;
    const state = btoa(redirectUri);

    const url = new URL(`${oauthPortalUrl}/app-auth`);
    url.searchParams.set("appId", appId);
    url.searchParams.set("redirectUri", redirectUri);
    url.searchParams.set("state", state);
    url.searchParams.set("type", "signIn");

    return url.toString();
  } catch (error) {
    console.error("[Auth] Failed to generate login URL:", error);
    return "#";
  }
};
