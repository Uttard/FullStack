var crontab = require('node-crontab');
const fetchGithub = require('./tasks/fetch-github');

var jobId = crontab.scheduleJob("*/1 * * * *", function () {
    fetchGithub;
});