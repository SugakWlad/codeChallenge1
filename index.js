const express = require('express');
const app = express();
const compression = require('compression');

const csvToJson = require('convert-csv-to-json');

const devices = require('./controllers/DevicesController').methods;
const possibleDays = require('./controllers/PossibleDaysController').methods;
const usages = require('./controllers/UsagesController').methods;

app.use(compression());

if (process.env.NODE_ENV !== 'production') {
    app.use(require('./build'));
}

csvToJson.fieldDelimiter(',').generateJsonFileFromCsv('./reports/report.csv','./reports/report.json');

setInterval(function(){
    csvToJson.fieldDelimiter(',').generateJsonFileFromCsv('./reports/report.csv','./reports/report.json')
}, 3600000);

app.get('/popular-devices/:day', (req, res) => devices.popularDevices(req.params.day, res));

app.get('/possible-days', (req, res) => possibleDays.getAllDates(res));

app.get('/usages-info/:type/:status', (req, res) => usages.usagesByDays(req.params.type, req.params.status, res));

app.get('/*', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.listen(8080, function() {
    console.log("I'm listening.")
});