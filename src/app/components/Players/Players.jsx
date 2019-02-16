import { connect } from 'react-redux';

import PlayersView from './Players.view';
import { getPlayersFiltered } from '../../selectors';

const mapStateToProps = state => (
    {
        players: getPlayersFiltered(state)
    }
);

const Players = connect(
    mapStateToProps,
    null,
)(PlayersView);

export default Players;