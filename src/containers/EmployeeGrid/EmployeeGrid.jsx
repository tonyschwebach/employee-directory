// onClick for table headings to setState of sortBy
// render table and table headings
// filter on state.searchTerm (do not filter imageURL)
// sort asc or desc based on state.sortBy
// map over state of employees to render Employee components (reference activity 16 - friends)

import React, { Component } from "react";
import API from "../../utils/API";

class EmployeeGrid extends Component {
  // rcc component state for list of employees, sortBy, searchTerm
  state = { employees: "", sortBy: "", searchTerm: "" };
  // componentDidMount renders grid
  componentDidMount() {
    const numberOfEmployees = 20 //else .getEmployees defaults to 50
    API.getEmployees(numberOfEmployees).then((res) => console.log(res.data.results));
  }

  // make api call with axios to setState with response (reference activity 20 - omdb movies)

  render() {
    return <div>EmployeeGrid</div>;
  }
}

export default EmployeeGrid;
