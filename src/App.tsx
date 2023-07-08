import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from './pages/main/main';
import { Login } from './pages/login/login';
import { Navbar } from './components/navbar';
import { CreatePost } from './pages/create-post/CreatePost';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/create-post' element={<CreatePost/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
