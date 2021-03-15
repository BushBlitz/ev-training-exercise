import React, { Component } from "react";
import ListEmployee from "./ListEmployee";

export class ViewEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: undefined,
      firstName: undefined,
      lastName: undefined,
    };

    this.setEmployee = this.setEmployee.bind(this);
    this.refreshList = this.refreshList.bind(this);

    this.listEmployeeRef = React.createRef();
  }

  setEmployee(row) {
    this.setState({
      id: row.id,
      firstName: row.firstName,
      lastName: row.lastName,
    });
  }
  refreshList() {
    this.listEmployeeRef.current.getEmployees()
  }
  render() {
    return (
      <div>
        <h1>View Employee</h1>
        <div style={{width:"50%",margin:"auto"}}>
          
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
        <br/>
        <button onClick={this.refreshList}>Refresh List</button>
      </div>
    );
  }
}

export default ViewEmployee;
