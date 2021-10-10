import axios from 'axios';

export const getPlaceList = (text, setPlaces) => {
  const url = `http://52.47.179.155:3333/api/v1/skyscanner/places?query=${text}`;

  axios.get(url)
    .then(response => {
      setPlaces(response.data.Places);
    })
    .catch(error => {
      console.log(error);
    });
};
