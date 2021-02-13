// rsc component
// deconstruct props for image, name, phone, email, and DOB
// render table row with table table data for each field

import React from "react";

const Employee = () => {
  return (
    <tr>
      <td>
        <img alt="employee picture of name" src="" />
      </td>
      <td>Johnny Rose</td>
      <td>555-123-4567</td>
      <td>johnny@rosebud.com</td>
      <td>1/1/1900</td>
    </tr>
  );
};

export default Employee;
