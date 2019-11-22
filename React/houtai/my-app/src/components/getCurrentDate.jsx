export function getCurrentDate(separator = '') {

    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    let hour = new Date().getHours();
    let min = new Date().getMinutes();

    return `${year}${separator}-${month < 10 ? `0${month}` : `${month}`}-${separator}${date} ${hour < 10 ? `0${hour}` : `${hour}`}:${min < 10 ? `0${min}` : `${min}`}`
}