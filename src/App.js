import React, { useState } from 'react';
import './App.css';

const App = () => {
  let array = ['Abbas', 'Ali', 'Ahmad', 'Bilal', 'Fadi', 'Hussein', 'Hassan', 'Ibrahim', 'Mohammad', 'Samir']
  let suggestion = [];
  const [value, setValue] = useState('');
  const [list, setList] = useState();
  const setInputValue = (e, x) => {
    setValue(x);
  }

  const autoComplete = (event) => {
    //console.log(event.target.value);
    setValue(event.target.value);
    array.forEach(x => {
      if(x.substr(0, event.target.value.length).toUpperCase() === event.target.value.toUpperCase()) {
        suggestion.push(x);
        console.log(suggestion);
        setList(
          suggestion.map((x, index) => {
            return <p key={index} onClick={(e) => setInputValue(e, x)}>{x}</p>
          })
        );
      }
      if(event.target.value.length === 0) {
        setList('');
      }
    })
  }
  return (
    <div className="containerCenter">
      <h1>Coding Challenge</h1>
      <h2>Build Auto Complete Field</h2>
      <input className="autoComplete" onChange={(e) => autoComplete(e)} value={value}/>
      <div>
        {list}
      </div>
    </div>
  )
}

export default App;
