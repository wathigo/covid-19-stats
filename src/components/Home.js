import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as ActionCreators from '../actions';
import Global from './Global';
import Countries from './Countries';


function Home(props) {
   
    if (props.isLoading) {
        return (<div>Loading...</div>)
    } else {
        return (
            <div>
                <Global globalData={props.dataSummary.Global}/>
                <Countries countriesData={props.dataSummary.Countries}/>
            </div>
        )
    }
         
}

const mapStateToProps = (state => {
    return state;
});

export default connect(mapStateToProps, ActionCreators)(Home);