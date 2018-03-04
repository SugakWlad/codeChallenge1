
const report = require('./ReportData.js').methods;
const dateParser = require('./DateParser').methods;

let methods = {};

methods.getStatisticsPerDay = function(date){

    let uniqueCurrentDateStatistics =  makeUniqueCountersObject(sortById(report.fetchByDate(date)));
    let uniquePreviousWeekDateStatistics = makeUniqueCountersObject(sortById(report.fetchByDate(dateParser.previousWeekDate(date))));

    let combineStatistics = [];
    for(let key in uniqueCurrentDateStatistics){
        combineStatistics.push({
            id: key,
            increasedUse: countPercentages(uniqueCurrentDateStatistics[key], uniquePreviousWeekDateStatistics[key])
        })
    }
    return combineStatistics.sort(function(a, b){
        return b.currentCounter - a.currentCounter;
    });
};

methods.calculateUsages = function(type, status){

    let rawDates = report.fetchByTypeAndStatus(type, status);
    let counteredDates = [];
    let oneDate = {
        date: rawDates[0],
        counter: 0
    };

    rawDates.forEach(function(date){
        if(oneDate.date === date){
            oneDate.counter ++;
        } else {
            counteredDates.push(oneDate);
            oneDate = {
                date: date,
                counter: 1
            }
        }
    });
    counteredDates.push(oneDate);

    return counteredDates;
};

exports.methods = methods;

function makeUniqueCountersObject(sortedArray){

    let uniqueDevices = [];
    sortedArray.forEach(function(elem){
        if(!uniqueDevices[elem.id]){
            uniqueDevices[elem.id] = 1;
        } else {
            uniqueDevices[elem.id] += 1;
        }
    });

    return uniqueDevices;
}

function sortById(RawCurrentDateDevices){

    return RawCurrentDateDevices.sort(function (a, b) {
        if(a.id < b.id){
            return -1;
        }
        if(a.id > b.id){
            return 1;
        }
        return 0;
    });
}

function countPercentages(current, previous){
    return Math.floor((current - previous) / previous * 100);
}


