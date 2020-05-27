import React from 'react';
import PropTypes from 'prop-types';
import * as ActionCreators from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'


function Global(props) {
    return (
        <div className='global filtered-country'>
            <FontAwesomeIcon onClick={(event) => {props.back(event)}} icon={faArrowAltCircleLeft} />
            <h2>  {props.country.Country} Covid-19 Official Data Analytics </h2>

                <div className='country-container'>                                                                     
                    <p><b>New Confirmed:</b> {props.country.NewConfirmed}</p>
                    <p><b>Total Confirmed</b> {props.country.TotalConfirmed}</p>
                    <p><b>New Deaths</b> {props.country.NewDeaths}</p>
                    <p><b>New Recovered</b> {props.country.NewRecovered}</p>
                    <p><b>Total Deaths</b> {props.country.TotalDeaths}</p>
                    <p><b>Total Recovered</b> {props.country.TotalRecovered}</p>
                    <p>Date: {props.country.Date}</p>
                </div>
             

        </div>
    )

}

export default Global;