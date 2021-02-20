import React from "react";

import { Navbar, FormControl} from "react-bootstrap";

const Filter = (props) => {

  const handleChange = (event) => {
    props.setFilter(event.target.value);
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Table of Countries</Navbar.Brand>

      <FormControl type="text" placeholder="Filter by Capital" className="mr-sm-2" onChange={(e) => {handleChange(e)}}/>
    </Navbar>
  );
};

export default Filter;
