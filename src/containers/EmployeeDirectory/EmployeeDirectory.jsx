// onClick for table headings to setState of sortBy

import React, { Component } from "react";
import Search from "../../components/Search/Search";
import API from "../../utils/API";
import EmployeeGrid from "../EmployeeGrid/EmployeeGrid";
import "./EmployeeDirectory.css";

class EmployeeDirectory extends Component {
  // rcc component state for list of employees, sortBy, searchTerm
  state = { employees: [], sortBy: "name-asc", searchTerm: "" };

  // componentDidMount renders grid
  componentDidMount() {
    const numberOfEmployees = 20; //else .getEmployees defaults to 50
    API.getEmployees(numberOfEmployees)
      .then((res) => {
        // set an unchanging list of employees
        this.setState({ employees: res.data.results });
        this.sortEmployees();
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
  };

  // handle search form submit search bar
  handleFormSubmit = (event) => {
    event.preventDefault();
  };

  // handle click for user choosing to sort by name
  handleClick = (event) => {
    if (this.state.sortBy === "name-asc") {
      this.setState({ sortBy: "name-desc" });
    } else {
      this.setState({ sortBy: "name-asc" });
    }
  };

  // function to sort employees ascending by name
  sortEmployees = () => {
    const sortedEmployees = this.state.employees.sort((a, b) => {
      let nameA = `${a.name.first.toLowerCase()}  ${a.name.last.toLowerCase()}`;
      let nameB = `${b.name.first.toLowerCase()}  ${b.name.last.toLowerCase()}`;
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    console.log(sortedEmployees);
    this.setState({ employees: sortedEmployees });
  };

  // Filter this.state.employees for employess without a name, email, or phone number containing the search term
  filterEmployees = () => {
    const filteredEmployees = this.state.employees.filter((employee) => {
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
  /* sort asc or desc based on state.sortBy */
  compareName = (a, b) => {
    return a - b;
  };

  render() {
    return (
      <div className="container mt-6 px-6">
        <Search
          value={this.state.searchTerm}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        {/* pass result of the filteredEmployees function as a prop to the employee grid component  */}
        <EmployeeGrid
          employeesToDisplay={this.filterEmployees()}
          sortBy={this.state.sortBy}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default EmployeeDirectory;
