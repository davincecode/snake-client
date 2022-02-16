// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here,
    port: "50541", // PORT, number here,
  });

  conn.on("connect", () => {
    console.log("CONIKTED"); // code that does something when the connection is first established
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

const myNumber = 42;
const myString = "hello";
const myFunction = () => {
  // myFunction's code
};

module.exports = {
  myNumber, // exports 42 as myNumber
  myString, // exports "hello" as myString
  myFunction, // exports myFunction
};

module.exports = connect;
