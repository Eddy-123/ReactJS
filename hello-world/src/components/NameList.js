import React from 'react'
import Person from './Person'

function NameList(){
  const names = ['Eddy', 'Diana', 'Fiona'];
  const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
  const persons = [
    {
      id: 1,
      name: 'Eddy',
      age: '21',
      skill: 'React'
    },
    {
      id: 2,
      name: 'Diana',
      age: '22',
      skill: 'Php'
    }
  ]
  const personList = persons.map(person => <Person key={person.id} person={person}/>)
  return (
    <div>{nameList}</div>
  );
}

export default NameList;
