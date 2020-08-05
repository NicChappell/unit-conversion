import React from 'react';
import logo from './unit-conversion-logo.svg';
import './App.css';

import Search from './Search';
import EmptySearch from './EmptySearch';

import Angle from './Angle';
import Area from './Area';
import Astronomy from './Astronomy';
import Energy from './Energy';
import Force from './Force';
import Frequency from './Frequency';
import Length from './Length';
import Mass from './Mass';
import Pressure from './Pressure';
import Speed from './Speed';
import Temperature from './Temperature';
import Time from './Time';
import Volume from './Volume';

import data from './data';

const angleTerms = data.angle.search_terms;
const areaTerms = data.area.search_terms;
const astronomyTerms = data.astronomy.search_terms;
const energyTerms = data.energy.search_terms;
const forceTerms = data.force.search_terms;
const frequencyTerms = data.frequency.search_terms;
const lengthTerms = data.length.search_terms;
const massTerms = data.mass.search_terms;
const pressureTerms = data.pressure.search_terms;
const speedTerms = data.speed.search_terms;
const temperatureTerms = data.temperature.search_terms;
const timeTerms = data.time.search_terms;
const volumeTerms = data.volume.search_terms;
const searchTerms = [].concat(
  angleTerms,
  areaTerms,
  astronomyTerms,
  energyTerms,
  forceTerms,
  frequencyTerms,
  lengthTerms,
  massTerms,
  pressureTerms,
  speedTerms,
  temperatureTerms,
  timeTerms,
  volumeTerms
);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleFocusApp = this.handleFocusApp.bind(this);
    this.handleSearchApp = this.handleSearchApp.bind(this);

    this.state = {
      // Toggle display of each calculator
      showAngle: true,
      showArea: true,
      showAstronomy: true,
      showEnergy: true,
      showForce: true,
      showFrequency: true,
      showLength: true,
      showMass: true,
      showPressure: true,
      showTemperature: true,
      showSpeed: true,
      showTime: true,
      showVolume: true,
      // Toggle display of additional details for each calculator
      showAngleDetails: false,
      showAreaDetails: false,
      showAstronomyDetails: false,
      showEnergyDetails: false,
      showForceDetails: false,
      showFrequencyDetails: false,
      showLengthDetails: false,
      showMassDetails: false,
      showPressureDetails: false,
      showTemperatureDetails: false,
      showSpeedDetails: false,
      showTimeDetails: false,
      showVolumeDetails: false,
      // Toggle display of <EmptySearch />
      showEmptySearch: false
    };
  }

  handleFocusApp(calculatorName) {
    const arg1 = calculatorName.toLowerCase();

    function showCalculatorDetails(arg2) {
      return (arg1 === arg2) ? true : false;
    }

    this.setState({
      showAngleDetails: showCalculatorDetails('angle'),
      showAreaDetails: showCalculatorDetails('area'),
      showAstronomyDetails: showCalculatorDetails('astronomy'),
      showEnergyDetails: showCalculatorDetails('energy'),
      showForceDetails: showCalculatorDetails('force'),
      showFrequencyDetails: showCalculatorDetails('frequency'),
      showLengthDetails: showCalculatorDetails('length'),
      showMassDetails: showCalculatorDetails('mass'),
      showPressureDetails: showCalculatorDetails('pressure'),
      showTemperatureDetails: showCalculatorDetails('temperature'),
      showSpeedDetails: showCalculatorDetails('speed'),
      showTimeDetails: showCalculatorDetails('time'),
      showVolumeDetails: showCalculatorDetails('volume')
    });
  }

  handleSearchApp(event) {
    const target = event.target;
    let query = target.value;

    // filter() creates an array filled with all array elements that pass a test (provided as a function)
    // includes() determines whether a string contains the characters of a specified string.
    let searchResult = searchTerms.filter((searchTerm) => {
      return searchTerm.includes(query.toLowerCase());
    });

    // some() checks each element of the array against a test function and returns true any element passes test
    // indexOf() >= 0 returns true if the given argument is present in the array
    function showCalculator(array) {
      return array.some((q) => searchResult.indexOf(q) >= 0);
    }

    const emptySearch = (searchTerms.some((q) => searchResult.indexOf(q) >= 0)) ? false : true;

    this.setState({
      showAngle: showCalculator(angleTerms),
      showArea: showCalculator(areaTerms),
      showAstronomy: showCalculator(astronomyTerms),
      showEnergy: showCalculator(energyTerms),
      showForce: showCalculator(forceTerms),
      showFrequency: showCalculator(frequencyTerms),
      showLength: showCalculator(lengthTerms),
      showMass: showCalculator(massTerms),
      showPressure: showCalculator(pressureTerms),
      showSpeed: showCalculator(speedTerms),
      showTemperature: showCalculator(temperatureTerms),
      showTime: showCalculator(timeTerms),
      showVolume: showCalculator(volumeTerms),
      showEmptySearch: emptySearch
    });
  }

  render() {
    return (
      <div className="App">
        <header className="mb-3">
          <nav className="container">
            <div className="row">
              <div className="col">
                <img src={logo} alt="Unit Conversion" />
                <h1>Unit Conversion</h1>
                <Search onSearchApp={this.handleSearchApp} />
              </div>
            </div>
          </nav>
        </header>

        <Angle
          onFocusApp={this.handleFocusApp}
          // NOTE: showCalculator needs to be configured for each calculator
          showCalculator={this.state.showAngle}
          // NOTE: showCalculatorDetails needs to be configured for each calculator
          showCalculatorDetails={this.state.showAngleDetails} />
        <Area
          onFocusApp={this.handleFocusApp}
          // NOTE: showCalculator needs to be configured for each calculator
          showCalculator={this.state.showArea}
          // NOTE: showCalculatorDetails needs to be configured for each calculator
          showCalculatorDetails={this.state.showAreaDetails} />
        <Astronomy
          onFocusApp={this.handleFocusApp}
          // NOTE: showCalculator needs to be configured for each calculator
          showCalculator={this.state.showAstronomy}
          // NOTE: showCalculatorDetails needs to be configured for each calculator
          showCalculatorDetails={this.state.showAstronomyDetails} />
        <Energy
          onFocusApp={this.handleFocusApp}
          // NOTE: showCalculator needs to be configured for each calculator
          showCalculator={this.state.showEnergy}
          // NOTE: showCalculatorDetails needs to be configured for each calculator
          showCalculatorDetails={this.state.showEnergyDetails} />
        <Force
          onFocusApp={this.handleFocusApp}
          // NOTE: showCalculator needs to be configured for each calculator
          showCalculator={this.state.showForce}
          // NOTE: showCalculatorDetails needs to be configured for each calculator
          showCalculatorDetails={this.state.showForceDetails} />
        <Frequency
          onFocusApp={this.handleFocusApp}
          // NOTE: showCalculator needs to be configured for each calculator
          showCalculator={this.state.showFrequency}
          // NOTE: showCalculatorDetails needs to be configured for each calculator
          showCalculatorDetails={this.state.showFrequencyDetails} />
        <Length
          onFocusApp={this.handleFocusApp}
          // NOTE: showCalculator needs to be configured for each calculator
          showCalculator={this.state.showLength}
          // NOTE: showCalculatorDetails needs to be configured for each calculator
          showCalculatorDetails={this.state.showLengthDetails} />
        <Mass
          onFocusApp={this.handleFocusApp}
          // NOTE: showCalculator needs to be configured for each calculator
          showCalculator={this.state.showMass}
          // NOTE: showCalculatorDetails needs to be configured for each calculator
          showCalculatorDetails={this.state.showMassDetails} />
        <Pressure
          onFocusApp={this.handleFocusApp}
          // NOTE: showCalculator needs to be configured for each calculator
          showCalculator={this.state.showPressure}
          // NOTE: showCalculatorDetails needs to be configured for each calculator
          showCalculatorDetails={this.state.showPressureDetails} />
        <Speed
          onFocusApp={this.handleFocusApp}
          // NOTE: showCalculator needs to be configured for each calculator
          showCalculator={this.state.showSpeed}
          // NOTE: showCalculatorDetails needs to be configured for each calculator
          showCalculatorDetails={this.state.showSpeedDetails} />
        <Temperature
          onFocusApp={this.handleFocusApp}
          // NOTE: showCalculator needs to be configured for each calculator
          showCalculator={this.state.showTemperature}
          // NOTE: showCalculatorDetails needs to be configured for each calculator
          showCalculatorDetails={this.state.showTemperatureDetails} />
        <Time
          onFocusApp={this.handleFocusApp}
          // NOTE: showCalculator needs to be configured for each calculator
          showCalculator={this.state.showTime}
          // NOTE: showCalculatorDetails needs to be configured for each calculator
          showCalculatorDetails={this.state.showTimeDetails} />
        <Volume
          onFocusApp={this.handleFocusApp}
          // NOTE: showCalculator needs to be configured for each calculator
          showCalculator={this.state.showVolume}
          // NOTE: showCalculatorDetails needs to be configured for each calculator
          showCalculatorDetails={this.state.showVolumeDetails} />

        <EmptySearch showEmptySearch={this.state.showEmptySearch} />

        <footer className="mt-3">
          <div className="container">
            <div className="row">
              <div className="col">
                <img src={logo} alt="Unit Conversion" />
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
