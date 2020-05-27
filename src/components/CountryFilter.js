import React from 'react';
import PropTypes from 'prop-types';



const CountryFilter = (props) => {
    const countries = ['All', 'Global'];
    props.countries.map(country => {
        countries.push(country.Country)
    })
    const options = countries.map(country => <option key={country}>{country}</option>);
    return (
      <div className="country-filter">
        <h3 className="new-book">Filter countries</h3>
        <select id="country-selector-filter" onChange={props.handleFilterChange}>
          {options}
        </select>
      </div>
    );
}

CountryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CountryFilter;