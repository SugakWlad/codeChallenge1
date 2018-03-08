const fs = require('fs');

let methods = {};

const file = './reports/report.json';

methods.getRowData = function(){
    let rowData = fs.readFileSync(file);
    return JSON.parse(rowData);
};


exports.methods = methods;