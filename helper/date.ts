// date
const TODAY = new Date()
export const YEAR = TODAY.getFullYear()
export const MONTH = TODAY.getMonth()
export const DAY = TODAY.getDay()
export const LOCAL_TIME = TODAY.toLocaleTimeString();
export const FULLDATE = `${DAY}.${MONTH}.${YEAR}`