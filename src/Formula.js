import React from 'react';

// Child component of UnitInput
function Formula(props) {
  const name = props.name;
  const units = props.units;

  const exact = units.conversions[name].accuracy === 'exact' ? true : false;

  return (
    <div className="formula">
      <div className="accuracy">
      {exact ? (
        <div className="exact">Exact</div>
      ) : (
        <div className="approximate">Approximate</div>
      )}
      </div>
      <div className="calculation"><span>Formula:</span> {units.conversions[name].formula}</div>
    </div>
  );
}

export default Formula;
