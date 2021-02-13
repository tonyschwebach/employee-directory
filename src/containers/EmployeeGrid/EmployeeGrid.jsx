// onClick for table headings to setState of sortBy

import React, { Component } from "react";
import Employee from "../../components/Employee/Employee";
import API from "../../utils/API";


class EmployeeGrid extends Component {
  // rcc component state for list of employees, sortBy, searchTerm
  state = { employees: "", sortBy: "", searchTerm: "" };
  // componentDidMount renders grid
  componentDidMount() {
    const numberOfEmployees = 20; //else .getEmployees defaults to 50
    API.getEmployees(numberOfEmployees)
      .then((res) => {
        this.setState({ employees: res.data.results });
        console.log(this.state.employees);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // make api call with axios to setState with response (reference activity 20 - omdb movies)

  render() {
    return (
      <div className="container mt-6">
        {/* render table and table headings */}
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
          <tbody>
            <Employee />
          </tbody>
        </table>
      </div>

      /* filter on state.searchTerm (do not filter imageURL) */
      /* sort asc or desc based on state.sortBy */
      /* map over state of employees to render Employee components (reference activity 16 - friends) */
    );
  }
}

export default EmployeeGrid;
