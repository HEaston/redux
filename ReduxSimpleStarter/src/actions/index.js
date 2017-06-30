export function selectBook(book) {
  //console.log('A book has been selected:', book.title);
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property
  return {
    type: 'BOOK_SELECTED', //always uppercase
    payload: book
  };
}

// we have to make sure the action creator is wired up to redux