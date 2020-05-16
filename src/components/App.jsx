import React, { useState } from "react";
// import { isTemplateExpression } from "typescript";
import TodoItems from "./TodoItems";
//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInput(newValue);
  };
  const addItem = () => {
    setItems((prevItems) => {
      return [...prevItems, input];
    });
    setInput("");
  };

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((items, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className='container'>
      <div className='heading'>
        <h1>To-Do List</h1>
      </div>
      <div className='form'>
        <input
          type='text'
          name='input'
          onChange={handleInputChange}
          value={input}
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <TodoItems
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem} //when delete called, will take an ID of items array
            /> // key like id
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

// const [input, setInput] = useState("");
// const [items, setItems] = useState([]);

// const handleInputChange = (e) => {
//   const newValue = e.target.value;
//   setInput(newValue);
// };

// const addItem = () => {
//   setItems((prevItems) => {
//     return [...prevItems, input];
//   });
//   setInput("");
// };

// const deleteItem = (id) => {
//   setItems((prevItems) => {
//     return prevItems.filter((items, index) => {
//       return index !== id;
//     }); //loops through ITEMS array and delete the INDEX that not equal to ID
//   });
// };
