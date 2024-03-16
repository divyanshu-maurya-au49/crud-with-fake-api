import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Edit() {
    const [id, setid] = useState(0);
    const [name, setname] = useState('');
    const [age, setage] = useState('');
    const [email, setemail] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        setid(localStorage.getItem('id'));
        setname(localStorage.getItem('name'));
        setage(localStorage.getItem('age'));
        setemail(localStorage.getItem('email'));
    },[])

        const handlerSubmit=(e)=>{
            e.preventDefault();
            axios.put(`https://65f2a9cc034bdbecc7657eb7.mockapi.io/crud/${id}`,{
                e_name:name,
                e_age:age,
                e_email:email
            }).then(()=>{
                alert("Data Updated Succesfull")
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
          <h1>Update Data</h1>
        </div>
        <div className='mb-2 mt-2'>
             <Link to='/'>
             <button className='btn btn-primary mt-2 mb-2'>Read Data</button>

             </Link> 
          </div>
        <form onSubmit={handlerSubmit} >
          <div className="form-froup">
            <label>Enter Name</label>
            <input
              type="text"
              value={name}
              onChange={(e)=>setname(e.target.value)}
              placeholder="Name"
              className="form-control"
            />
          </div>
          <div className="form-froup">
            <label>Enter Age</label>
            <input
              type="number"
              value={age}
              onChange={(e)=>setage(e.target.value)}
              placeholder="Age"
              className="form-control"
            />
          </div>
          <div className="form-froup">
            <label>Enter Email</label>
            <input
              type="email"
              value={email}
              onChange={(e)=>setemail(e.target.value)}
              placeholder="Email"
              className="form-control"
            />
          </div>
          <br />
          <div className="d-grid">
            <input type="submit"
             value="Update"
              className="btn btn-primary" />
          </div>
        </form>
      </div>
    </div>
  </>
  )
}

export default Edit