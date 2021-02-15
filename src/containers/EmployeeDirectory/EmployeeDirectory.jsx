// onClick for table headings to setState of sortOrder

import React, { Component } from "react";
import Search from "../../components/Search/Search";
import API from "../../utils/API";
import EmployeeGrid from "../EmployeeGrid/EmployeeGrid";
import "./EmployeeDirectory.css";

class EmployeeDirectory extends Component {
  // rcc component state for list of employees, sortOrder, searchTerm
  state = { employees: [], sortOrder: "asc", searchTerm: "" };

  // componentDidMount renders grid
  componentDidMount() {
    const numberOfEmployees = 50; //else .getEmployees defaults to 50
    API.getEmployees(numberOfEmployees)
      .then((res) => {
        // set an unchanging list of employees
        this.setState({ employees: res.data.results });
        this.sortEmployees(this.state.sortOrder);
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

    // console.log("before if block " + this.state.sortOrder);
    if (this.state.sortOrder === "asc") {
      this.setState({ sortOrder: "desc" });
      // console.log("after if set state to desc " + this.state.sortOrder);
      this.sortEmployees("desc");
    }
    if (this.state.sortOrder === "desc") {
      this.setState({ sortOrder: "asc" });
      // console.log("after if set state to asc " + this.state.sortOrder);
      this.sortEmployees("asc");
    }

    // console.log("after if blocks " + this.state.sortOrder);
    // this.sortEmployees(this.state.sortOrder);
  };

  // function to sort employees ascending by name. default ascending order
  // sort by name
  /* asc or desc based on state.sortOrder */
  sortEmployees = (order = "asc") => {
    const sortedEmployees = this.state.employees.sort((a, b) => {
      let nameA = `${a.name.first.toLowerCase()}  ${a.name.last.toLowerCase()}`;
      let nameB = `${b.name.first.toLowerCase()}  ${b.name.last.toLowerCase()}`;
      // sort for ascending or descending
      if (
        (nameA < nameB && order === "asc") ||
        (nameA > nameB && order === "desc")
      ) {
        return -1;
      }
      if (
        (nameA > nameB && order === "asc") ||
        (nameA < nameB && order === "desc")
      ) {
        return 1;
      }
      return 0;
    });
    // console.log("in sort function. orderby is " + this.state.sortOrder + order);
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
          sortOrder={this.state.sortOrder}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default EmployeeDirectory;
