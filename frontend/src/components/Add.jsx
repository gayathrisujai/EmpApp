import React, { useEffect } from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import axiosInstance from '../axiosinterceptor';

const Add = () => {
  const [form, setForm] = useState({
    empId: '',
    empName: '',
    empDesignation: '',
    department: '',
    location: '',
    salary: '',
  })

    let fetchValue = (e) => {
        // console.log(event);
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const location=useLocation()//
    const navigate=useNavigate();
    let sentData = () => {
        // console.log(form);
        if(location.state!=null){
            axiosInstance.put('http://localhost:3000/home/edit/'+location.state.item._id,form).then((res)=>{
              alert("Submitted");
              navigate('/home');
            })
            .catch((error)=>{
              console.log(error);
            })
        }else{
          axiosInstance.post('http://localhost:3000/home/addnew',form).then((res)=>{
            alert('added successfully');
            navigate('/home');
          })
          .catch((error)=>{
            console.log(error);
          })
    }
  };
    useEffect(()=>{
      if (location.state!=null) {
        setForm({...form,
          empId:location.state.item.empId,
          empName:location.state.item.empName,
          department:location.state.item.department,
          location:location.state.item.location,
          empDesignation:location.state.item.empDesignation,
          salary:location.state.item.salary,
        })
      }
    },[])

    return (

        // <button>Add New</button>
        <Box sx={{ padding: '2% 5% 2% 5%', backgroundColor: 'rgba(255, 255, 255, 0.888)', margin: '2px 450px 2px 450px' }}>
            <h2>New Employee</h2><br />

            <TextField id="outlined-basic"
                value={form.empId} 
                label="Employee Id"
                variant="outlined"
                name="empId"
                onChange={fetchValue} /><br /><br />

            <TextField id="outlined-basic"
                // onChange={ }
                value={form.empName}
                label="Employee Name"
                variant="outlined"
                name="empName"
                onChange={fetchValue} /><br /><br />

            <TextField id="outlined-basic"
                // onChange={ }
                value={form.department}
                label="Employee Department"
                variant="outlined"
                name="department"
                onChange={fetchValue} /><br /><br />

            <TextField id="outlined-basic"
                // onChange={ }
                value={form.location}
                label="Employee Location"
                variant="outlined"
                name="location"
                onChange={fetchValue} /><br /><br />

            <TextField id="outlined-basic"
                value={form.empDesignation} 
                label="Employee Designation"
                variant="outlined"
                name="empDesignation"
                onChange={fetchValue} /><br /><br />

            <TextField id="outlined-basic"
                value={form.salary} 
                label="Employee Salary"
                variant="outlined"
                name="salary"
                onChange={fetchValue} /><br /><br />

            

           
            <Button onClick={sentData} variant="contained">SUBMIT</Button>
        </Box>
    )
}

export default Add
