import { combineReducers } from 'redux';

import selectedFilters from './filters';
import fetchedPlayers from './players';

export default combineReducers({
    selectedFilters,
    fetchedPlayers
});