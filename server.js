const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const cors = require('cors');

server.listen(8000, () => console.log('connected to port 8000'))

app.use(cors())

let names = []

io.on('connection', socket => {

    socket.on('SEND_NAME_TO_SERVER', name => {
        console.log(121, name)
        names = [...names, name]
        console.log(names)
        socket.broadcast.emit('SEND_NAMES_TO_CLIENTS', names);
        socket.emit('SEND_NAMES_TO_CLIENTS', names)
    })
})
