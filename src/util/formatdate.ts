// 年月日时分
// @ts-ignore
export function formatDateMin(secs) {
    // var d = new Date(secs);
    // var datetime=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    // return datetime;
    var now = secs;
    var year = now.getFullYear();
    var month = now.getMonth();
    var date = now.getDate();
    month = month + 1;
    if(month<10)
        {
            // @ts-ignore
            month = "0"+ month;
        }
    if(date<10)
        {
            // @ts-ignore
            date = "0"+date;
        }
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    if(hour<10)
        {
            // @ts-ignore
            hour = "0" + hour;
        }
    if(minute<10)
        {
            // @ts-ignore
            minute = "0" + minute;
        }
    if(second<10)
        {
            // @ts-ignore
            second = "0" + second;
        }
    var time = "";
    time = year + "-" + month +"-" + date + " " + hour + ":" + minute + ":" + second;
    return time;
}


