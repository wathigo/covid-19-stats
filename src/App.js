import React, { useEffect, Suspense, Fragment } from 'react';
import { connect } from 'react-redux';
import './App.css';

import Home from './components/Home';
import * as ActionCreators from './actions';

function App(props) {
  useEffect(() => { 
    props.fetchData();
  }, []);

  return (
    <Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="App">      
          <Home/>
        </div>
      </Suspense>
    </Fragment>
  );
}

const mapStateToProps = (state => {
  return state;
});

export default connect(mapStateToProps, ActionCreators)(App);
