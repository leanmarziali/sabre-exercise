import {
    REQUEST_PLAYERS,
    RECEIVE_PLAYERS,
    INVALIDATE_PLAYERS
} from '../actions/actionType';

// This reducer manages the state of a specific player list (the only one)
const players = (
    state,
    action
) => {
    switch (action.type) {
        case INVALIDATE_PLAYERS:
            return Object.assign({}, state, {
                didInvalidate: true
            });
        case REQUEST_PLAYERS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        case RECEIVE_PLAYERS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.players,
                lastUpdated: action.receivedAt
            });
        default:
            return state;
    }
};

// Reducer composition
const fetchedPlayers= (
    state = {
        isFetching: false,
        didInvalidate: false,
        items: [],
        lastUpdated: Date.now(),
    },
    action
) => {
    switch (action.type) {
        case INVALIDATE_PLAYERS:
        case REQUEST_PLAYERS:
        case RECEIVE_PLAYERS:
            return Object.assign({}, state, players(state,action) );
        default:
            return state;
    }
};

export default fetchedPlayers;

