import React from 'react';
import './App.css';
import Jobs from './Jobs.js';

const JOB_API_URL = `http://localhost:3000/jobs`;

const mockJobs = [
    {
        title: 'Battery 1',
        company: 'Skynet'
    },
    {
        title: 'Battery 1',
        company: 'Privacyblock'
    }, {
        title: 'Battery 1',
        company: 'Faceblock'
    }
]

async function fetchJobs() {
    const res = await fetch(JOB_API_URL);
    const json = await res.json();

    console.log({json});
}

function App() {
  return (
    <div className="App">
          <Jobs jobs={mockJobs}/>
    </div>
  );
}

export default App;
