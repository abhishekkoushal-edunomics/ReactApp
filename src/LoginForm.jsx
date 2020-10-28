import React, { useState } from 'react';
import "./App.css";

const LoginForm = () =>{
    var [username, setUsername] = useState('abhishek');
    const changeName = (event)=>{
        setUsername(event.target.value);
    }
    return (
        <>
            <div className="row text-center p-5 m-5">
                <div className="col-8 row mx-auto border border-dark p-4">
                    <div className="col-12 display-4 font-weight-bold p-3">This is {username}</div>
                    <input className="col-8 mx-auto p-3" type="text" placeholder="Enter your Name" onChange={changeName} />
                    <button className="col-6 mx-auto my-4 h2 p-3">Change</button>
                </div>
            </div>
        </>
    );
}

const RegistraionForm = ()=>{
    var username='';
    const [formFields,setFormFields] = useState({'fname':'','lname':'','email':'','mobile':''});
    const submitRegisterForm =(e)=>{
        e.preventDefault();
        setFormFields({'fname':e.target.fname.value,'lname':e.target.lname.value,'email':e.target.email.value,'mobile':e.target.mobile.value});
        console.log(e.target.fname.value);
    }
    return (
        <>
            <div className="row text-center p-5">
                <form className="col-8 row mx-auto border border-dark p-4" onSubmit={submitRegisterForm}>
                    <div className="col-12 h4 font-weight-bold p-3">This is {formFields.fname} {formFields.lname} Registered with {formFields.email} and Mobile number is {formFields.mobile}</div>
                    <input className="col-8 mx-auto p-3 my-2 text-center" type="text" name="fname" placeholder="Enter your First Name"  />
                    <input className="col-8 mx-auto p-3 my-2 text-center" type="text" name="lname" placeholder="Enter your Last Name"  />
                    <input className="col-8 mx-auto p-3 my-2 text-center" type="text" name="email" placeholder="Enter your Email Name"  />
                    <input className="col-8 mx-auto p-3 my-2 text-center" type="text" name="mobile" placeholder="Enter your Mobile Number"  />
                    <button className="col-6 mx-auto my-4 h2 p-3">Change</button>
                </form>
            </div>
        </>
    );
}
export {LoginForm, RegistraionForm};