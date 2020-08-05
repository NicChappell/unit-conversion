import React from 'react';
import UnitInput from './UnitInput';
import { roundToThousandths } from './helpers'

import data from './data';

// Child component of App
// Parent component of UnitInput
class Volume extends React.Component {
  constructor(props) {
    super(props);

    this.handleFocusCalculator = this.handleFocusCalculator.bind(this);
    this.handleChangeCalculator = this.handleChangeCalculator.bind(this);

    this.state = {
      focus: '',
      // NOTE: <input> names need to be configured for each calculator
      tsp: '',
      tbsp: '',
      oz: '',
      cup: '',
      pt: '',
      qt: '',
      gal: '',
      ml: '',
      l: '',
      m3: '',
      in3: '',
      ft3: ''
    };
  }

  handleFocusCalculator(event) {
    const target = event.target;
    const name = target.name;

    this.setState({
      focus: name,
    });

    this.props.onFocusApp(data.volume.calculator_name);
  }

  handleChangeCalculator(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      // NOTE: [key]: value calculations need to be configured for each calculator
      tsp: roundToThousandths(data.volume.units[name].conversions['tsp'].calculation(value)),
      tbsp: roundToThousandths(data.volume.units[name].conversions['tbsp'].calculation(value)),
      oz: roundToThousandths(data.volume.units[name].conversions['oz'].calculation(value)),
      cup: roundToThousandths(data.volume.units[name].conversions['cup'].calculation(value)),
      pt: roundToThousandths(data.volume.units[name].conversions['pt'].calculation(value)),
      qt: roundToThousandths(data.volume.units[name].conversions['qt'].calculation(value)),
      gal: roundToThousandths(data.volume.units[name].conversions['gal'].calculation(value)),
      ml: roundToThousandths(data.volume.units[name].conversions['ml'].calculation(value)),
      l: roundToThousandths(data.volume.units[name].conversions['l'].calculation(value)),
      m3: roundToThousandths(data.volume.units[name].conversions['m3'].calculation(value)),
      in3: roundToThousandths(data.volume.units[name].conversions['in3'].calculation(value)),
      ft3: roundToThousandths(data.volume.units[name].conversions['ft3'].calculation(value))
    });
  }

  render() {
    const calculator_icon = data.volume.calculator_icon;
    const calculator_name = data.volume.calculator_name;
    const focus = this.state.focus;
    const onFocusCalculator = this.handleFocusCalculator;
    const onChangeCalculator = this.handleChangeCalculator;
    const plural_form = data.volume.plural_form;
    const showCalculator = this.props.showCalculator;
    const showCalculatorDetails = this.props.showCalculatorDetails;
    const units = data.volume.units;

    if (!showCalculator) {
      return null;
    } else {
      return (
        <div className="container">
          <div className="row">
            <div className="col mb-3 mt-3">
              <img className="measurement-icon" src={calculator_icon} alt="{calculator_name}" />
              <h1 className="measurement-name">{calculator_name}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h2>Metric System</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 mb-3">
              <UnitInput
                calculator_name={calculator_name}
                focus={focus}
                // NOTE: name needs to be configured for each <UnitInput />
                name="ml"
                onFocusCalculator={onFocusCalculator}
                onChangeCalculator={onChangeCalculator}
                plural_form={plural_form}
                showCalculatorDetails={showCalculatorDetails}
                units={units}
                // NOTE: value needs to be configured for each <UnitInput />
                value={this.state.ml} />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <UnitInput
                calculator_name={calculator_name}
                focus={focus}
                // NOTE: name needs to be configured for each <UnitInput />
                name="l"
                onFocusCalculator={onFocusCalculator}
                onChangeCalculator={onChangeCalculator}
                plural_form={plural_form}
                showCalculatorDetails={showCalculatorDetails}
                units={units}
                // NOTE: value needs to be configured for each <UnitInput />
                value={this.state.l} />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <UnitInput
                calculator_name={calculator_name}
                focus={focus}
                // NOTE: name needs to be configured for each <UnitInput />
                name="m3"
                onFocusCalculator={onFocusCalculator}
                onChangeCalculator={onChangeCalculator}
                plural_form={plural_form}
                showCalculatorDetails={showCalculatorDetails}
                units={units}
                // NOTE: value needs to be configured for each <UnitInput />
                value={this.state.m3} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h2>Customary System</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 mb-3">
              <UnitInput
                calculator_name={calculator_name}
                focus={focus}
                // NOTE: name needs to be configured for each <UnitInput />
                name="tsp"
                onFocusCalculator={onFocusCalculator}
                onChangeCalculator={onChangeCalculator}
                plural_form={plural_form}
                showCalculatorDetails={showCalculatorDetails}
                units={units}
                // NOTE: value needs to be configured for each <UnitInput />
                value={this.state.tsp} />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <UnitInput
                calculator_name={calculator_name}
                focus={focus}
                // NOTE: name needs to be configured for each <UnitInput />
                name="tbsp"
                onFocusCalculator={onFocusCalculator}
                onChangeCalculator={onChangeCalculator}
                plural_form={plural_form}
                showCalculatorDetails={showCalculatorDetails}
                units={units}
                // NOTE: value needs to be configured for each <UnitInput />
                value={this.state.tbsp} />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <UnitInput
                calculator_name={calculator_name}
                focus={focus}
                // NOTE: name needs to be configured for each <UnitInput />
                name="oz"
                onFocusCalculator={onFocusCalculator}
                onChangeCalculator={onChangeCalculator}
                plural_form={plural_form}
                showCalculatorDetails={showCalculatorDetails}
                units={units}
                // NOTE: value needs to be configured for each <UnitInput />
                value={this.state.oz} />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <UnitInput
                calculator_name={calculator_name}
                focus={focus}
                // NOTE: name needs to be configured for each <UnitInput />
                name="cup"
                onFocusCalculator={onFocusCalculator}
                onChangeCalculator={onChangeCalculator}
                plural_form={plural_form}
                showCalculatorDetails={showCalculatorDetails}
                units={units}
                // NOTE: value needs to be configured for each <UnitInput />
                value={this.state.cup} />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <UnitInput
                calculator_name={calculator_name}
                focus={focus}
                // NOTE: name needs to be configured for each <UnitInput />
                name="pt"
                onFocusCalculator={onFocusCalculator}
                onChangeCalculator={onChangeCalculator}
                plural_form={plural_form}
                showCalculatorDetails={showCalculatorDetails}
                units={units}
                // NOTE: value needs to be configured for each <UnitInput />
                value={this.state.pt} />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <UnitInput
                calculator_name={calculator_name}
                focus={focus}
                // NOTE: name needs to be configured for each <UnitInput />
                name="qt"
                onFocusCalculator={onFocusCalculator}
                onChangeCalculator={onChangeCalculator}
                plural_form={plural_form}
                showCalculatorDetails={showCalculatorDetails}
                units={units}
                // NOTE: value needs to be configured for each <UnitInput />
                value={this.state.qt} />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <UnitInput
                calculator_name={calculator_name}
                focus={focus}
                // NOTE: name needs to be configured for each <UnitInput />
                name="gal"
                onFocusCalculator={onFocusCalculator}
                onChangeCalculator={onChangeCalculator}
                plural_form={plural_form}
                showCalculatorDetails={showCalculatorDetails}
                units={units}
                // NOTE: value needs to be configured for each <UnitInput />
                value={this.state.gal} />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <UnitInput
                calculator_name={calculator_name}
                focus={focus}
                // NOTE: name needs to be configured for each <UnitInput />
                name="in3"
                onFocusCalculator={onFocusCalculator}
                onChangeCalculator={onChangeCalculator}
                plural_form={plural_form}
                showCalculatorDetails={showCalculatorDetails}
                units={units}
                // NOTE: value needs to be configured for each <UnitInput />
                value={this.state.in3} />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <UnitInput
                calculator_name={calculator_name}
                focus={focus}
                // NOTE: name needs to be configured for each <UnitInput />
                name="ft3"
                onFocusCalculator={onFocusCalculator}
                onChangeCalculator={onChangeCalculator}
                plural_form={plural_form}
                showCalculatorDetails={showCalculatorDetails}
                units={units}
                // NOTE: value needs to be configured for each <UnitInput />
                value={this.state.ft3} />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Volume;
