// rsc component

import moment from "moment";
import React from "react";
import "./Employee.css";

// deconstruct props for image, name, phone, email, and DOB
const Employee = ({ id, picture, name, phone, email, dob }) => {
  return (
    // render table row with table table data for each field
    <tr>
      <td className="is-vcentered">
        <img alt={`employee picture of ${name.first} ${name.last}`} src={picture.thumbnail} />
      </td>
      <td className="is-vcentered">{`${name.first} ${name.last}`}</td>
      <td className="is-vcentered">{phone}</td>
      <td className="is-vcentered">{email}</td>
      <td className="is-vcentered">{moment(dob.date).format("M/D/YYYY")}</td>
    </tr>
  );
};

export default Employee;
