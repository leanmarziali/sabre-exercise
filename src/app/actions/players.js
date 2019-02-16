import {
    REQUEST_PLAYERS,
    RECEIVE_PLAYERS,
    INVALIDATE_PLAYERS
} from './actionType';
import PlayersManager from '../helpers/PlayersDataManager';

export const invalidatePlayers = () => ({
    type: INVALIDATE_PLAYERS
});

const requestPlayers = () => ({
    type: REQUEST_PLAYERS
});

const receivePlayers = (players) => ({
    type: RECEIVE_PLAYERS,
    players,
    receivedAt: Date.now(),
});

// Thunk action creator (asynchronous)
const fetchPlayers = () => (
    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but i think it is convenient.
    (dispatch) => {
        dispatch(requestPlayers());
        return PlayersManager.getPlayers()
            .then( response => dispatch(receivePlayers(response)) );
});

const shouldFetchPlayers = (state) => {
    let output;
    const players = state.fetchedPlayers;

    if (players.items.length === 0)
      output = true;
    else if (players.isFetching)
        output = false;
        else 
            output = players.didInvalidate;

    return output;
};

export const fetchPlayersIfNeeded = () => (
  // Function also receives getState()
  // which lets you choose what to dispatch next.
  (dispatch, getState) => {
      if (shouldFetchPlayers(getState())) {
        // Dispatching thunk from thunk!
        return dispatch(fetchPlayers());
      }
      // Let the calling code know there's nothing to wait for.
      return Promise.resolve();
  }
);