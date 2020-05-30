import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';


function FilteredCountry(props) {
  const { country, back } = props;
  return (
    <div className="global filtered-country">
      <FontAwesomeIcon onClick={(event) => { back(event); }} icon={faArrowAltCircleLeft} />
      <h2>
        {' '}
        {country.Country}
        {' '}
        Covid-19 Official Data Analytics
        {' '}
      </h2>

      <div className="country-container">
        <p>
          <b>New Confirmed:</b>
          {' '}
          {country.NewConfirmed}
        </p>
        <p>
          <b>Total Confirmed:</b>
          {' '}
          {country.TotalConfirmed}
        </p>
        <p>
          <b>New Deaths:</b>
          {' '}
          {country.NewDeaths}
        </p>
        <p>
          <b>New Recovered:</b>
          {' '}
          {country.NewRecovered}
        </p>
        <p>
          <b>Total Deaths:</b>
          {' '}
          {country.TotalDeaths}
        </p>
        <p>
          <b>Total Recovered:</b>
          {' '}
          {country.TotalRecovered}
        </p>
        <p>
          Date:
          {country.Date}
        </p>
      </div>


    </div>
  );
}

FilteredCountry.propTypes = {
  country: PropTypes.object.isRequired,
  back: PropTypes.func.isRequired,
};

export default FilteredCountry;
