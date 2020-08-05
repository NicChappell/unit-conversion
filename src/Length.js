import React from 'react';
import UnitInput from './UnitInput';
import { roundToThousandths } from './helpers'

import data from './data';

// Child component of App
// Parent component of UnitInput
class Length extends React.Component {
  constructor(props) {
    super(props);

    this.handleFocusCalculator = this.handleFocusCalculator.bind(this);
    this.handleChangeCalculator = this.handleChangeCalculator.bind(this);

    this.state = {
      focus: '',
      // NOTE: <input> names need to be configured for each calculator
      km: '',
      m: '',
      cm: '',
      mm: '',
      µm: '',
      nm: '',
      mi: '',
      yd: '',
      ft: '',
      inch: '',
      nmi: ''
    };
  }

  handleFocusCalculator(event) {
    const target = event.target;
    const name = target.name;

    this.setState({
      focus: name,
    });

    this.props.onFocusApp(data.length.calculator_name);
  }

  handleChangeCalculator(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      // NOTE: [key]: value calculations need to be configured for each calculator
      km: roundToThousandths(data.length.units[name].conversions['km'].calculation(value)),
      m: roundToThousandths(data.length.units[name].conversions['m'].calculation(value)),
      cm: roundToThousandths(data.length.units[name].conversions['cm'].calculation(value)),
      mm: roundToThousandths(data.length.units[name].conversions['mm'].calculation(value)),
      µm: roundToThousandths(data.length.units[name].conversions['µm'].calculation(value)),
      nm: roundToThousandths(data.length.units[name].conversions['nm'].calculation(value)),
      mi: roundToThousandths(data.length.units[name].conversions['mi'].calculation(value)),
      yd: roundToThousandths(data.length.units[name].conversions['yd'].calculation(value)),
      ft: roundToThousandths(data.length.units[name].conversions['ft'].calculation(value)),
      inch: roundToThousandths(data.length.units[name].conversions['inch'].calculation(value)),
      nmi: roundToThousandths(data.length.units[name].conversions['nmi'].calculation(value))
    });
  }

  render() {
    const calculator_icon = data.length.calculator_icon;
    const calculator_name = data.length.calculator_name;
    const focus = this.state.focus;
    const onFocusCalculator = this.handleFocusCalculator;
    const onChangeCalculator = this.handleChangeCalculator;
    const plural_form = data.length.plural_form;
    const showCalculator = this.props.showCalculator;
    const showCalculatorDetails = this.props.showCalculatorDetails;
    const units = data.length.units;

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
                name="nm"
                onFocusCalculator={onFocusCalculator}
                onChangeCalculator={onChangeCalculator}
                plural_form={plural_form}
                showCalculatorDetails={showCalculatorDetails}
                units={units}
                // NOTE: value needs to be configured for each <UnitInput />
                value={this.state.nm} />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <UnitInput
                calculator_name={calculator_name}
                focus={focus}
                // NOTE: name needs to be configured for each <UnitInput />
                name="µm"
                onFocusCalculator={onFocusCalculator}
                onChangeCalculator={onChangeCalculator}
                plural_form={plural_form}
                showCalculatorDetails={showCalculatorDetails}
                units={units}
                // NOTE: value needs to be configured for each <UnitInput />
                value={this.state.µm} />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <UnitInput
                calculator_name={calculator_name}
                focus={focus}
                // NOTE: name needs to be configured for each <UnitInput />
                name="mm"
                onFocusCalculator={onFocusCalculator}
                onChangeCalculator={onChangeCalculator}
                plural_form={plural_form}
                showCalculatorDetails={showCalculatorDetails}
                units={units}
                // NOTE: value needs to be configured for each <UnitInput />
                value={this.state.mm} />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <UnitInput
                calculator_name={calculator_name}
                focus={focus}
                // NOTE: name needs to be configured for each <UnitInput />
                name="cm"
                onFocusCalculator={onFocusCalculator}
                onChangeCalculator={onChangeCalculator}
                plural_form={plural_form}
                showCalculatorDetails={showCalculatorDetails}
                units={units}
                // NOTE: value needs to be configured for each <UnitInput />
                value={this.state.cm} />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <UnitInput
                calculator_name={calculator_name}
                focus={focus}
                // NOTE: name needs to be configured for each <UnitInput />
                name="m"
                onFocusCalculator={onFocusCalculator}
                onChangeCalculator={onChangeCalculator}
                plural_form={plural_form}
                showCalculatorDetails={showCalculatorDetails}
                units={units}
                // NOTE: value needs to be configured for each <UnitInput />
                value={this.state.m} />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <UnitInput
                calculator_name={calculator_name}
                focus={focus}
                // NOTE: name needs to be configured for each <UnitInput />
                name="km"
                onFocusCalculator={onFocusCalculator}
                onChangeCalculator={onChangeCalculator}
                plural_form={plural_form}
                showCalculatorDetails={showCalculatorDetails}
                units={units}
                // NOTE: value needs to be configured for each <UnitInput />
                value={this.state.km} />
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
                name="inch"
                onFocusCalculator={onFocusCalculator}
                onChangeCalculator={onChangeCalculator}
                plural_form={plural_form}
                showCalculatorDetails={showCalculatorDetails}
                units={units}
                // NOTE: value needs to be configured for each <UnitInput />
                value={this.state.inch} />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <UnitInput
                calculator_name={calculator_name}
                focus={focus}
                // NOTE: name needs to be configured for each <UnitInput />
                name="ft"
                onFocusCalculator={onFocusCalculator}
                onChangeCalculator={onChangeCalculator}
                plural_form={plural_form}
                showCalculatorDetails={showCalculatorDetails}
                units={units}
                // NOTE: value needs to be configured for each <UnitInput />
                value={this.state.ft} />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <UnitInput
                calculator_name={calculator_name}
                focus={focus}
                // NOTE: name needs to be configured for each <UnitInput />
                name="yd"
                onFocusCalculator={onFocusCalculator}
                onChangeCalculator={onChangeCalculator}
                plural_form={plural_form}
                showCalculatorDetails={showCalculatorDetails}
                units={units}
                // NOTE: value needs to be configured for each <UnitInput />
                value={this.state.yd} />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <UnitInput
                calculator_name={calculator_name}
                focus={focus}
                // NOTE: name needs to be configured for each <UnitInput />
                name="mi"
                onFocusCalculator={onFocusCalculator}
                onChangeCalculator={onChangeCalculator}
                plural_form={plural_form}
                showCalculatorDetails={showCalculatorDetails}
                units={units}
                // NOTE: value needs to be configured for each <UnitInput />
                value={this.state.mi} />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h2>Navigation</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 mb-3">
              <UnitInput
                calculator_name={calculator_name}
                focus={focus}
                // NOTE: name needs to be configured for each <UnitInput />
                name="nmi"
                onFocusCalculator={onFocusCalculator}
                onChangeCalculator={onChangeCalculator}
                plural_form={plural_form}
                showCalculatorDetails={showCalculatorDetails}
                units={units}
                // NOTE: value needs to be configured for each <UnitInput />
                value={this.state.nmi} />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Length;
