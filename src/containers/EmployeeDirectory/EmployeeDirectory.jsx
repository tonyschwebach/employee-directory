// onClick for table headings to setState of sortBy

import React, { Component } from "react";
import Employee from "../../components/Employee/Employee";
import Search from "../../components/Search/Search";
import API from "../../utils/API";
import EmployeeGrid from "../EmployeeGrid/EmployeeGrid";
import "./EmployeeDirectory.css";

class EmployeeDirectory extends Component {
  // rcc component state for list of employees, sortBy, searchTerm
  state = { employees: [], sortBy: "", searchTerm: "" };

  // componentDidMount renders grid
  componentDidMount() {
    const numberOfEmployees = 20; //else .getEmployees defaults to 50
    API.getEmployees(numberOfEmployees)
      .then((res) => {
        // set an unchanging list of employees
        this.setState({ employees: res.data.results });
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

  filterEmployees = () => {
    // Filter this.state.employees for employess without a name, email, or phone number containing the search term

    let filteredEmployees = this.state.employees.filter((employee) => {
      return (
        employee.name.first
          .toLowerCase()
          .includes(this.state.searchTerm.toLowerCase()) ||
        employee.name.last
          .toLowerCase()
          .includes(this.state.searchTerm.toLowerCase()) ||
        employee.email.includes(this.state.searchTerm.toLowerCase()) ||
        employee.phone.includes(this.state.searchTerm)
      );
    });

    return filteredEmployees;
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
        {/* pass result of the filteredEmployees function as a prop to the employee grid component  */}
        <EmployeeGrid employeesToDisplay={this.filterEmployees()} />
      </div>
    );
  }
}

export default EmployeeDirectory;
