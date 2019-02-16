import { createSelector } from 'reselect';

import {
    getNameFilter,
    getPositionFilter,
    getAgeFilter
} from './filters';
import {
    comparePlayerByName,
    comparePlayerByPosition,
    comparePlayerByAge
} from '../utils/utils';

// input-selector:
// created as ordinary non-memoized selector function (does not transform 
// selected data from state).
export const getPlayers = (state) => (
    state.fetchedPlayers.items
);

// Memoized selector
export const getPlayersFilteredByPosition = createSelector(
    [ getPositionFilter, getPlayers ], 
    (positionFilter, players) => ( // input selectors specified in first argument
        players.filter( player => comparePlayerByPosition(player.position, positionFilter) )
    )
)

export const getPlayersFilteredByName = createSelector(
    [ getNameFilter, getPlayers ], 
    (nameFilter, players) => (
        players.filter( player => comparePlayerByName(player.name, nameFilter) )
    )
)
export const  getPlayersFilteredByAge = createSelector(
    [ getAgeFilter, getPlayers ], 
    (ageFilter, players) => (
        players.filter( player => comparePlayerByAge(player.dateOfBirth, ageFilter) )
    )
)

export const getPlayersFiltered = createSelector(
    [
        getNameFilter,
        getPositionFilter,
        getAgeFilter,
        getPlayers
    ],
    (
        nameFilter,
        positionFilter,
        ageFilter,
        players
    ) => ( players.filter( player => (
            comparePlayerByName(player.name, nameFilter) &&
            comparePlayerByPosition(player.position, positionFilter) &&
            comparePlayerByAge(player.dateOfBirth, ageFilter)
        ))
    )
)