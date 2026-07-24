export function getSiteUrl() {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ?? process.env.SITE_URL?.trim();

  if (!configuredUrl) {
    return null;
  }

  try {
    return new URL(configuredUrl);
  } catch {
    return null;
  }
}
