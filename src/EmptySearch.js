import React from 'react';
import empty_search_icon from './unit-conversion-empty-search-icon.svg';

// Child component of App
function EmptySearch(props) {
  if (!props.showEmptySearch) {
    return null;
  } else {
    return (
      <div className="container">
        <div className="row">
          <div className="col empty-search mb-3 mt-3">
            <img src={empty_search_icon} alt="Empty Search" />
            <h1 className="mb-3 mt-3">Dang!</h1>
            <p className="mt-3">We cannot find the term you are looking for.</p>
            <p>Try rewording your search or entering a new keyword.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default EmptySearch;
