import { FETCH_USER } from '../actions';

  const usersReducer = (state = [], action) => {
    switch (action.type) {
      case FETCH_USER:
        console.log(state);
        if (state.length >= 10) return  state;
        return [...state, action.payload];
        
      default:

        return state;
    }
  }

export default usersReducer;