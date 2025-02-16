import React from 'react'
import { Grid } from '@mui/material';
import Header from '../components/molecules/header/Header';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Layout = () => {
  const {uid} = useSelector((state)=>state.auth)
  return (
    <Grid>
        <Header/>
        {uid?<Outlet/>:<Navigate to="/auth" />}
    </Grid>
  )
}

export default Layout