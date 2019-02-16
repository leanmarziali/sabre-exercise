import React from 'react';
import { Input } from 'reactstrap';

import Style from './Filter.style.scss';

const onChangeHandler = (event, config, onFilterCallback) => {
    const value =  event.target.value;
    if (!config.regex || config.regex.test(value))
        onFilterCallback(config.property, value);
    else
        onFilterCallback(config.property, config.default);
};

const createFilter = (config, placeholder, onFilterCallback) => {
    let results;
    if (config.options) {
      results = (
        <Input
            type={ config.type }
            bsSize="sm"
            defaultValue={ config.default }
            onChange={ (event) => onChangeHandler(event, config, onFilterCallback) }
        >
            { config.options.map( (option, index) => (
                // Index never changes over the time, so its ok for Key prop
                <option key={index} {...option} >
                    { option.value }
                </option>
                ))
            }
        </Input>
      );
    } else {
        results = (
            <Input
                type={ config.type }
                bsSize="sm"
                placeholder={placeholder}
                onChange={ (event) => onChangeHandler(event, config, onFilterCallback) }
            />
        );
    }

    return results;
}

const Filter = ({ config, placeholder, onFilterCallback }) => (
    <div className={Style.input}>
        { createFilter(config, placeholder, onFilterCallback) }
    </div>
);

export default Filter;