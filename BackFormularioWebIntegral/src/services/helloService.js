const helloRepository = require("../repositories/helloRepository");

const getHelloMessage = () => {
  return helloRepository.getGreeting();
};

module.exports = { getHelloMessage };