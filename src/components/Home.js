import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as ActionCreators from '../actions';
import Global from './Global';
import Countries from './Countries';
import CountryFilter from './CountryFilter';
import GlobalFilter from './GlobalFilter';
import FilteredCountry from './FilteredCountry';


function Home(props) {

    const handleFilterChange = (event) => {
        event.preventDefault();
        props.changeFilter(event.target.value);
        props.loading();
      }

      const handleClick = (event, country_name) => {
        event.preventDefault();
        props.changeFilter(country_name);
        document.querySelector('#country-selector-filter').value = country_name;
        props.loading();
      }

      const resetSelector = (e) => {
        e.preventDefault()
        props.changeFilter('All');
        props.loading();
      }

      const getCountry = ((countries, country) => {
          let i = 0;
          while (i < countries.length) {
              if (countries[i].Country === country) {
                  return countries[i];
              }
              i += 1;
          }
      })

      console.log(props.filter)
   
    if (props.isLoading) {
        return (<div>Loading...</div>)
    } else if (props.filter === 'Global') {
        return (
            <div>
                <CountryFilter countries={props.dataSummary.Countries} handleFilterChange={handleFilterChange}/>            
                <GlobalFilter globalData={props.dataSummary.Global} date={props.dataSummary.Date} back={resetSelector}/>
            </div>
        )
    } else if (props.filter !== 'All') {
        return (
            <div>
                <CountryFilter countries={props.dataSummary.Countries} handleFilterChange={handleFilterChange}/>
                <FilteredCountry country={getCountry(props.dataSummary.Countries, props.filter)} back={resetSelector}/>
            </div>
        )
    } else {
        return (
            <div>
                <CountryFilter countries={props.dataSummary.Countries} handleFilterChange={handleFilterChange}/>
                <Global globalData={props.dataSummary.Global} handleClick={handleClick} />
                <Countries countriesData={props.dataSummary.Countries} handleClick={handleClick} back={resetSelector}/>
            </div>
        )
    }
         
}

const mapStateToProps = (state => {
    return state;
});

const mapDispatchToProps = function (dispatch) {
    return {
      filterBooks: (filter) => {
        dispatch(ActionCreators.changeFilter(filter));
      },
      loading: () => {
          dispatch(ActionCreators.loading)
      }
    };
  };
  

export default connect(mapStateToProps, ActionCreators)(Home);