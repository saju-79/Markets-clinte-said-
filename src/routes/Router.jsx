import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/home/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ErrorPage from '../pages/ErrorPage';
import DashboardLayout from '../layouts/DashboardLayout';
import Profile from '../components/Profile';
import Statistics from '../pages/admin/Statistics';
import AddPlant from '../pages/admin/AddPlant';
import MyInventory from '../pages/admin/MyInventory';
import ManageUsers from '../pages/admin/ManageUsers';
import MyOrders from '../pages/admin/MyOrders';
import ManageOrders from '../pages/admin/ManageOrders';

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
        children: [
            {
                index: true,
                element: (

                    <Statistics />

                ),
            },
            {
                path: 'add-plant',
                element: (

                    <AddPlant />

                ),
            },
            {
                path: 'my-inventory',
                element: (

                    <MyInventory />

                ),
            },
            {
                path: 'manage-users',
                element: (

                    <ManageUsers />

                ),
            },
            {
                path: 'profile',
                element: (

                    <Profile/>

                ),
            },
            {
                path: 'my-orders',
                element: (

                    <MyOrders />

                ),
            },
            {
                path: 'manage-orders',
                element: (

                    <ManageOrders />

                ),
            },
        ],
    }
])