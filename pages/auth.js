// auth.js Page
import React from "react";
import withNavBar from "../src/withNavBar";
import { withRouter } from "next/router";
import { compose } from "redux";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core";

const styles = {
  grow: {
    flexGrow: 1
  }
};

class Auth extends React.Component {
  // Create our initial state
  state = {
    email: "",
    password: ""
  };

  render() {
    // Parse out action telling us whether we should login or signup
    // from props
    const {
      router: {
        query: { action }
      },
      classes
    } = this.props;

    return (
      <div className={classes.grow}>
        <p>{action}</p>
      </div>
    );
  }
}

// Composes functions from right to left
export default compose(
  withNavBar,
  withStyles(styles),
  withRouter
)(Auth);