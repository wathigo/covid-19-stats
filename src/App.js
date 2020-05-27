import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import './App.css';

import Home from './components/Home';
import * as ActionCreators from './actions';

function App(props) {
  useEffect(() => { 
    props.fetchData();
  }, [props]);

  return (
      <div className="App">
        <Home/>
      </div>
  );
}

const mapStateToProps = (state => {
  return state;
});

export default connect(mapStateToProps, ActionCreators)(App);
