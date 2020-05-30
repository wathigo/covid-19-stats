import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';


function Countries(props) {
  const {countriesData, handleClick} = props;
  const countries = countriesData.map((country, country.Country) => (
    <div className="country">
      <h2>{ country.Country}</h2>
      <p>
        <b>Total Confirmed:</b>
        {' '}
        {country.TotalConfirmed}
      </p>
      <p>
        <b>Total Deaths</b>
        {' '}
        {country.TotalDeaths}
      </p>
      <FontAwesomeIcon onClick={(event) => { handleClick(event, country.Country); }} icon={faArrowCircleRight} />
    </div>
  ));
  return (
    <div className="countries">
      {countries}
    </div>
  );
}

Countries.propTypes = {
  countriesData: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Countries;
