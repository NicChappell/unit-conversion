import React from 'react';
import search_icon from './unit-conversion-search-icon.svg';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangeSearch = this.handleChangeSearch.bind(this);
  }

  handleChangeSearch(event) {
    this.props.onSearchApp(event);
  }

  render() {
    return (
      <div className="search">
        <input type="text" placeholder="Search..." onChange={this.handleChangeSearch} />
        <img src={search_icon} alt="Search" />
      </div>
    )
  }
}

export default Search;
