import React from "react";
import { textStyles as styles } from "../Styles";
import { withStyles } from "material-ui/styles";
// import HotelImage from "../Images/hotel_zuiderduin.jpg";

const Register = props =>
  <div className={props.classes.container}>
    <center>
      <span className={props.classes.title}>Registration</span>
    </center>

    <div className={props.classes.info}>
      <br />
      <center>
        <b>Information</b>
      </center>
      <ul>
        <li>
          <p>To register visit this link (managed by xx)</p>
        </li>
        <li>
          <p>
            After registration to submit abstract visit this link (managed by
            organizers)
          </p>
        </li>
        <li>
          <p>
            Early bird registration ends on April 30. Regular registration on
            July 17
          </p>
        </li>
        <li>
          <p>
            Registration fees cover: meals, attendance to sessions, coffee
            breaks and social activities.
          </p>
        </li>
      </ul>
      <br />
      <center>
        <b>Fees (Provisional Data)*</b>
      </center>
      <br />
      <table className={props.classes.table} width="100%">
        <tbody>
          <tr>
            <td />
            <td className={props.classes.tableheader}>
              Early Bird
              <div className={props.classes.tablesubtitle}>Ends April 30</div>
            </td>
            <td className={props.classes.tableheader}>
              Regular Rate
              <div className={props.classes.tablesubtitle}>
                From May 1 to July 17
              </div>
            </td>
          </tr>
          <tr>
            <td className={props.classes.tableheader}>Regular Attendees</td>
          </tr>
          <tr>
            <td className={props.classes.tabletd}>
              Conference fee + accomodation single room
            </td>
            <td className={props.classes.tabletd}>750 €</td>
            <td className={props.classes.tabletd}>750 €</td>
          </tr>
          <tr>
            <td className={props.classes.tabletd}>
              Conference fee + accomodation double room
            </td>
            <td className={props.classes.tabletd}>650 €</td>
            <td className={props.classes.tabletd}>650 €</td>
          </tr>
          <tr>
            <td className={props.classes.tableheader}>Students</td>
          </tr>
          <tr>
            <td className={props.classes.tabletd}>
              Conference fee + accomodation single room
            </td>
            <td className={props.classes.tabletd}>650 €</td>
            <td className={props.classes.tabletd}>650 €</td>
          </tr>
          <tr>
            <td className={props.classes.tabletd}>
              Conference fee + accomodation single room
            </td>
            <td className={props.classes.tabletd}>550 €</td>
            <td className={props.classes.tabletd}>550 €</td>
          </tr>
        </tbody>
      </table>
      <br />
      *Additional nights can be booked on registration.
    </div>
  </div>;
export default withStyles(styles)(Register);
