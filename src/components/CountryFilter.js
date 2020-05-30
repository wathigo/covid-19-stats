import React from 'react';
import PropTypes from 'prop-types';


const CountryFilter = (props) => {
  const { countries, handleFilterChange } = props;
  const allCountries = ['All', 'Global'];
  countries.map((country) => {
    allCountries.push(country.Country);
  });
  const options = allCountries.map((country) => <option key={country}>{country}</option>);
  return (
    <div className="country-filter">
      <h3 className="filter-country">Filter countries</h3>
      <select id="country-selector-filter" onChange={handleFilterChange}>
        {options}
      </select>
    </div>
  );
};

CountryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

CountryFilter.propTypes = {
  countries: PropTypes.array.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default CountryFilter;
