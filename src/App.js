import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js';
import Job from './Job/Job';

const App = props => {
    const jobDir = [
      {
        position: 'Software Engineer Intern', 
        employer:'NAB', 
        startYear:'2021'
      },
      {
        position:'Industry Manager/RL Project Member', 
        employer:'Monash DeepNeuron', 
        startYear:'2020'
      }
    ];

    const [x, setX] = useState(0);
  
    // handles the switchjob button

    const switchJobHandler = () => {
      // console.log('i got clicked')
      if (x < (jobDir.length - 1)) {
        setX(x+1)
      } else {
        setX(0)
      }
    };
        
    return (
      <div className="App">
        <h1>Ayden Khalil</h1>
        <button onClick={switchJobHandler}>Switch Job</button>
        < Person name='Ayden' age='20'/> 
        <br/>
        < Job 
          position={jobDir[x].position}
          employer={jobDir[x].employer}
          startYear={jobDir[x].startYear}
          endYear={jobDir[x].endYear}/>
      </div>
    );

};

export default App;




