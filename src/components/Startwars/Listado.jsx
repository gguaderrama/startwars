import React from "react";

import { connect } from "react-redux";
import * as actions from "../../actions";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Darth from "./assets/darth.png";
import Image from "react-bootstrap/Image";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
class Listado extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: [],
      columns: {
        Header: "Name",
        accessor: "name", // String-based value accessors!
      },
    };

    this.CellFormatter = this.CellFormatter.bind(this);
    this.expandComponent = this.expandComponent.bind(this);
  }

  componentDidMount() {
    this.props.getListado().then((resp) => {
      this.setState({ allData: resp.data.results });
    });
  }

  CellFormatter(cell, row) {
    return (
      <div className="blue">
        <u>{cell}</u>
      </div>
    );
  }
  isExpandableRow(row) {
    return true;
  }

  expandComponent(row) {
    return (
      <div>
        Pelicula : {row.name} <br />
        Altura : {row.height} <br />
        mass : {row.mass} <br />
        hair_color : {row.hair_color} <br />
        skin_color : {row.skin_color} <br />
        eye_color : {row.eye_color} <br />
        birth_year : {row.birth_year} <br />
        homeworld : {row.homeworld} <br />
      </div>
    );
  }

  render() {
    let options = {
      expandRowBgColor: "rgb(242, 255, 163)",
    };
    return (
      <Container>
        <div>
          <h1>REACT DEVELOPER JEDI</h1>
          <Row>
            <Col>
              <Image src={Darth} rounded />
            </Col>
            <Col>
              <BootstrapTable
                data={this.state.allData}
                pagination={true}
                options={options}
                expandableRow={this.isExpandableRow}
                expandComponent={this.expandComponent}
              >
                <TableHeaderColumn
                  isKey
                  dataField="name"
                  filter={{ type: "TextFilter", delay: 100 }}
                  dataFormat={this.CellFormatter}
                >
                  Nombre
                </TableHeaderColumn>
              </BootstrapTable>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listado: state.listado.listado,
  };
};

const mapDispatch = (dispatch, props) => {
  return {
    getListado: () => dispatch(actions.getListado()),  
  };
};
export default connect(mapStateToProps, mapDispatch)(Listado);
