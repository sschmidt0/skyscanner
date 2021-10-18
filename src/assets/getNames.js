export const getPlaceName = (placeNumber, nameList) => nameList.filter(element => element.Id === placeNumber);

export const getStopsNames = (stopsArray, nameList) => {
  if (stopsArray.length >= 1 && nameList.length > 0) {
    const stop = nameList.filter(element => element.Id === stopsArray[0])[0].Code;
    return stopsArray.length > 1 ? `${stop}, ...` : stop;
  }
};

export const getCarrierNames = (flightItemOut, flightItemIn, carriersList) => {
  const inCarriers = flightItemIn !== undefined ? flightItemIn.Carriers : [];
  const carriers = mergeCarrierList(flightItemOut.Carriers, inCarriers);
  const nameList = [];
  carriers.map(carrierElement => carriersList.map(listElement => {
    if (listElement.Id === carrierElement) nameList.push(listElement.Name);
    return nameList;
  }))
  return nameList;
};

const mergeCarrierList = (listA, listB) => {
  if (listB !== undefined) return [...listA, ...listB];
  return listA;
};
