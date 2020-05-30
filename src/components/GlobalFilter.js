import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';


function GlobalFilter(props) {
  const { globalData, date, back } = props;
  return (
    <div className="global filtered-country">
      <FontAwesomeIcon onClick={event => { back(event); }} icon={faArrowAltCircleLeft} />
      <h1> Global Covid-19 Official Data Analytics </h1>

      <div className="country-container">
        <p>
          <b>New Confirmed:</b>
          {' '}
          {globalData.NewConfirmed}
        </p>
        <p>
          <b>Total Confirmed</b>
          {' '}
          {globalData.TotalConfirmed}
        </p>
        <p>
          <b>New Deaths</b>
          {' '}
          {globalData.NewDeaths}
        </p>
        <p>
          <b>New Recovered</b>
          {' '}
          {globalData.NewRecovered}
        </p>
        <p>
          <b>Total Deaths</b>
          {' '}
          {globalData.TotalDeaths}
        </p>
        <p>
          <b>Total Recovered</b>
          {' '}
          {globalData.TotalRecovered}
        </p>
        <p>
          Date:
          {date}
        </p>
      </div>


    </div>
  );
}
/* eslint-disable react/forbid-prop-types */
GlobalFilter.propTypes = {
  globalData: PropTypes.object.isRequired,
  date: PropTypes.func.isRequired,
  back: PropTypes.func.isRequired,
};

export default GlobalFilter;
