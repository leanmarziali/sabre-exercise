import {
    SET_AGE_FILTER,
    SET_NAME_FILTER,
    SET_POSITION_FILTER,
    SET_FILTERS
} from '../actions/actionType';
import { FILTERS_DEFAULT_VALUES } from '../config/filters';

// This reducer manages the state of the application filters
const filters = (
  state,
  action
) => {
    switch (action.type) {
      case SET_NAME_FILTER:
        return Object.assign({}, state, {
            NAME_FILTER: action.NAME_FILTER
        });
      case SET_POSITION_FILTER:
        return Object.assign({}, state, {
          POSITION_FILTER: action.POSITION_FILTER
        });
      case SET_AGE_FILTER:
        return Object.assign({}, state, {
            AGE_FILTER: action.AGE_FILTER
        });
      case SET_FILTERS:
        return Object.assign({}, state, {
            NAME_FILTER: action.NAME_FILTER,
            POSITION_FILTER: action.POSITION_FILTER,
            AGE_FILTER: action.AGE_FILTER
        });
      default:
        return state;
    }
  };
  
// Reducer composition
const selectedFilters = (
  state = FILTERS_DEFAULT_VALUES, // initial state,
  action
) => {
    switch (action.type) {
      case SET_NAME_FILTER:
      case SET_POSITION_FILTER:
      case SET_AGE_FILTER:
      case SET_FILTERS:
        return Object.assign( {}, state, filters(state,action) );
      default:
        return state;
    }

};

export default selectedFilters;