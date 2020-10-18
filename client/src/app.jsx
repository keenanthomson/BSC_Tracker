import React, {useState} from 'react';

export default function App(props) {
  const [counter, setCounter] = useState(0);

  return (
    <button onClick={() => setCounter(counter + 1)}>You've hit {counter} times!</button>
  )
}