const app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const cors = require("cors");

server.listen(8000, () => console.log("connected to port 8000"));

app.use(cors());

let pot = 0;
let names = [];

io.on("connection", socket => {
  socket.on("SEND_NAME_TO_SERVER", name => {
    names = [...names, name];
    socket.broadcast.emit("SEND_NAMES_TO_CLIENTS", names);
    socket.emit("SEND_NAMES_TO_CLIENTS", names);
  });

  socket.on("GET_CURRENT_POT", () => {
    socket.emit("CURRENT_POT", pot);
  });

  socket.on("SOMEONE_GOT_ONE", name => {
    socket.broadcast.emit("GUESS_WHO_GOT_ONE", name);
  });

  socket.on("SOMEONE_PITCHED_IN", name => {
    socket.broadcast.emit("GUESS_WHO_PITCHED_IN", name);
  });

  socket.on("UPDATE_POT", state => {
    pot = state.pot;
    socket.broadcast.emit("UPDATED_POT", state);
  });
});
