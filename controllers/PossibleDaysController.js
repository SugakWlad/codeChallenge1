
const report = require('../models/ReportData.js').methods;

let methods = {};

methods.getAllDates = function(res){

    let dates = report.uniqueDates();

    return res.json(dates);

};


exports.methods = methods;