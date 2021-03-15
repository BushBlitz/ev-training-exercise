import React, { Component } from "react";
import { DataGrid } from "@material-ui/data-grid";
import axios from "axios";

export class ListEmployee extends Component {
  columns = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
      cellClassName: "dataGridCellClassDarkMode",
      headerClassName: "dataGridHeaderClassDarkMode",
    },
    {
      field: "firstName",
      headerName: "First name",
      width: 270,
      cellClassName: "dataGridCellClassDarkMode",
      headerClassName: "dataGridHeaderClassDarkMode",
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 270,
      cellClassName: "dataGridCellClassDarkMode",
      headerClassName: "dataGridHeaderClassDarkMode",
    },
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
    axios
      .get(process.env.REACT_APP_SERVER_URL + "/employee")
      .then((response) => {
        this.setState({
          employees: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  setSelectedRow(row) {
    if (this.props.rowClickHandler != undefined) {
      this.props.rowClickHandler(row);
    }
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
          width: "100%",
        }}
        className="dataGridDarkMode"
      >
        <DataGrid
          rows={employees}
          columns={this.columns}
          pageSize={5}
          hideFooterSelectedRowCount={true}
          onRowClick={(rows) => {
            this.setSelectedRow(rows.row);
          }}
          color="primary"
        ></DataGrid>
      </div>
    );
  }
}

export default ListEmployee;
