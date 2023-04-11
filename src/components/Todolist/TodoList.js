import React, { useState } from 'react';

function TodoList() {
  const [items, setItems] = useState(['Learn React', 'Become successful']);
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setItems([...items, text]);
    setText('');
  };

  const handleRemove = (indexToRemove) => {
    setItems(items.filter((item, index) => index !== indexToRemove));
  };

  return (
    <div className="todo-list">
      <h1>Things I want to Achieve before 2025</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} />
        <button>Add</button>
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button className="remove" onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
