
let methods = {};

let year;
let month;
let day;

methods.previousWeekDate = function(date){

    createDate(date);

    let newDate = new Date(year, month, day - 6);
    return dateToNeededString(newDate);
};

methods.oneMonthAgo = function(){

    createDate();

    return new Date(year, month - 1, day);
};

exports.methods = methods;

function createDate(date){

    let currentDate = date ? new Date(date) : new Date();

    year = currentDate.getFullYear();
    month = currentDate.getMonth();
    day = currentDate.getDate();
}

function dateToNeededString(date){
    return date.toISOString().substr(0, 10);
}