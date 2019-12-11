var fetch = require('node-fetch');


var redis = require("redis"),
    client = redis.createClient();
const { promisify } = require('util');

const setAsync = promisify(client.set).bind(client); //redis handle


const baseURL = 'https://jobs.github.com/positions.json?description=ruby';

async function fetchGithub() {
    let resultCount = 1;
    let onPage = 0;
    const allJobs = []; //array with future results from fetch

    //fetch block
    while (resultCount >0) { 
        const res = await fetch(`${baseURL}&page=${onPage}`);
        const jobs = await res.json();
        allJobs.push(...jobs);
        resultCount = jobs.length;
        console.log('got ', jobs.length, 'jobs');
        onPage++;
    }

    console.log('total ', allJobs.length, 'jobs ');

    //filter fetched content block
    const jrJobs = allJobs.filter(job => {
        const JobTitle = job.title.toLowerCase();

        if (JobTitle.includes(`senior`) ||
            JobTitle.includes(`manager`) ||
            JobTitle.includes(`sr.`) ||
            JobTitle.includes(`lead`) ||
            JobTitle.includes(`owner`) ||
            JobTitle.includes(`front`) ||
            JobTitle.includes(`architect`)) {
            return false;
        }
        return true;
    })

    console.log("filtered down to ", jrJobs.length);

    //sent everything  to redis

    const success = await setAsync(`github`, JSON.stringify(jrJobs)); 
    console.log({success});
}

//fetchGithub();

module.exports = fetchGithub();