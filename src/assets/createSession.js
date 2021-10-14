import axios from 'axios';
const signal = axios.CancelToken.source();

export const createSession = (data, setSessionURL) => {
  const url = 'http://52.47.179.155:3333/api/v1/skyscanner/session';
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  axios.post(url, data, config, {
    cancelToken: signal.token
  })
    .then(response => {
      setSessionURL(response.data.sessionUrl);
    })
    .catch(error => console.log(error));
};





