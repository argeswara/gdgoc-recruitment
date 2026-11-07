const BASE_URL = "https://gdgoc-ugm-api.vercel.app/api";

export async function fetchEndpoint(path, signal) {
  const response = await fetch(`${BASE_URL}${path}`, { signal });
  if (!response.ok) {
    throw new Error(`Request gagal (status ${response.status})`);
  }
  const json = await response.json();
  return json.data;
}