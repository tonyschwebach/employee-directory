// onClick for table headings to setState of sortBy

import React, { Component } from "react";
import Employee from "../../components/Employee/Employee";
import Search from "../../components/Search/Search";
import API from "../../utils/API";
import EmployeeGrid from "../EmployeeGrid/EmployeeGrid";
import "./EmployeeDirectory.css";

class EmployeeDirectory extends Component {
  // rcc component state for list of employees, sortBy, searchTerm
  state = { employees: [], sortBy: "", searchTerm: "", employeesToDisplay: [] };

  // componentDidMount renders grid
  componentDidMount() {
    const numberOfEmployees = 20; //else .getEmployees defaults to 50
    API.getEmployees(numberOfEmployees)
      .then((res) => {
        // set an unchanging list of employees
        this.setState({ employees: res.data.results });
        // set the array of employees to display equal to the complete list
        this.setState({ employeesToDisplay: this.state.employees });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // handle input change of search bar
  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });

    this.filterEmployees(this.state.searchTerm);
  };
  // handle search form submit search bar
  handleFormSubmit = (event) => {
    event.preventDefault();
  };

  filterEmployees = (searchTerm) => {
    // use the static employeesArray to filter a new array of employees to display  based on the search term. Render the table rows from filtered Array
    // Filter this.state.employees for employess without a name, email, or phone number containing the search term
    console.log(searchTerm);
    const filteredEmployees = this.state.employees.filter((employee) => {
      employee.name.first.includes(searchTerm);
      // employee.name.last.includes(searchTerm) ||
      // employee.email.includes(searchTerm) ||
      // employee.phone.includes(searchTerm);
    });
    // Set this.state.employeesToDisplay to equal to the new employees array
    console.log(this.state.employeesToDisplay);
    this.setState({ employeesToDisplay: filteredEmployees });
    console.log("test filter" + searchTerm + this.state.searchTerm);
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
          handleFormSubmit={this.handleFormSubmit}
        />

        <EmployeeGrid employeesToDisplay={this.state.employeesToDisplay} />
      </div>
    );
  }
}

export default EmployeeDirectory;
