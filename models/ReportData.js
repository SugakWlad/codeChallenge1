
const reportData = require('./ReportQueries').methods.getRowData();
const dateParser = require('./DateParser').methods;

let methods = {};

methods.fetchByDate = function(date){

    let currentDateArray = [];

    reportData.forEach(function(elem){
        if(elem.timestamp.substr(0, 10) === date){
            currentDateArray.push(elem);
        }
    });

    return currentDateArray;
};

methods.uniqueDates = function(){

    let uniqueDates = [];

    reportData.forEach(function(elem){
        if(uniqueDates.findIndex(date => date === elem.timestamp.substr(0, 10)) === -1){
            uniqueDates.push(elem.timestamp.substr(0, 10))
        }
    });

    return uniqueDates;
};

methods.fetchByTypeAndStatus = function(type, status){

    let selectedData = [];
    let oneMonthAgo = dateParser.oneMonthAgo();

    reportData.forEach(function(elem){
        if(
            elem.type === type
            && elem.status === status
            // && new Date(elem.timestamp) > oneMonthAgo
        ){
            selectedData.push(elem.timestamp.substr(0, 10));
        }
    });

    return selectedData;
};


exports.methods = methods;