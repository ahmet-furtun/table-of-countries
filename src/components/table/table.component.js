import React from "react";

import Table from "react-bootstrap/Table";

const TableOfCountries = (props) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th width="55%">Name</th>
          <th width="20%">Capital</th>
          <th width="15%">Region</th>
          <th width="10%">Flag</th>
        </tr>
      </thead>
      <tbody>
        {props.countries.map((country, i) => (
          <tr key={i}>
            <td>{country.name}</td>
            <td>{country.capital}</td>
            <td>{country.region}</td>
            <td><img src={country.flag} alt="new" width="65" height="40"/></td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableOfCountries;
