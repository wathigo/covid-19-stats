import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import * as ActionCreators from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'


function Countries(props) {
    const countries = props.countriesData.map(country => 
        <div className='country'>
            <h2>{ country.Country}</h2>
            <p><b>Total Confirmed:</b> {country.TotalConfirmed}</p>
            <p><b>Total Deaths</b> {country.TotalDeaths}</p>
            <FontAwesomeIcon onClick={(event) => {props.handleClick(event, country.Country)}} icon={faArrowCircleRight} />
        </div>
    )
    return (
        <div className='countries'>
            {countries}
        </div>
    )

}

export default Countries;