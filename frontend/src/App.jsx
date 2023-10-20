import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import CreateNews from './pages/CreateNews';
import DeleteNews from './pages/DeleteNews';
import ShowNews from './pages/ShowNews';
import EditNews from './pages/EditNews';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/news/create' element={<CreateNews/>} />
      <Route path='/news/details/:id' element={<ShowNews/>} />
      <Route path='/news/edit/:id' element={<EditNews/>} />
      <Route path='/news/delete/:id' element={<DeleteNews/>} />
    </Routes>
    
  );
};

export default App;