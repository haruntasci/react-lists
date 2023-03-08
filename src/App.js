import './App.css';
import { people } from './data';
import { getImageUrl } from './utils.js';


const Mathematician = () => {
  const mathematicians = people.filter((person) => person.profession === 'mathematician')
  const listItems = mathematicians.map((person) =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>

    </li>
  )

  return (
    <ul>{listItems}</ul>
  )
}



const Chemists = () => {
  const chemists = people.filter((person) => person.profession === 'chemist')
  const listItems = chemists.map((person) =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  )

  return (
    <ul>{listItems}</ul>
  )
}

const Physicists = () => {
  const physicists = people.filter((person) => person.profession === 'physicist')
  const listItems = physicists.map((person) =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  )
  return (
    <ul>{listItems}</ul>
  )
}


const App = () => {

  return (
    <>
      <h1>Scientists</h1>
      <h2>Mathematicians</h2>
      <Mathematician />
      <h2>Chemists</h2>
      <Chemists />
      <h2>Physicists</h2>
      <Physicists />
    </>

  );
}

export default App;
