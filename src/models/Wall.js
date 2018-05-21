import { lengthOf } from './math';

const { abs } = Math;

export function wallAxis(start, finish) {
  const dx = abs(start.x - finish.x);
  const dy = abs(start.y - finish.y);
  if (dx > dy) {
    return 'EastWest';
  } else {
    return 'NorthSouth';
  }
}

class Wall {
  constructor(start, stop) {
    this.endPoints = [start.coordinate, stop.coordinate];
    this.corners = [start, stop];
    this.axis = wallAxis(...this.endPoints);
    this.id = `${start.id}-${stop.id}-${this.axis}`;
    this.q_value = Math.max(start.q_value, stop.q_value);
    this.length = lengthOf(...this.endPoints);
    this.height = Math.max(start.coordinate.z, stop.coordinate.z); // should use start.height
    this.parapet = Math.max(start.parapet, stop.parapet);
    // instead
  }
}

export default Wall;
