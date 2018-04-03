import React from "react";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import Button from "material-ui/Button";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";

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
  }
});

const NavBar = props =>
  <div className={props.classes.container}>
    {/* <img src={headerImage} width="100%" alt="Header background" /> */}

    <AppBar position="static" color="default">
      <Toolbar>
        <Grid container spacing={8}>
          <Grid item sm={2} xs={4}>
            {/* <Link to="/version2/home" className={props.classes.link}> */}
            <Button className={props.classes.button}>Home</Button>
            {/* </Link> */}
          </Grid>
          <Grid item sm={2} xs={4}>
            {/* <Link to="/version2/venue" className={props.classes.link}> */}
            <Button className={props.classes.button}>Venue</Button>
            {/* </Link> */}
          </Grid>
          <Grid item sm={2} xs={4}>
            {/* <Link to="/version2/travel" className={props.classes.link}> */}
            <Button className={props.classes.button}>Travel</Button>
            {/* </Link> */}
          </Grid>
          <Grid item sm={2} xs={4}>
            {/* <Link to="/version2/registration" className={props.classes.link}> */}
            <Button className={props.classes.button}>Register</Button>
            {/* </Link> */}
          </Grid>
          <Grid item sm={2} xs={4}>
            {/* <Link to="/version2/abstract" className={props.classes.link}> */}
            <Button className={props.classes.button}>Abstract</Button>
            {/* </Link> */}
          </Grid>
          <Grid item sm={2} xs={4}>
            {/* <Link to="/version2/agenda" className={props.classes.link}> */}
            <Button className={props.classes.button}>Agenda</Button>
            {/* </Link> */}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>

    <div />
  </div>;

export default withStyles(styles)(NavBar);
