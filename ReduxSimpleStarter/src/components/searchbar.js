import React, { Component } from 'react';

// const SearchBar = () => { // a functional component that needs refactoring into a class based component
  // return <input />;
// }
// use a class based method instead only when you need extra functionality
// if you just want to return the component, use the functional version above
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' }; // object {} with properties i.e. term, on the state
    // only ever manually change state in constructor
  }

  render() {
    return (// setState makes it re-render
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;