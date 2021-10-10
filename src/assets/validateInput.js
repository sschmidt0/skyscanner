const Validator = require('validator');
const isEmpty = require('is-empty');

export const validateInput = (data) => {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.origen = !isEmpty(data.origen) ? data.origen : "";
  data.destination = !isEmpty(data.destination) ? data.destination : "";
  data.departureDay = !isEmpty(data.departureDay) ? data.departureDay : "";
  data.returnDay = !isEmpty(data.returnDay) ? data.returnDay : "";

  // origen check
  if (Validator.isEmpty(data.origen)) {
    errors.origen = "Choose origen";
  }
  // destination check
  if (Validator.isEmpty(data.destination)) {
    errors.destination = "Choose destination";
  }
  if (data.origen === data.destination) {
    errors.destination = "Invalid destination";
  }
  // departure day check
  if (Validator.isEmpty(data.departureDay)) {
    errors.departureDay = "Choose departure";
  }
  if(new Date(data.departureDay).setHours(0,0,0,0) < new Date().setHours(0,0,0,0)) {
    errors.departureDay = "Invalid departure";
  }
  // return day check
  if ((Validator.isEmpty(data.returnDay)) && data.travelOption === 'return') {
    errors.returnDay = "Choose return";
  }
  if(new Date(data.returnDay).setHours(0,0,0,0) < new Date().setHours(0,0,0,0)) {
    errors.returnDay = "Invalid return";
  }
  if(new Date(data.returnDay).setHours(0,0,0,0) < new Date(data.departureDay).setHours(0,0,0,0)) {
    errors.returnDay = "Invalid return";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
