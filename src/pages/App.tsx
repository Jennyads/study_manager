import React from 'react';
import Form from '../components/Form'
import List from '../components/List';
import style from './App.module.scss';
import Cronometro from '../components/Cronometro';


function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
      <Cronometro />
     
    </div>
  );
}

export default App;
