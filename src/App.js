import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';
import Job from './Job/Job';

class App extends Component {
  state = {
    jobs: [
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
    ]
  }
  
  x = 0;

  render() {
    return (
      <div className="App">
        <h1>Ayden Khalil</h1>
        <button onClick={this.x += 1}>Switch Job</button>
        < Person name='Ayden' age='20'/> 
        <br/>
        < Job position={this.state.jobs[this.x].position} employer={this.state.jobs[this.x].employer} startYear={this.state.jobs[this.x].startYear}/>
      </div>
    );
    // < Person /> is a self closing tag
    //return React.createElement('div', {className: 'App'}, React.createElement('hi', null, 'Does rhis woork'))
  }
}

export default App;