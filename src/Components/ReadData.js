import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function ReadData() {
    const [apidata, setapidata] = useState([])

    function getData(){
        axios.get('https://65f2a9cc034bdbecc7657eb7.mockapi.io/crud')
        .then((responce)=>{
            setapidata(responce.data);
        }).catch((error)=>{
            console.log(error);
        })
    }
    function handleDelete(id){
        axios.delete(`https://65f2a9cc034bdbecc7657eb7.mockapi.io/crud/${id}`)
        .then(()=>{
            getData();
        })
    }
    useEffect(()=>{
        getData();
    },[])

    function setDataToStorage(id, name, age, email){
        localStorage.setItem('id',id);
        localStorage.setItem('name',name);
        localStorage.setItem('age',age);
        localStorage.setItem('email',email);

    }


  return (
    <>
    <div className='row'>
        <div className='col-md-12'>
            <div className='mb-2 mt-2'>
               <Link to='/create'>
               <button className='btn btn-primary mt-2 mb-2'>Create New Data</button>

               </Link> 
            </div>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Edit</th>
                        <th>Delete</th>

                    </tr>
                </thead>
                <tbody>
                   {apidata.map((item,i)=>{
                     return (
                        <tr key={i}>
                     <td>{item.id}</td>
                     <td>{item.e_name}</td>
                     <td>{item.e_age}</td>
                     <td>{item.e_email}</td>
                     <td>
                     <Link to='/edit'>
                     <button className='btn btn-primary' onClick={()=>setDataToStorage(item.id, item.e_name, item.e_age, item.e_email)}> Edit</button>
                     </Link>
                     </td>
                     <td><button className='btn btn-danger' onClick={()=>{if(window.confirm('Are you sure to delete data ?')) { handleDelete(item.id)}}}> Delete</button></td>
                 </tr>
                     )
                   })}
                </tbody>
            </table>
        </div>
    </div>
    </>
  )
}

export default ReadData