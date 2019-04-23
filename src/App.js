import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { getAName } from './usernames';
import { sendNameToServer } from './socket'
class App extends Component {
  componentDidMount() {
    console.log(this.props);
    const name = getAName()
    console.log(name)
    sendNameToServer(name)
  }
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return state
}

export default connect(mapStateToProps)(App)
