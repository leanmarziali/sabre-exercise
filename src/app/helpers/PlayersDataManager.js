import { getPlayersFromURL } from '../services/Players';

const PlayersManager = {
    getPlayers: () => {
        return getPlayersFromURL();
    }
};

export default PlayersManager;