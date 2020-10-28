import React, { useState, createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import ComC from './ComC';
import {LoginForm, RegistraionForm} from './LoginForm';
import Todolist from './TodoList';
import {ValidationTextFields,Demo,BoxCom,GridCom} from './TextFieldMUI';
import ImageGridList from './Gallery';
import InputCom from './InputCom';

const App = ()=> {
  var today = new Date();
  today = today.getHours() +" : "+today.getMinutes()+" : "+today.getSeconds();
  const [current_time,setTime] = useState(today);

  var [count,setCount] = useState(19);

  const IncNum =()=>{
    setCount(count+1);
  }
  const currentTime = ()=>{
    today = new Date();
    today = today.getHours() +" : "+today.getMinutes()+" : "+today.getSeconds();
    setTime(today);
  }
  const tempCom = ()=>{
    return(
      <>
        <Demo />
        <BoxCom/>
        <GridCom></GridCom>
        <ImageGridList></ImageGridList>
        <ContextAPI></ContextAPI>
        <Todolist/>
        <ValidationTextFields/>
        <InputCom></InputCom>
      </>
    );
  }
  setInterval(()=>{
    // currentTime();
    IncNum();
  },1000);
  const IncrCom= ()=>{
    return (
      <>
        <div className="App">
        <h1>{count}</h1>
        {/* <button onClick={IncNum}>Click me</button> */}
      </div>
      <div className="App">
        <h1>{current_time}</h1>
      </div>
      </>
    );
  }
  return (
    <>
    <InputCom></InputCom>
    </>
  );
}
const tempData = "This is temp data";
const FirstName = createContext()
const ContextAPI = ()=>{
  return (
    <>
    <FirstName.Provider value={{fname:"Abhishek",lname:"Koushal"}}>
      <ComC/>
    </FirstName.Provider>
    </>
  );
}

export default App;
export {FirstName,ContextAPI,tempData};
