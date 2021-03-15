import axios from "axios";
import React, { Component } from "react";
import ListEmployee from "./ListEmployee";

export class DeleteEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: undefined,
      firstName: undefined,
      lastName: undefined,
      enabled: false,
    };

    this.setEmployee = this.setEmployee.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
    this.listEmployeeRef = React.createRef();
  }

  setEmployee(row) {
    this.setState({
      id: row.id,
      firstName: row.firstName,
      lastName: row.lastName,
      enabled: true,
    });
  }
  refreshList() {
    this.listEmployeeRef.current.getEmployees();
  }
  deleteEmployee(event) {
    event.preventDefault();
    var { id } = this.state;
    console.log(process.env.REACT_APP_SERVER_URL+"/employee/"+id);
    axios
      .delete(process.env.REACT_APP_SERVER_URL + "/employee/" + id)
      .then((response) => {
        alert("Employee Delete Success");
        this.resetState();
        this.refreshList();
      })
      .catch((error) => {
        alert("There's something wrong please try again");
        console.log(error)
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

  render() {
    return (
      <div>
        <h1>Delete Employee</h1>
        <div style={{ width: "50%", margin: "auto" }}>
          <ListEmployee
            rowClickHandler={this.setEmployee}
            ref={this.listEmployeeRef}
          ></ListEmployee>
        </div>

        <div style={{ marginTop: "25px" }}>
          Selected Employee is{" "}
          <b>
            {this.state.firstName} {this.state.lastName}
          </b>
        </div>
        <br />
        <button onClick={this.deleteEmployee} disabled={!this.state.enabled}>Delete Employee</button>
        <br/><br/>
        <button onClick={this.refreshList}>Refresh List</button>
      </div>
    );
  }
}

export default DeleteEmployee;
