import React from 'react';
import {FirstName,tempData} from './App';
const ComC = ()=>{
    return(
        <>
        <FirstName.Consumer>
            {(data)=>{
                return <><h1>My Name is {data.fname} {data.lname}</h1><h1>{tempData}</h1></>;
            }}
        </FirstName.Consumer>;
        </>
    );
}

export default ComC;