import React, { Component } from "react";
import ListEmployee from "./ListEmployee";

export class EmployeeViewer extends Component {
  
  
  constructor(props) {
    super(props);

    this.state = {
      id: undefined,
      firstName: undefined,
      lastName: undefined,
    };

    this.setEmployee = this.setEmployee.bind(this);
  }

  setEmployee(row) {
    this.setState({
      id: row.id,
      firstName: row.firstName,
      lastName: row.lastName,
    });
  }

  render() {
    return (
      <div>
        <ListEmployee rowClickHandler={this.setEmployee}></ListEmployee>
        
        <div style={{marginTop:"25px"}}>
          Selected Employee is {this.state.firstName} {this.state.lastName}{" "}
        </div>
      </div>
    );
  }
}

export default EmployeeViewer;
