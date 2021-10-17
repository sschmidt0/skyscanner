export const getAirportLetters = (cityString) => {
  const regex = /\(\w+\)/;

  if (cityString !== '') {
    const cutCity = regex.exec(cityString)[0];
    const airportLetters = cutCity.slice(1, cutCity.length-1);
    return airportLetters;
  }
  return;
};
