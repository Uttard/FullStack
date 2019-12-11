import React from 'react'
import Paper from '@material-ui/core/paper'
import Typography from '@material-ui/core/Typography';

export default function Job({ job,onClick  }) {
    return (
        <Paper onClick={onClick} className={'job'} >
            <div className='job-company'>
                <Typography variant='h6'>{job.title}</Typography>
                <Typography variant='h5'>{job.company}</Typography>
                <Typography>{job.location}</Typography>   
            </div>
            <div>
                <Typography>{job.created_at.split(' ').splice(0,3).join(' ')}</Typography>
            </div>
        </Paper>
    )
}