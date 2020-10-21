import React from 'react';
// import './App.scss';
import Taskinfo from './Taskinfo';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);


function ToDo() {

  return (
    <div className="App"> 
      <Taskinfo></Taskinfo>
    </div>
  );
}

export default ToDo;