import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import Button from "material-ui/Button";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Tabs, { Tab } from "material-ui/Tabs";
import SwipeableViews from "react-swipeable-views";
import Typography from "material-ui/Typography";
import { Link } from "react-router-dom";

import Home from "./Home";
import Venue from "./Venue";
import Travel from "./Travel";
import Register from "./Register";
import Abstract from "./Abstract";
import Agenda from "./Agenda";

const styles = theme => ({
  container: {
    padding: "2%"
  },
  button: {
    margin: 5,
    border: "2px solid #011f4b",
    color: "#011f4b",
    "&:hover": {
      cursor: "pointer",
      background: "#011f4b",
      color: "white"
    }
  },
  link: {
    /* Get rid of stubborn underline on clicked links */
    textDecoration: "none"
  },
  navbar: {
    flexGrow: 1
  }
});

class NavBar extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { value } = this.state;
    return (
      <div className={this.props.classes.container}>
        <div className={this.props.classes.navbar}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={this.handleChange}
              scrollable
              scrollButtons="auto"
              centered
            >
              <Tab label="Home" />
              <Tab label="Venue" />
              <Tab label="Travel" />
              <Tab label="Register" />
              <Tab label="Abstract" />
              <Tab label="Agenda" />
            </Tabs>
          </AppBar>

          {value === 0 && <Home />}
          {value === 1 && <Venue />}
          {value === 2 && <Travel />}
          {value === 3 && <Register />}
          {value === 4 && <Abstract />}
          {value === 5 && <Agenda />}
        </div>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);
