export const getAirportLetters = (cityString) => {
  const regex = /\(\w+\)/;
  console.log(cityString);

  if (cityString !== '') {
    const cutCity = regex.exec(cityString)[0];
    console.log(cutCity);
    const airportLetters = cutCity.slice(1, cutCity.length-1);
    return airportLetters;
  }
  return;
};
