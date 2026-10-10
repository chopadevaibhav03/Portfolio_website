export const getImageUrl = (path) => {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  try {
    return new URL(`/assets/${cleanPath}`, import.meta.url).href;
  } catch {
    return `/assets/${cleanPath}`;
  }
};
