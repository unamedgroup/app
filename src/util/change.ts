




// @ts-ignore
export function getDateTime(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hh = date.getHours();
    var mm = date.getMinutes();
    return year + '-' + month + '-' + day + ' ' + hh + ':' + mm + ':' + '00';
}
