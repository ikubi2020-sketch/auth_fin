
import type { ReactNode } from 'react'
import { Navigate } from 'react-router'

type myChildren = {
    children  : ReactNode
}


export const PrivateRoute = ({ children }: myChildren) => {

    const token = localStorage.getItem("token");

    if(!token) return <Navigate to="/register" />;
    
    return children
};