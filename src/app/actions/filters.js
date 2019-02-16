import {
    SET_NAME_FILTER,
    SET_POSITION_FILTER,
    SET_AGE_FILTER,
    SET_FILTERS
} from './actionType';

export const setAgeFilter = AGE_FILTER => ({
    type: SET_AGE_FILTER,
    AGE_FILTER
});

export const setPositionFilter = POSITION_FILTER => ({
    type: SET_POSITION_FILTER,
    POSITION_FILTER
});

export const setNameFilter = NAME_FILTER => ({
    type: SET_NAME_FILTER,
    NAME_FILTER
});

// Assume properties for FILTERS object defined in 
// const array @config/FILTERS_DEFAULT_VALUES in order
// to ensure state consistency.
/**
 * FILTERS = {
 *      NAME_FILTER: string
 *      POSITION_FILTER: string,
 *      AGE_FILTER: number
 * }
 */
export const setFilters = FILTERS => ({
    type: SET_FILTERS,
    // Define each filter in order to ensure consistency
    ...FILTERS
});