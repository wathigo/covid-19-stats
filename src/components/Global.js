import React from 'react';
import PropTypes from 'prop-types';
import * as ActionCreators from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'


function Global(props) {
    return (
        <div className='global'>
            <h1> Global Covid-19 Official Data Analytics </h1>

                <div className='global-container'>                                                                     
                    <p><b>Total Confirmed:</b> {props.globalData.TotalConfirmed}</p>
                    <p><b>Total Deaths</b> {props.globalData.TotalDeaths}</p>
                </div>
             <FontAwesomeIcon icon={faArrowCircleRight} />

        </div>
    )

}

export default Global;