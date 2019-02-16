import ApiUtils from '../utils/api';
import { API_OK_STATUS } from '../utils/constants';

export const getPlayersFromURL = () => {
    const options = {
        method: 'GET',
        URL: 'players.json' // get the specific resource
    };
    return ApiUtils.sendRequest(options)
        .then( results => {
            if (results.status === API_OK_STATUS )
                return results.data;
            else
                // Should log error message from response here.
                return results.message;
        });
};