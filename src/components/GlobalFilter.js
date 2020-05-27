import React from 'react';
import PropTypes from 'prop-types';
import * as ActionCreators from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'


function GlobalFilter(props) {
    return (
        <div className='global'>
            <h1> Global Covid-19 Official Data Analytics </h1>

                <div className='global-container'>                                                                     
                    <p><b>New Confirmed:</b> {props.globalData.NewConfirmed}</p>
                    <p><b>Total Confirmed</b> {props.globalData.TotalConfirmed}</p>
                    <p><b>New Deaths</b> {props.globalData.NewDeaths}</p>
                    <p><b>New Recovered</b> {props.globalData.NewRecovered}</p>
                    <p><b>Total Deaths</b> {props.globalData.TotalDeaths}</p>
                    <p><b>Total Recovered</b> {props.globalData.TotalRecovered}</p>
                    <span>Date: {props.date}</span>
                </div>
             

        </div>
    )

}

export default GlobalFilter;