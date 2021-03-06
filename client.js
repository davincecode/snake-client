// establishes a connection with the game server
const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "135.23.222.131",
    port: 50542,
  });

  conn.setEncoding("utf8"); // interpret data as text

  conn.on("data", (data) => {
    console.log("Message from client: ", data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: MEOW");
  });

  return conn;
};

module.exports = connect;
