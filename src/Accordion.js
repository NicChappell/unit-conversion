import React from 'react';
import info_icon from './unit-conversion-info-icon.svg';

// Child component of UnitInput
class Accordion extends React.Component {
  constructor(props) {
    super(props);

    this.handleClickAccordion = this.handleClickAccordion.bind(this);

    this.state = {
      expandAccordion: false
    };
  }

  handleClickAccordion(event) {
    const currentState = this.state.expandAccordion;

    this.setState({
      expandAccordion: !currentState
    });
  }

  render() {
    const name = this.props.name;
    const plural_form = this.props.plural_form;
    const units = this.props.units;

    const expandAccordion = this.state.expandAccordion;

    let illustration_dt;
    let illustration_dd;
    if (units[name].illustration) {
      illustration_dt = <dt>Illustration:</dt>;
      illustration_dd = <dd><img src={units[name].illustration} alt="" /></dd>;
    }

    return (
      <div className="accordion">
        <img src={info_icon} alt="Learn More" />
        <div className={expandAccordion ? 'panel-heading active' : 'panel-heading'} onClick={this.handleClickAccordion}>Learn more about measuring {plural_form.toLowerCase()} in {units[name].name}</div>
        <div className={expandAccordion ? 'panel-body expanded-panel-body' : 'panel-body collapsed-panel-body'}>
          <dl>
            <dt>Symbol:</dt>
            <dd>{units[name].symbol}</dd>
            <dt>Definition:</dt>
            <dd>{units[name].definition}</dd>
            {illustration_dt}
            {illustration_dd}
            <dt>More Info:</dt>
            <dd><a href={units[name].wikipedia_page} rel="noopener noreferrer" target="_blank">Wikipedia</a></dd>
          </dl>
        </div>
      </div>
    );
  }
}

export default Accordion;
