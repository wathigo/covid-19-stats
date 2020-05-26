import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as ActionCreators from '../actions';
import Global from './Global';
import Country from './Country';


function Home(props) {
   
    if (props.isLoading) {
        return (<div>Loading...</div>)
    } else {
        return (
            <div>
                <Global globalData={props.dataSummary.Global}/>
            </div>
        )
    }
         
}

const mapStateToProps = (state => {
    return state;
});

export default connect(mapStateToProps, ActionCreators)(Home);