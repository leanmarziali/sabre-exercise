// We use the cross-fetch library Because most browsers 
// don't yet support fetch API natively.
import fetch from 'cross-fetch';

import {
  API_OK_STATUS,
  API_ERROR_STATUS
} from './constants';

const base_URL = 'https://football-players-b31f2.firebaseio.com/';

const ApiUtils = {

    sendRequest : (options)  => {
  
      const URL = base_URL + options.URL;
      let config = { method: options.method };
      
      if (options.body) // It is a POST, PUT, ...
        config.body = options.body;
      if (options.headers)
        config.headers = options.headers;
  
      return fetch(URL, config)
              .then( res => res.json())
              .then( (response) => {
                  return {
                    status: API_OK_STATUS,
                    data: response
                  }
              })
              .catch( (err) => {
                  return {
                      status: API_ERROR_STATUS,
                      message: err
                  }
              });
    }
  };
  
  export default ApiUtils;