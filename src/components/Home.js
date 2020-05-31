import React, {lazy, Suspense} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as ActionCreators from '../actions';
import Global from './Global';
import Countries from './Countries';
import CountryFilter from './CountryFilter';
import GlobalFilter from './GlobalFilter';
import FilteredCountry from './FilteredCountry';
const Map = lazy(() => import('./Map'));


function Home(props) {
  const {
    changeFilter, displayMap, loading, filter, isLoading, dataSummary, mapDisplay,
  } = props;
  const handleFilterChange = event => {
    event.preventDefault();
    changeFilter(event.target.value);
    loading();
  };

  const showMap = (event, value) => {
    event.preventDefault();
    displayMap(value);
    loading();
  };

  const handleClick = (event, countryName) => {
    event.preventDefault();
    changeFilter(countryName);
    document.querySelector('#country-selector-filter').value = countryName;
    loading();
  };

  const resetSelector = e => {
    e.preventDefault();
    changeFilter('All');
    document.querySelector('#country-selector-filter').value = 'All';
    loading();
  };

  /* eslint-disable consistent-return */
  const getCountry = ((countries, country) => {
    let i = 0;
    while (i < countries.length) {
      if (countries[i].Country === country) {
        return countries[i];
      }
      i += 1;
    }
  });

  if (isLoading) {
    return (<div>Loading...</div>);
  } if (mapDisplay) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Map back={showMap} />
      </Suspense>
    );
  } if (filter === 'Global') {
    /* eslint-disable max-len */
    return (
      <div>
        <CountryFilter countries={dataSummary.Countries} handleFilterChange={handleFilterChange} />
        <GlobalFilter globalData={dataSummary.Global} date={dataSummary.Date} back={resetSelector} />
      </div>
    );
  } if (filter !== 'All') {
    return (
      <div>
        <CountryFilter countries={dataSummary.Countries} handleFilterChange={handleFilterChange} />
        <FilteredCountry country={getCountry(dataSummary.Countries, filter)} back={resetSelector} />
      </div>
    );
  }
  return (
    <div>
      <button type="submit" onClick={event => showMap(event, true)} globe>View Globe</button>
      <CountryFilter countries={dataSummary.Countries} handleFilterChange={handleFilterChange} />
      <Global globalData={dataSummary.Global} handleClick={handleClick} />
      <Countries countriesData={dataSummary.Countries} handleClick={handleClick} back={resetSelector} />
    </div>
  );
}

const mapStateToProps = (state => state);
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
const mapDispatchToProps = dispatch => {
  return {
    filterBooks: filter => {
      dispatch(ActionCreators.changeFilter(filter));
    },
    loading: () => {
      dispatch(ActionCreators.loading);
    },
    displayMap: () => {
      dispatch(ActionCreators.displayMap);
    },
  };
};

/* eslint-disable react/forbid-prop-types  */
/* eslint-disable react/require-default-props  */
Home.propTypes = {
  dataSummary: PropTypes.object,
  changeFilter: PropTypes.func.isRequired,
  displayMap: PropTypes.func.isRequired,
  loading: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  mapDisplay: PropTypes.bool.isRequired,
};


export default connect(mapStateToProps, ActionCreators)(Home);
