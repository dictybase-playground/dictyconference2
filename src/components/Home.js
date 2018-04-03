import React from "react";
import { textStyles as styles } from "../Styles";
import { withStyles } from "material-ui/styles";

const Home = props =>
  <div className={props.classes.container}>
    <center>
      <div className={props.classes.title}>Dicty 2018</div>
      <div className={props.classes.subtitle}>
        Annual International Dictyostelium Conference
      </div>
      <div className={props.classes.info}>
        <p>August 12 to August 16, 2018, The Netherlands, Egmond aan Zee</p>
        <p>Organized by Arjan Kortholt and Peter van Haastert</p>
      </div>
    </center>
  </div>;

export default withStyles(styles)(Home);
