// make api call to randomuser.me to return a list of employees
import axios from "axios";
// const numberEmployees = 50;
const url = "https://randomuser.me/api/?inc=id,picture,name,phone,email,dob&nat=us&results=";

export default {
  getEmployees: function (numberOfEmployees =50) {
    return axios.get(url+numberOfEmployees);
  },
};
