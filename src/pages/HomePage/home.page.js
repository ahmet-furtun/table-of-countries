import React, { useState, useEffect } from "react";
import axios from "axios";

import Filter from "../../components/filter/filter.component";
import TableOfCountries from "../../components/table/table.component";

import "./home.page.css";

const HomePage = () => {
  let country = [];
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("https://restcountries.eu/rest/v2/all");
      let index = 0;
      while (request.data[index] != null) {
        if (!filter || filter.length === 0) {
          country.push({
            name: request.data[index].name,
            capital: request.data[index].capital,
            region: request.data[index].region,
            flag: request.data[index].flag,
          });
        } else if (request.data[index].capital.toLowerCase().includes(filter.toLocaleLowerCase())) {
          country.push({
            name: request.data[index].name,
            capital: request.data[index].capital,
            region: request.data[index].region,
            flag: request.data[index].flag,
          });
        }
        index++;
      }
      setCountries(country);
      return request;
    }
    fetchData();
  }, [filter]);

  return (
    <div>
      <Filter setFilter={setFilter} />
      <TableOfCountries countries={countries} />
    </div>
  );
};

export default HomePage;
