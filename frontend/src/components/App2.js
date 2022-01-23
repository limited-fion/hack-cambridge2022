import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import FuncComponent from './components/FunComponents';
import MyClass from './components/MyClaass';
import Name from './components/Name'
import Example from './components/Example';
import Example2 from './components/Example2';
import Form from './components/Form';
import MyFragment from './components/MyFragment';
import Home from './components/Home';
import { Route } from 'react-router-dom';
import ComponentA from './components/ComponentA';
import React from 'react';

import Counter from './components/Counter';

import CounterHook from './components/CounterHook';
import { Button } from 'bootstrap';
import microphone from './components/microphone';
export const MyContext = React.createContext()

function App() {
  function click(){
    alert("class Component clicked inside js")
  }
  return (
    <div className="container">
      <MyContext.Provider value = 'This is a value from context'>
      <ComponentA/>
      <button onClick = {microphone}>microphone</button>
      </MyContext.Provider>
      <Counter/>
      
      
      {/* <Name></Name>
      <Example names = {['python','Java','JS','C#']}></Example>
      <Example2 names = {['react','react native','python','Java','JS','C#']}></Example2>
      <Form></Form> */}
      
    <MyFragment/>
    </div>
  );
}


export default App;
