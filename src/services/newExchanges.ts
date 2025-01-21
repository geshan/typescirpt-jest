export const myCoveredFunction = (a: number, b: number) => {
  if (a === 0) {
    throw 'my non tested line'
  }
  return a + b
}

export const myNonCoveredFunction = (a: number, b: number) => {
  return a + b
}
