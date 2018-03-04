
const PrepareDevicesStatistics = require('../models/PrepareDevicesStatistics.js').methods.calculateUsages;

let methods = {};

methods.usagesByDays = function(type, status, res){

    let usagesArray = PrepareDevicesStatistics(type, status);

    return res.json(usagesArray)
};

exports.methods = methods;