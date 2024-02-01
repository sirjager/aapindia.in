export function parseToNumber(value: any): number | undefined {
  const num = Number(value);
  return isNaN(num) ? undefined : num;
}

export function isNumber(i: any): boolean {
  if (typeof i === "string") {
    const nv = parseFloat(i);
    return !isNaN(nv) && isFinite(nv);
  }
  return typeof i === "number" && !isNaN(i);
}

export function getRandomNumber(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}
