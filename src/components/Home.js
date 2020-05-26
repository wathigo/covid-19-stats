import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as ActionCreators from '../actions';
import Global from './Global';


function BookList(props) {
    useEffect(() => { 
        props.fetchData();
        console.log(props)
      });
   
    return (
        <div>
            <Global/>
        </div>
    )
         
}

const mapStateToProps = (state => {
    return state;
});

export default connect(mapStateToProps, ActionCreators)(BookList);