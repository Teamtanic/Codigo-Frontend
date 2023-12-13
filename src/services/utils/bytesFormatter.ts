export function humanFileSize(size: number) {
  const i = size == 0 ? 0 : Math.floor(Math.log(size) / Math.log(1024));
  const value = Number((size / Math.pow(1024, i)).toFixed(2));

  return value * 1 + " " + ["B", "kB", "MB", "GB", "TB"][i];
}
