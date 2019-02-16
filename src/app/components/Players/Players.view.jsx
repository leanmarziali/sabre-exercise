import React from 'react';
import { Table } from 'reactstrap';

import {
    DATA_PLAYER_ATTRIBUTE,
    DATA_NATIONALITY_ATTRIBUTE,
    DATA_POSITION_ATTRIBUTE,
    DATA_AGE_ATTRIBUTE
} from '../../utils/constants';
import { calculateAgeFromDate } from '../../utils/utils';

const PlayerAttributes = () => (
    <tr>
        <th>{ DATA_PLAYER_ATTRIBUTE }</th>
        <th>{ DATA_POSITION_ATTRIBUTE }</th>
        <th>{ DATA_NATIONALITY_ATTRIBUTE }</th>
        <th>{ DATA_AGE_ATTRIBUTE }</th>
    </tr>
);

const PlayerContent = (players) => (
    <tbody>
        { players.map( (player, index) => (
            // Index never changes over the time, so its ok for Key prop
            <tr key={ index }>
                <td>{ player.name }</td>
                <td>{ player.position }</td>
                <td>{ player.nationality }</td>
                <td>{ calculateAgeFromDate(new Date(player.dateOfBirth)) }</td>
            </tr>
          )) 
        }
    </tbody>
);

const PlayersView = ({ players }) => (
    <Table hover responsive>
        <thead>
            { PlayerAttributes() }
        </thead>
        { PlayerContent(players) }
  </Table>
);

export default PlayersView;