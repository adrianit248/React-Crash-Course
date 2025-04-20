import "./App.css";
import Todo from "./components/Todo.jsx";
import Title from "./components/Title.jsx";
import Modal from "./components/Modal.jsx";
import Counter from "./components/Counter.jsx"

import React, {useState} from 'react';

function App() {
  const [showModal, setShowModal] = useState(false)

  function onTodoDelete() {
    setShowModal(true)
    console.log('onTodoDelete')
  }

  function onModalCancel() {
    setShowModal(false)
    console.log('cancel clicked')
  }

  function onModalConfirm() {
    console.log('confirm clicked')
  }

  return (
    <div>
      <Title />
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }}/>
        <button onClick={() => {setShowModal(true)}}>Add ToDo</button>
      </div>
      <div className="todo__wrapper">
        <Todo onTodoDelete={onTodoDelete} title="Finish Frontend Simplified" />
        <Todo onTodoDelete={onTodoDelete} title="Finish interview Section" />
        <Todo onTodoDelete={onTodoDelete} title="Land a $100k Job" />
      </div>
      <Counter></Counter>
      
      {showModal ? <Modal onModalCancel={onModalCancel} onModalConfirm={onModalConfirm} text="Confirm Delete?"/> : null}
    </div>
  );
}

export default App;
