import { FILTER_POSITION_PLACEHOLDER } from '../utils/constants';
/**
 * FILTER = {
 *  property: string,
 *  type: string | number,
 *  options: [], // optional prop
 *  regex: string // optional prop
 * }
 */

export const FILTERS_DEFAULT_VALUES = {
    NAME_FILTER: '',
    POSITION_FILTER: FILTER_POSITION_PLACEHOLDER,
    AGE_FILTER: '-1'
};

export const POSITION = {
    property: 'POSITION_FILTER',
    type: 'select',
    default: FILTERS_DEFAULT_VALUES.POSITION_FILTER,
    options: [
        { value: FILTER_POSITION_PLACEHOLDER /*, hidden: true*/ },
        { value: 'Attacking Midfield' },
        { value: 'Central Midfield' },
        { value: 'Centre-back' },
        { value: 'Centre-Forward' },
        { value: 'Defensive Midfield' },
        { value: 'Keeper' },
        { value: 'Left Midfield' },
        { value: 'Left Wing' },
        { value: 'Left Back' },
        { value: 'Right-Back' },
    ]
};

export const PLAYER_NAME = {
    property: 'NAME_FILTER',
    type: 'text',
    default: FILTERS_DEFAULT_VALUES.NAME_FILTER,
    // Whitespaces are not allowed
    regex: /^[a-zA-z]{3,15}$/g // matches 3 or more letters (up to 15).
}

export const AGE = {
    property: 'AGE_FILTER',
    type: 'number',
    default: FILTERS_DEFAULT_VALUES.AGE_FILTER,
    regex: /^(1[8-9]|[2-3]\d|40)$/g  // Age goes from 18 to 40
}