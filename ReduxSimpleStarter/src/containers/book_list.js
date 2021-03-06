import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
          </li>
      );
    })
  }

  render() {
    console.log(this.props.asdf);
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// key should be any unique value

function mapStateToProps(state) {
  // whatever is returned will show up as props
  // inside of BookList
  return {
    books: state.books,
    asdf: '123'
  }
}

// anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // whenever selected is called, the results should be passed
  // to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// export the container
// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make is available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);