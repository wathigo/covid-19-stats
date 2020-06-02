import { connect } from 'react-redux';
import Globe from 'react-globe.gl';
import React, {
  memo, useState, useEffect, useRef,
} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import * as ActionCreators from '../actions';


function Global(props) {
  const { dataSummary, back } = props;
  const globeEl = useRef();
  const [countries, setCountries] = useState({ features: [] });
  const [country, setCountry] = useState(0);
  const [hoverDistance, setHoverDistance] = useState();

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
      })
      /* eslint-disable no-console */
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    // Auto-rotate
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.3;

    globeEl.current.pointOfView({ altitude: 4 }, 5000);
    globeEl.current.controls().addEventListener('start', 
  () => { globeEl.current.controls().autoRotate = false; }
);
  }, []);

  return (
    <div>
      <FontAwesomeIcon className="back-from-map" onClick={event => { back(event, false); }} icon={faArrowAltCircleLeft} />
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"

        polygonsData={countries.features}
        polygonAltitude={d => (d === hoverDistance ? 0.15 : 0.08)}
        polygonCapColor={d => (d === hoverDistance ? 'blue' : 'black')}
        polygonSideColor={() => 'grey'}
        onPolygonHover={setHoverDistance}
        polygonStrokeColor={() => '#111'}
        onPolygonClick={({ properties: d }) => getCountryStats(d.ADMIN)}
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
        polygonsTransitionDuration={300}
      />
    </div>
  );
}
/* eslint-disable react/forbid-prop-types */
Global.propTypes = {
  dataSummary: PropTypes.object.isRequired,
  back: PropTypes.func.isRequired,
};

const mapStateToProps = (state => state);

export default connect(mapStateToProps, ActionCreators)(memo(Global));
