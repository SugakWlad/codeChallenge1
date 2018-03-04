
const getStatisticsPerDay = require('../models/PrepareDevicesStatistics.js').methods.getStatisticsPerDay;

let methods = {};

methods.popularDevices = function(date, res){

    const numberOfPopular = 10;

    let statistics = getStatisticsPerDay(date);

    let mostPopular = [];
    for (let i = 0; i < numberOfPopular; i++){
        mostPopular.push(statistics[i]);
    }

    return res.json(mostPopular);
};


exports.methods = methods;