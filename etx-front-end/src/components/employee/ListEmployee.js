import React, { Component } from "react";
import { DataGrid } from "@material-ui/data-grid";
import axios from "axios";

export class ListEmployee extends Component {
  columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "firstName", headerName: "First name", width: 170 },
    { field: "lastName", headerName: "Last name", width: 170 },
  ];

  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };
    this.refresh = false;
  }

  componentDidMount() {
    this.getEmployees();
  }



  getEmployees() {
    console.log(process.env.REACT_APP_SERVER_URL);
    axios
      .get(process.env.REACT_APP_SERVER_URL + "/employee")
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
    
    // if(this.props.refresh)
    // {
    //   this.getEmployees()
    // }

    return (
      <div
        style={{
          height: 400,
          width: "50%",
          margin: "auto",
          backgroundColor: "#ADD4D9",
          marginTop:50
        }}
      >
        <DataGrid
          rows={employees}
          columns={this.columns}
          pageSize={5}
          hideFooterSelectedRowCount={true}
          onRowClick={(rows) => {
            this.setSelectedRow(rows.row);
          }}
        ></DataGrid>
      </div>
    );
  }
}

export default ListEmployee;
