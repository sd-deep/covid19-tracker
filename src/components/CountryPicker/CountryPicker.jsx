import React, { useState, useEffect } from "react";
//import { NativeSelect, FormControl } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

import { fetchCountries } from "../../api";
import TextField from "@material-ui/core/TextField";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    console.log('fetching countries')
    fetchAPI();
    return () => {
      console.log('unmounting country picker');
      
  }
  }, []);

  return (
    <>
      <div style={{ width: 300 }}>
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          options={fetchedCountries}
          onChange={(e, value) => handleCountryChange(value)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search by countries"
              margin="normal"
              variant="outlined"
            />
          )}
        />
      </div>
    </>
  );
};

export default CountryPicker;
