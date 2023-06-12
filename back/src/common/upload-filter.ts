export function imageFilter(extension: string): boolean {
  return !(
    extension !== '.png' &&
    extension !== '.jpg' &&
    extension !== '.jpeg'
  );
}
