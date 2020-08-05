import React from 'react';
import Accordion from './Accordion';
import Formula from './Formula';

// Child component of Calculator
// Parent component of Accordion
// Parent component of Formula
class UnitInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangeUnit = this.handleChangeUnit.bind(this);
    this.handleFocusUnit = this.handleFocusUnit.bind(this);
    this.handleInputUnit = this.handleInputUnit.bind(this);
  }

  handleChangeUnit(event) {
    this.props.onChangeCalculator(event);
  }

  handleFocusUnit(event) {
    this.props.onFocusCalculator(event);
  }

  handleInputUnit(event) {
    if (/^0/.test(event.target.value)) {
      event.target.value = event.target.value.replace(/^0/, '');
    }
  }

  render() {
    const calculator_name = this.props.calculator_name;
    const focus = this.props.focus;
    const name = this.props.name;
    const plural_form = this.props.plural_form;
    const showCalculatorDetails = this.props.showCalculatorDetails;
    const units = this.props.units;
    const value = this.props.value;

    let details;
    if (showCalculatorDetails && focus === name) {
      details = <Accordion plural_form={plural_form} name={name} units={units} />;
    }
    if (showCalculatorDetails && focus !== name) {
      details = <Formula name={name} units={units[focus]} />;
    }

    return (
      <div>
        <fieldset>
          <legend>Enter {calculator_name} in {units[name].name}:</legend>
          <input
            name={name}
            onChange={this.handleChangeUnit}
            onFocus={this.handleFocusUnit}
            onInput={this.handleInputUnit}
            type="number"
            value={value} />
        </fieldset>
        {details}
      </div>
    );
  }
}

export default UnitInput;
