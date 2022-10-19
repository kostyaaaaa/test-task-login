// this file contains the custom errors, used for errorHandler.js

class RequestError extends Error {
  constructor(message, code, name) {
    super(message);
    this.code = code;
    this.name = name || 'Error';
  }
}

module.exports = {
  RequestError,
};
