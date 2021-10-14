import axios from 'axios';
const signal = axios.CancelToken.source();

export const pollSession = (sessionURL, setData) => {
  const pollSessionURL = `http://52.47.179.155:3333/api/v1/skyscanner/session?sessionUrl=${sessionURL}`;

  axios.get(pollSessionURL, {
    cancelToken: signal.token
  })
  .then(response => setData(response.data))
  .catch(error => console.log(error));
};
