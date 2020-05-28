import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';

import Home from './components/Home';
import * as ActionCreators from './actions';

function App(props) {
  useEffect(() => {
    props.fetchData();
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

const mapStateToProps = ((state) => state);

App.propTypes = {
  fetchData: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, ActionCreators)(App);
