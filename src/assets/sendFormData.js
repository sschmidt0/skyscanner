import axios from 'axios';
const signal = axios.CancelToken.source();

export const sendFormData = (data) => {
  const dataTry = {
    country: "UK",
    currency: "GBP",
    locale: "en-GB",
    locationSchema: "iata",
    originplace: "EDI",
    destinationplace: "LHR",
    outbounddate: "2021-09-30",
    inbounddate: "2021-11-02"
  }

  // create session
  const url = 'http://52.47.179.155:3333/api/v1/skyscanner/session';
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  axios.post(url, dataTry, config, {
    cancelToken: signal.token
  })
    .then(response => {
      console.log(response);
      // try poll session with random sessionURL
      pollSession('abc');
    })
    .catch(error => console.log(error));


  // poll session
  const pollSession = (sessionURL) => {
    console.log('poll session is active with random sessionURL example');
    const pollSessionURL = `http://52.47.179.155:3333/api/v1/skyscanner/session?sessionUrl=${sessionURL}`;
    console.log(pollSessionURL);

    axios.get(pollSessionURL)
    .then(response => console.log('poll session response', response.data))
    .catch(error => console.log(error));
  }
};





