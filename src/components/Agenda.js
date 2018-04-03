import React from "react";
import { textStyles as styles } from "../Styles";
import { withStyles } from "material-ui/styles";

const Agenda = props =>
  <div className={props.classes.container}>
    <center>
      <span className={props.classes.title}>Agenda</span>
    </center>

    <div className={props.classes.info}>
      <p>Insert the agenda here when it is provided.</p>
    </div>
  </div>;

export default withStyles(styles)(Agenda);
