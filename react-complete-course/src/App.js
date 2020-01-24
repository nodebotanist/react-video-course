import React, { useState } from 'react';
import './App.css';

import Person from './components/Person/Person'

const App = (props) => {
  const [personsState, setPersonsState] = useState({
    Persons:[
      {name:"Max", age: 28},
      {name: "Manu", age:26},
      {name: "Stephanie", age: 27}
    ],
    otherState: 'some other state'
  })

  // instead of having one large object in one useState() call, you can use multiple useStote() calls
  // to handle multiple pieces of state
  const [otherState, setOtherState] = useState('some other state')

  const switchNameHandler = () => {
    setPersonsState({
      Persons: [
        {name:"Maxamillian", age: 28},
        {name:"Manu", age:26},
        {name:"Stephanie", age:26}
      ],
      otherState: personsState.otherState // This will be LOST othervise as this method doesn't merge but replaces the old state
    })
  }

  return (
    <div className="App">
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.Persons[0].name} age={personsState.Persons[0].age} />
      <Person name={personsState.Persons[1].name} age={personsState.Persons[1].age} >Hobbies: Racing</Person>
      <Person name={personsState.Persons[2].name} age={personsState.Persons[2].age} />
    </div>
  )
} 

export default App;
