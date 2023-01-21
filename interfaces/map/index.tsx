
export interface SquareCoordinates {
  x: number,
  y: number,
}

export interface CubicCoordinates {
  q: number,
  r: number,
  s: number,
}

export interface Positions extends Array<CubicCoordinates> {}
