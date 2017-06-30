// all reducers get 2 arguments: current state and action
// State argument is not application state, only the state
// this reducer is responsible for
// if state is undefined, set it to null
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      // always return a fresh object
      return action.payload;
  }

  // if action is anything else, return just state
  return state
}