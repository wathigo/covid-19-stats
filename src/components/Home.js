import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as ActionCreators from '../actions';
import Global from './Global';
import Countries from './Countries';
import CountryFilter from './CountryFilter';
import GlobalFilter from './GlobalFilter';
import FilteredCountry from './FilteredCountry';
import Map from './Map';


function Home(props) {
  const {
    changeFilter, displayMap, loading, filter, isLoading, dataSummary, mapDisplay,
  } = props;
  const handleFilterChange = (event) => {
    event.preventDefault();
    changeFilter(event.target.value);
    loading();
  };

  const showMap = (event, value) => {
    event.preventDefault();
    displayMap(value);
    console.log('Actions done!');
    loading();
  };

  const handleClick = (event, country_name) => {
    event.preventDefault();
    changeFilter(country_name);
    document.querySelector('#country-selector-filter').value = country_name;
    loading();
  };

  const resetSelector = (e) => {
    e.preventDefault();
    changeFilter('All');
    document.querySelector('#country-selector-filter').value = 'All';
    loading();
  };

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
      <Map back={showMap} />
    );
  } if (filter === 'Global') {
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
      <button onClick={(event) => showMap(event, true)} globe>View Globe</button>
      <CountryFilter countries={dataSummary.Countries} handleFilterChange={handleFilterChange} />
      <Global globalData={dataSummary.Global} handleClick={handleClick} />
      <Countries countriesData={dataSummary.Countries} handleClick={handleClick} back={resetSelector} />
    </div>
  );
}

const mapStateToProps = ((state) => state);

const mapDispatchToProps = function (dispatch) {
  return {
    filterBooks: (filter) => {
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
