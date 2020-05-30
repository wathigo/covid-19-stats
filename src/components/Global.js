import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';


function Global(props) {
  const { globalData, handleClick } = props;
  return (
    <div className="global">
      <h1> Global Covid-19 Official Data Analytics </h1>

      <div className="global-container">
        <p>
          <b>Total Confirmed:</b>
          {' '}
          {globalData.TotalConfirmed}
        </p>
        <p>
          <b>Total Deaths</b>
          {' '}
          {globalData.TotalDeaths}
        </p>
      </div>
      <FontAwesomeIcon icon={faArrowCircleRight} onClick={event => { handleClick(event, 'Global'); }} />

    </div>
  );
}
/* eslint-disable react/forbid-prop-types */
Global.propTypes = {
  globalData: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Global;
