import React, { useState } from 'react';
import './App.css';
import Thread from './components/Thread';

const App: React.FC = () => {


  return (
    <div className='App'>
      <h1>React - Submitting Forms</h1>
      <Thread />
    </div>
  )
}

export default App;