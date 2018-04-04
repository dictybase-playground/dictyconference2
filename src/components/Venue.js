import React from "react";
import { textStyles as styles } from "../Styles";
import { withStyles } from "material-ui/styles";

const Venue = props =>
  <div className={props.classes.container}>
    <center>
      <div className={props.classes.title}>Venue</div>
    </center>

    <div className={props.classes.info}>
      <table className={props.classes.table}>
        <tbody>
          <tr>
            <td className={props.classes.tabletd}>
              <div className={props.classes.info}>
                <p>
                  <b>Address:</b>
                </p>
                <p>Hotel Zuiderduin</p>
                <p>Zeeweg52</p>
                <p>1931VL Egmond aan Zee</p>
                <p>+31-727502000</p>
                <p>
                  <a href="https://en.zuiderduin.nl/">
                    https://en.zuiderduin.nl/
                  </a>
                </p>
              </div>
            </td>
            <td className={props.classes.tabletd}>
              <div className={props.classes.info}>
                <p>
                  The <b>Dictyostelium International Conference 2018</b> will
                  take place in Egmond aan Zee, conveniently located about 40
                  kilometers from Amsterdam International airport Schiphol.
                </p>
                <p>
                  The Hotel Zuiderduin is located close to the beach, offering
                  opportunities to swim, walk and enjoy the sunset. The hotel
                  has a{" "}
                  <b>
                    WELLNESS CENTER with Swimming pool, Whirlpool and saunas,
                    sport facilities for BOWLING, SQUASH COURT and FITNESS ROOM.
                  </b>
                </p>
                <p>
                  You can rent bicycles in the hotel to enjoy the village and
                  the dunes.
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>;

export default withStyles(styles)(Venue);
