export const deltaX = (start, finish) => {
  if (start.coordinate) {
    return Math.abs(start.coordinate.x - finish.coordinate.x);
  } else {
    return Math.abs(start.x - finish.x);
  }
};

export const deltaY = (start, finish) => {
  if (start.coordinate) {
    return Math.abs(start.coordinate.y - finish.coordinate.y);
  } else {
    return Math.abs(start.y - finish.y);
  }
};
