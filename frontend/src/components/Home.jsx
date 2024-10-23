import React, { useEffect, useState } from 'react';
import { Card, CardActions, CardContent, Button, Typography, Grid, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
import axiosInstance from '../axiosinterceptor';

const Home = () => {

  

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axiosInstance.get('http://localhost:3000/home/')
      .then((res) => {
        setEmployees(res.data);
      });
  }, []);


  let deleteEmployee = (p) => {
    axiosInstance.delete('http://localhost:3000/home/delete/'+p).then((res) => {
      alert('deleted');
      window.location.reload();
    }).catch(() => {console.log("error");})
  }

  //update employee
  const navigate = useNavigate();
  let updateEmployee = (item) => {
    navigate('/add', {state:{item}})//add is given so that the form is loaded
  }



  return (
    <>

    <Nav />
    <Box sx={{ padding: 3, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Grid container spacing={3}>
        {employees.map((employee) => (
          <Grid item xs={12} sm={6} md={4} key={employee.empId}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 2, boxShadow: 3 }}>
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
                  {employee.empName}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                  Designation: {employee.empDesignation}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                  Department: {employee.department}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                  Location: {employee.location}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                  Salary: {employee.salary}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'space-between', padding: 2 }}>
              <Button size="small" variant="contained" sx={{backgroundColor: 'darkgoldenrod'}} onClick={() => updateEmployee(employee)}>Edit</Button>
                <Button size="small" variant="contained" sx={{backgroundColor: 'darkred'}} onClick={() => {
                  deleteEmployee(employee._id)
                }}>Delete</Button>

                
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </>
  );
};

export default Home;