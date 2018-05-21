export function sign(value) {
  if (value > 0) {
    return 1;
  } else if (value < 0) {
    return -1;
  } else {
    return 0;
  }
}

export const sqrt2PI = Math.sqrt(2.0 * Math.PI);

export function unit_norm_dist(value) {
  return Math.exp(-(value ** 2 / 2.0)) / sqrt2PI;
}

export function lengthOf(start, finish) {
  const xdiff = start.x - finish.x;
  const ydiff = start.y - finish.y;
  return Math.sqrt(xdiff ** 2 + ydiff ** 2);
}
