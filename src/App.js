import { useState } from 'react';
import './App.css';

function App() {
  const [inputFields, setInputFields] = useState([{
    name: '',
    age: ''
  }
  ])
 
  const handleFormChange = (index, event) => {
    let data = [...inputFields]
    data[index][event.target.name] = event.target.name;
    setInputFields(data);
  }

  const addFields = (event) => {
    event.preventDefault();
    let newField = {
      name: '',
      age: ''
    }
    setInputFields([...inputFields, newField])
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(inputFields)
  }

  const handleRemoveFields = index => {
    const data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data)
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        {inputFields.map((input, index) => {
          return (
        <div key={index}>
          <input
            name='name'
            placeholder='Name'
            value={input.name}
            onChange={event => handleFormChange(index, event)}
          />
          <input
            name='age'
            placeholder='Age'
            value={input.age}
            onChange={event => handleFormChange(index, event)}
          />
          <button onClick={()=>handleRemoveFields(index)}>Remove</button>
        </div>
        )
      })}
      <button onClick={addFields}>Add More..</button>
      <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default App;