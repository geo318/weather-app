const directionList = {
    0: 'North',
    89: 'Northeast',
    90: 'East',
    169: 'Southeast',
    180: 'South',
    269: 'Southwest',
    270: 'West',
    359: 'Northwest',
    360: 'North',
}
const directionListKeys = Object.keys(directionList);

export const calculateDirection = (degree) => {
  if(degree > 360 || degree < 0) return console.log('incorrect direction provided')
  return directionList[directionListKeys[directionListKeys.findIndex(e => degree <= e*1)]]
}