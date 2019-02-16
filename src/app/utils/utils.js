import { FILTERS_DEFAULT_VALUES } from '../config/filters';

// FILTERS
export function calculateAgeFromDate(birthday) { // birthday is a date
    let ageDifMs = Date.now() - birthday.getTime();
    // miliseconds from epoch
    let ageDate = new Date(ageDifMs); 
    return Math.abs(ageDate.getUTCFullYear() - 1970).toString();
};

export const comparePlayerByName = (playerName, keyword) => (
    keyword === FILTERS_DEFAULT_VALUES.NAME_FILTER ||
    playerName.toLowerCase().includes(keyword.toLowerCase())
);

export const comparePlayerByPosition = (playerPosition, position) => (
    position === FILTERS_DEFAULT_VALUES.POSITION_FILTER ||
    playerPosition === position
);

export const comparePlayerByAge = (playerAge, age) => (
    age === FILTERS_DEFAULT_VALUES.AGE_FILTER ||
    calculateAgeFromDate(new Date(playerAge)) === age
);