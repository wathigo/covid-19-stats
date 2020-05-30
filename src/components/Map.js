import { connect } from 'react-redux';
import Globe from 'react-globe.gl';
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import * as ActionCreators from '../actions';


function Global(props) {
  const { dataSummary, back } = props;
  const globeEl = useRef();
  const [countries, setCountries] = useState({ features: [] });
  const [altitude, setAltitude] = useState(0.1);
  const [country, setCountry] = useState(0);
  const [transitionDuration, setTransitionDuration] = useState(1000);

  const getCountryStats = name => {
    if (dataSummary) {
      let i = 0;
      const countries = dataSummary.Countries;
      while (i < countries.length) {
        if (countries[i].Country === name) {
          setCountry(countries[i]);
        }
        i += 1;
      }
    }
  };

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
      .then(res => res.json())
      .then(countries => {
        setCountries(countries);
        setTimeout(() => {
          setTransitionDuration(4000);
          setAltitude(() => feat => Math.max(0.1, Math.sqrt(+feat.properties.POP_EST) * 7e-5));
        }, 3000);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    // Auto-rotate
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.3;

    globeEl.current.pointOfView({ altitude: 4 }, 5000);
  }, []);

  return (
    <div>
      <FontAwesomeIcon onClick={event => { back(event, false); }} icon={faArrowAltCircleLeft} />
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"

        polygonsData={countries.features}
        polygonAltitude={altitude}
        polygonCapColor={() => 'rgba(200, 0, 0, 0.6)'}
        polygonSideColor={() => 'rgba(0, 100, 0, 0.15)'}
        polygonLabel={({ properties: d }) => `
                  <b>${d.ADMIN} (${d.ISO_A2})</b> <br />
                  ${getCountryStats(d.ADMIN) === 'undefined' ? ' ' : ' '}
                  New Deaths: ${country.NewDeaths}<br>
                  Total Confirmed Cases: ${country.TotalConfirmed}<br>
                  New Confirmed Cases: ${country.NewConfirmed}<br>
                  New Recovered Cases: ${country.NewRecovered}<br>
                  Total Deaths Cases: ${country.TotalDeaths}<br>
                  Total Recovered Cases: ${country.TotalRecovered}<br>
                  <i>${country.Date}</i>
                `}
        polygonsTransitionDuration={transitionDuration}
      />
    </div>
  );
}

Global.propTypes = {
  dataSummary: PropTypes.object.isRequired,
  back: PropTypes.func.isRequired,
};

const mapStateToProps = (state => state);

export default connect(mapStateToProps, ActionCreators)(Global);
