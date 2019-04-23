import io from 'socket.io-client';

const socket = io('http://localhost:8000');

const configureSocket = dispatch => {
    socket.on('connect', () => {
        console.log('connected')
    })

    socket.on('SEND_NAMES_TO_CLIENTS', names => {
        console.log(12, names)
        dispatch({ type: 'PUT_ALL_NAMES_TO_REDUCER', names })
    })

    socket.on('CURRENT_POT', pot => {
        dispatch({ type: 'CURRENT_POT_TO_REDUCER', pot: pot })
    })

    return socket;
}

export const sendNameToServer = name => {
    console.log(18, name)
    socket.emit('SEND_NAME_TO_SERVER', name);
}

export const getCurrentPot = () => socket.emit('GET_CURRENT_POT')
export default configureSocket