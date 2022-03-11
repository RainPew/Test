import React from 'react';
import {Navigate,Outlet} from 'react-router-dom';
export default function AdminTemplate(){
    const isAuth=localStorage.getItem('admin')
    return isAuth?<Outlet/>:<Navigate to="/login"/>

}