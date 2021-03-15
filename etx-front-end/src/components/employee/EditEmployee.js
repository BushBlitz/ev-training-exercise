import { TextField } from "@material-ui/core";
import axios from "axios";
import React, { Component } from "react";
import ListEmployee from "./ListEmployee";

export class EditEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: undefined,
      firstName: "",
      lastName: "",
      enabled: false,
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.addEmployee = this.addEmployee.bind(this);
    this.setEmployee = this.setEmployee.bind(this);
    this.listEmployeeRef = React.createRef();
  }

  addEmployee(event) {
    event.preventDefault();
    var { id, firstName, lastName } = this.state;
    console.log(firstName, lastName);
    axios
      .put(process.env.REACT_APP_SERVER_URL + "/employee", {
        id: id,
        firstName: firstName,
        lastName: lastName,
      })
      .then((response) => {
        alert("Employee Edit Success");
        this.refreshList();
      })
      .catch((error) => {
        alert("There's something wrong please try again");
      });
  }

  resetState() {
    this.setState({
      id: undefined,
      firstName: "",
      lastName: "",
      enabled: false,
    });
  }
  refreshList() {
    this.listEmployeeRef.current.getEmployees();
  }

  changeHandler(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  setEmployee(row) {
    this.setState({
      id: row.id,
      firstName: row.firstName,
      lastName: row.lastName,
      enabled: true,
    });
  }

  render() {
    return (
      <div>
        <h1>Edit Employee</h1>

        <table style={{ margin: "auto", width: "100%" }}>
          <tr>
            <td style={{ width: "60%" }}>
              <div style={{ width: "90%", margin: "auto" }}>
                <ListEmployee
                  ref={this.listEmployeeRef}
                  rowClickHandler={this.setEmployee}
                ></ListEmployee>
              </div>
            </td>

            <td>
              <form onSubmit={this.addEmployee}>
                <label>
                  <b>Edit Employee Details</b>
                </label>
                <br />
                <br />
                <TextField
                  name="firstName"
                  label="First Name"
                  value={this.state.firstName}
                  variant="outlined"
                  disabled={!this.state.enabled}
                  onChange={this.changeHandler}
                ></TextField>
                <br />
                <br />
                <TextField
                  name="lastName"
                  label="Last Name"
                  value={this.state.lastName}
                  variant="outlined"
                  disabled={!this.state.enabled}
                  onChange={this.changeHandler}
                ></TextField>
                <br />
                <br />
                <button type="submit" disabled={!this.state.enabled}>
                  Save Employee
                </button>
                <br />
                <br />
                <button onClick={this.refreshList}>Refresh List</button>
              </form>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default EditEmployee;
