import React from 'react'
import Typography from '@material-ui/core/Typography';

import Job from './Job';

import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';


export default function Jobs({ jobs }) {
    //stepper from material-ui/icons
    const numJobs = jobs.length;
    const numPages = Math.ceil(numJobs / 10);

    const [activeStep, setActiveStep] = React.useState(0);

    const jobsOnPage = jobs.slice(activeStep * 10, (activeStep * 10) + 10);

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    console.log('job is', jobs[0]);

    return (
        <div className="jobs">
            <Typography variant="h4" compunent="h1">
               Jobs from GitHub API
            </Typography>
            <Typography variant="h6" compunent="h1">
               Found {numJobs} Jobs
            </Typography>
            {
                jobsOnPage.map(
                    (job, i) => <Job key={i} job={job}/>
                )
            }

            <div>
                Page {activeStep} of {numPages}
            </div>

            <MobileStepper
                variant="progress"
                steps={numPages}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
                        Next
                <KeyboardArrowRight />}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 1}>
                    <KeyboardArrowLeft />}
                        Back
        </Button>
                }
            />
        </div>
        )
}
