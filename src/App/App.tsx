import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainPage from '../components/main_page';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
