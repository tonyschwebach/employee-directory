// rsc component

import moment from "moment";
import React from "react";

// deconstruct props for image, name, phone, email, and DOB
const Employee = ({ id, picture, name, phone, email, dob }) => {
  return (
    // render table row with table table data for each field
    <tr>
      <td>
        <img alt={`employee picture of ${name}`} src={picture} />
      </td>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>{moment(dob).format("M/D/YYYY")}</td>
    </tr>
  );
};

export default Employee;
