import React, { Component } from "react";
import { DataGrid } from "@material-ui/data-grid";
import axios from "axios";

export class ListEmployee extends Component {


  columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
  ];

  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };
  }

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees() {
      console.log(process.env.REACT_APP_SERVER_URL)
    axios
      .get(process.env.REACT_APP_SERVER_URL+"/employee")
      .then((response) => {
        console.log(response);
        this.setState({
          employees: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  setSelectedRow(row) {
    this.props.rowClickHandler(row);
  }
  render() {
    var { employees } = this.state;
    return (
      <div style={{ height: 400, width: "50%", margin: "auto", backgroundColor:"#ADD4D9" }}>
        <div>Selected ID is {this.state.selectedId}</div>
        <DataGrid
          rows={employees}
          columns={this.columns}
          pageSize={5}
          onRowClick={(rows) => {
            this.setSelectedRow(rows.row);
          }}
        ></DataGrid>
      </div>
    );
  }
}

export default ListEmployee;
