const helloService = require("../services/helloService");

const sayHello = (req, res) => {
  const message = helloService.getHelloMessage();
  res.json({ message });
};

module.exports = { sayHello };