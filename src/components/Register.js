import React from "react";
import { textStyles as styles } from "../Styles";
import { withStyles } from "material-ui/styles";
// import HotelImage from "../Images/hotel_zuiderduin.jpg";

const Register = props =>
  <div className={props.classes.container}>
    <center>
      <span className={props.classes.title}>Registration</span>
    </center>

    {/* <img
      src={HotelImage}
      alt="Hotel Zuiderduin"
      className={props.classes.image}
    /> */}
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
        <b>Fees (Provisional Data)</b>
      </center>
      <br />
      <table className={props.classes.table} width="100%">
        <tbody>
          <tr>
            <th />
            <th>Early Bird (ends April 30)</th>
            <th>Regular Rate (from May 1 to July 17)</th>
          </tr>
          <tr>
            <td>Regular Attendees</td>
          </tr>
          <tr>
            <td>Conference fee + accomodation single room</td>
            <td>750 €</td>
            <td>750 €</td>
          </tr>
          <tr>
            <td>Conference fee + accomodation double room</td>
            <td>650 €</td>
            <td>650 €</td>
          </tr>
          <tr>
            <td>Students</td>
          </tr>
          <tr>
            <td>Conference fee + accomodation single room</td>
            <td>650 €</td>
            <td>650 €</td>
          </tr>
          <tr>
            <td>Conference fee + accomodation single room</td>
            <td>550 €</td>
            <td>550 €</td>
          </tr>
        </tbody>
      </table>
      <br />
      Additional nights can be booked on registration.
    </div>
  </div>;
export default withStyles(styles)(Register);
