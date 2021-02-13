// onClick for table headings to setState of sortBy

import React, { Component } from "react";
import Employee from "../../components/Employee/Employee";
import Search from "../../components/Search/Search";
import API from "../../utils/API";
import "./EmployeeGrid.css";

class EmployeeGrid extends Component {
  // rcc component state for list of employees, sortBy, searchTerm
  state = { employees: [], sortBy: "", searchTerm: "" };

  // componentDidMount renders grid
  componentDidMount() {
    const numberOfEmployees = 20; //else .getEmployees defaults to 50
    API.getEmployees(numberOfEmployees)
      .then((res) => {
        this.setState({ employees: res.data.results });
        // console.log(this.state.employees);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  // sort by name
  compareName = (a, b) => {
    return a - b;
  };

  /* filter on state.searchTerm (do not filter imageURL) */
  /* sort asc or desc based on state.sortBy */

  render() {
    return (
      <div className="container mt-6 px-6">
        <Search
          value={this.state.searchTerm}
          handleInputChange={this.handleInputChange}
        />

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

          {/* TODO: make table headings always viewable */}
          {/* map over state of employees to render Employee components (reference activity 16 - friends) */}
          <tbody>
            {this.state.employees
              ? this.state.employees.map((employee) => (
                  // <Employee
                  //   picture={employee.picture.thumbnail}
                  //   name={`${employee.name.first} ${employee.name.last}`}
                  //   phone={employee.phone}
                  //   email={employee.email}
                  //   dob={employee.dob.date}
                  // />
                  <Employee key={employee.id.value} {...employee} />
                ))
              : console.log("no employees yet")}
          </tbody>
        </table>
      </div>
    );
  }
}

export default EmployeeGrid;
