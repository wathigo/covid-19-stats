import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as ActionCreators from '../actions';


function BookList(props) {
    useEffect(() => { 
        props.fetchData();
      });
   
    return (
        <div>Click me</div>
    )
         
}

const mapStateToProps = (state => {
    return state;
});

export default connect(mapStateToProps, ActionCreators)(BookList);