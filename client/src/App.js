import React from 'react';
import './App.css';
import Jobs from './Jobs.js';
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

function App() {
  return (
    <div className="App">
          <Jobs jobs={mockJobs}/>
    </div>
  );
}

export default App;
