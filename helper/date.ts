// date
const TODAY = new Date();
export const DAY = TODAY.getDay();
export const DATE = TODAY.toISOString().slice(0, 10);
export const LOCAL_TIME = TODAY.toLocaleTimeString();
export const FULLDATE = new Date().toLocaleString();
