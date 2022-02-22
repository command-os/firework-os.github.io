export function resolve_path(path: string) {
  return require.context("../assets/", false, /\.png$/)("./" + path);
}
