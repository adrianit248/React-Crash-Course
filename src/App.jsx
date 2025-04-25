// import "./App.css";

// import Todo from "./components/Todo.jsx";
// import Title from "./components/Title.jsx";
// import Modal from "./components/Modal.jsx";
// import Counter from "./components/Counter.jsx"
// import React, {useState, useEffect} from 'react';

// function App() {

// EVERYTHING IS COMMENTED OUT SO THAT CODE CAN BE ADDED IN THE "REACT ROCKETSHIP" SECTION OF MODULE 5

//   const [showModal, setShowModal] = useState(false)
//   function onTodoDelete() {
//     setShowModal(true)
//     console.log('onTodoDelete')
//   }

//   function onModalCancel() {
//     setShowModal(false)
//     console.log('cancel clicked')
//   }

//   function onModalConfirm() {
//     console.log('confirm clicked')
//   }

//   useEffect(() => {
//     console.log(`on mount`)
//   }, [])

  // return (
    // <div>
    //   <Title />
    //   <div>
    //     <input type="text" onChange={(event) => {
    //       console.log(event.target.value)
    //     }}/>
    //     <button onClick={() => {setShowModal(true)}}>Add ToDo</button>
    //   </div>
    //   <div className="todo__wrapper">
    //     <Todo onTodoDelete={onTodoDelete} title="Finish Frontend Simplified" />
    //     <Todo onTodoDelete={onTodoDelete} title="Finish interview Section" />
    //     <Todo onTodoDelete={onTodoDelete} title="Land a $100k Job" />
    //   </div>
    //   <Counter></Counter>
      
    //   {showModal ? <Modal onModalCancel={onModalCancel} onModalConfirm={onModalConfirm} text="Confirm Delete?"/> : null}
    // </div>
//   );
// }
// export default App;

import "./App.css"
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Nav from "./components/Nav.jsx";
import Users from "./pages/Users.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;