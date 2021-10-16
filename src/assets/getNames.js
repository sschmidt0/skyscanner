export const getPlaceName = (placeNumber, nameList) => nameList.filter(element => element.Id === placeNumber);

export const getStopsNames = (stopsArray, nameList) => {
  const stop = nameList.filter(element => element.Id === stopsArray[0])[0].Code;
  return stopsArray.length > 1 ? `${stop}, ...` : stop;
};

export const getCarrierNames = (flightItemOut, flightItemIn, carriersList) => {
  const carriers = mergeCarrierList(flightItemOut.Carriers, flightItemIn.Carriers);
  const nameList = [];
  carriers.map(carrierElement => carriersList.map(listElement => {
    if (listElement.Id === carrierElement) nameList.push(listElement.Name);
  }))
  console.log(nameList);
  return nameList;
};

const mergeCarrierList = (listA, listB) => {
  return [...listA, ...listB];
};
