import React, { useState } from 'react';
import './App.css';
import RouterWrapper from './routes/AppRouter.tsx';
import Modal from './components/Modal/Modal.tsx';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  console.log("isOpen: ", isOpen);

  return (
    <div className="App">
      {isOpen && <Modal setIsOpen={setIsOpen} />}
      <RouterWrapper />
    </div>
  );
}

export default App;
