import React from "react";
import { textStyles as styles } from "../Styles";
import { withStyles } from "material-ui/styles";

const Abstract = props =>
  <div className={props.classes.container}>
    <center>
      <span className={props.classes.title}>Abstract</span>
    </center>

    <div className={props.classes.info}>
      <p>Insert the abstract here when it is provided.</p>
    </div>
  </div>;

export default withStyles(styles)(Abstract);
