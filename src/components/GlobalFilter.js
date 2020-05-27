import React from 'react';
import PropTypes from 'prop-types';
import * as ActionCreators from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons'


function GlobalFilter(props) {
    return (
        <div className='global filtered-country'>
            <FontAwesomeIcon onClick={(event) => {props.back(event)}} icon={faArrowAltCircleLeft} />
            <h1> Global Covid-19 Official Data Analytics </h1>

                <div className='country-container'>                                                                     
                    <p><b>New Confirmed:</b> {props.globalData.NewConfirmed}</p>
                    <p><b>Total Confirmed</b> {props.globalData.TotalConfirmed}</p>
                    <p><b>New Deaths</b> {props.globalData.NewDeaths}</p>
                    <p><b>New Recovered</b> {props.globalData.NewRecovered}</p>
                    <p><b>Total Deaths</b> {props.globalData.TotalDeaths}</p>
                    <p><b>Total Recovered</b> {props.globalData.TotalRecovered}</p>
                    <p>Date: {props.date}</p>
                </div>
             

        </div>
    )

}

export default GlobalFilter;