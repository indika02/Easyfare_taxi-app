import React, { Outlet } from 'react-router'
import { Route, Navigate, Routes } from "react-router-dom";

export default function ProtectedRouting(Auth) {    
    const isAuth = Auth.Auth
    return isAuth ? <Outlet /> : <Navigate to="/DriverAccountLogger" />;
}
