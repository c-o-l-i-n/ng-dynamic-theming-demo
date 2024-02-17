export function getClientFromUrlPath(path?: string): string {
  return (path ?? location.pathname).split('/')[1];
}
