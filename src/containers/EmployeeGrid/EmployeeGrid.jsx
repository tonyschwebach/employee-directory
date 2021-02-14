import React from 'react';
import Employee from '../../components/Employee/Employee';
import "./EmployeeGrid.css";

const EmployeeGrid = (props) => {
  return (
//  {/* render table and table headings */}
        <table className="table is-striped is-narrow is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>DOB</th>
            </tr>
          </thead>

          {/* TODO: make table headings always viewable */}
          {/* map over state of employees to render Employee components (reference activity 16 - friends) */}
          <tbody>
    
            {props.employeesToDisplay
              ? props.employeesToDisplay.map((employee) => (
                  <Employee key={employee.id.value} {...employee} />
                ))
              : <tr>No Employees to display</tr>}
              
          </tbody>
        </table>
  );
};

export default EmployeeGrid;