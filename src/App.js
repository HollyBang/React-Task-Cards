import React from 'react';
import './App.css';
import Header from './components/header/header';
import AddTask from './components/addTask/addTask';

const App = () =>  {
    return (
      <div className='app'>
        <Header />
        <AddTask />
      </div>
    );
}
export default App;
