import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/home/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ErrorPage from '../pages/ErrorPage';
import DashboardLayout from '../layouts/DashboardLayout';
import Profile from '../components/Profile';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        // errorElement: <ErrorPage />,
        children: [
            {
                index: true,   // 👈 use index instead of path "/"
                element: <Home />
            },
        ],
    },
    {
        path: "/login",   // 👈 remove leading slash
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
    path: '/dashboard',
   element: <DashboardLayout></DashboardLayout>,
    children:[
        {
             path: 'profile',
        element: (
            <Profile/>
        ),
        }
    ]
    }
])