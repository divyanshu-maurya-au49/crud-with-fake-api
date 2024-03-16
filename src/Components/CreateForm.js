import React, { useState } from "react";
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
function CreateForm() {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [email, setemail] = useState("");


   const navigate= useNavigate();
  const handlerSubmit = (e)=>{
    e.preventDefault();
    axios.post('https://65f2a9cc034bdbecc7657eb7.mockapi.io/crud',{
        e_name:name,
        e_age:age,
        e_email:email
    }).then(()=>{
        alert("Data Added Succesfully")
        navigate('/')
    }).catch((error)=>{
        console.log(error);
    })
  }
  return (
    <>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="bg-primary p-1 text-center">
            <h1>Create Data</h1>
          </div>
          <div className='mb-2 mt-2'>
               <Link to='/'>
               <button className='btn btn-primary mt-2 mb-2'>Read Data</button>

               </Link> 
            </div>
          <form onSubmit={handlerSubmit}>
            <div className="form-froup">
              <label>Enter Name</label>
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                onChange={(e) => setname(e.target.value)}
              />
            </div>
            <div className="form-froup">
              <label>Enter Age</label>
              <input
                type="number"
                placeholder="Age"
                className="form-control"
                onChange={(e) => setage(e.target.value)}
              />
            </div>
            <div className="form-froup">
              <label>Enter Email</label>
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <br />
            <div className="d-grid">
              <input type="submit" value="Submit" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateForm;
