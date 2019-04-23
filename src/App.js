import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { getAName } from "./usernames";
import {
  sendNameToServer,
  getCurrentPot,
  sendPitchInToServer,
  sendGetOneToServer
} from "./socket";
import SnackBarNotif from "./SnackBarNotif";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const name = getAName();
    getCurrentPot();
    dispatch({ type: "ASSIGNED_USERNAME", name });
    sendNameToServer(name);
  }

  pitchIn = () => {
    const { dispatch, name } = this.props;
    dispatch({ type: "PITCH_IN" });
    sendPitchInToServer(name);
  };

  getOne = () => {
    console.log(30, this);
    const { dispatch, name } = this.props;
    dispatch({ type: "GET_ONE" });
    sendGetOneToServer(name);
  };

  closeSnackbar() {}

  render() {
    console.log(this.props);
    const { pot, name, names, snackbarIsOpen, mode, whoDidIt } = this.props;
    return (
      <Grid container justify="center">
        <Grid style={{ textAlign: "center" }} item xs={12}>
          <h1>{pot}</h1>
        </Grid>
        <Grid style={{ textAlign: "right", padding: "10px" }} item xs={6}>
          <Button onClick={this.pitchIn} variant="contained" color="primary">
            pitch in!
          </Button>
        </Grid>
        <Grid style={{ textAlign: "left", padding: "10px" }} item xs={6}>
          <Button onClick={this.getOne} variant="contained" color="primary">
            get one!
          </Button>
        </Grid>
        <Grid style={{ textAlign: "center" }} item xs={12}>
          <div
            style={{
              height: "500px",
              textAlign: "center",
              width: "300px",
              border: "1px solod black",
              display: "inline-block"
            }}
          >
            Your assigned username is{" "}
            <span style={{ color: "red" }}>{name}</span>
            <div style={{ padding: "10px" }}>
              Other members:
              {(!names || names.length) <= 1 ? (
                <div style={{ color: "red" }}>No other members yet</div>
              ) : (
                names.map(member => (
                  <div
                    style={{ display: name === member && "none" }}
                    key={member}
                  >
                    {member}
                  </div>
                ))
              )}
            </div>
          </div>
        </Grid>
        <SnackBarNotif
          mode={mode}
          closeSnackbar={this.closeSnackbar}
          name={whoDidIt}
          snackbarIsOpen={snackbarIsOpen}
        />
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return state;
};

export default connect(mapStateToProps)(App);
