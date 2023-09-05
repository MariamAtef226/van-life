import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'

import './index.css'
import 'bootstrap/dist/css/bootstrap.css';

import Layout from './components/Layout.jsx'
import Error from './components/Error'
import NotFound from './components/NotFound';

import Home from './pages/Home';
import Vans from './pages/Vans';
import VansDetails from './pages/VanDetails';
import Login from './pages/Login';


import { loader as vansLoader } from './pages/Vans'
import { loader as vanDetailsLoader } from './pages/VanDetails'
import { loginAction } from './pages/Login'
import { loader as hostVansLoader} from './pages/host/HostVans'
import {loader as hostVanDetailsLoader} from './pages/host/HostVanDetails'

import Dashboard from './pages/host/Dashboard';
import HostLayout from './pages/host/HostLayout';
import HostAuthenticator from './pages/host/HostAuthenticator';
import HostVans from './pages/host/HostVans';
import HostVanDetails from './pages/host/HostVanDetails';



let router = createBrowserRouter(createRoutesFromElements(
  <Route path='/van-life' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='vans' element={<Vans />} loader={vansLoader} />
    <Route path='vans/:id' element={<VansDetails />} loader={vanDetailsLoader} errorElement={<Error />} />
    <Route element={<HostAuthenticator />}>
      <Route path='host' element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='vans' element={<HostVans/>} loader={hostVansLoader} errorElement={<Error />}/>
        <Route path='vans/:id' element={<HostVanDetails/>} loader={hostVanDetailsLoader} errorElement={<Error />}/>
      </Route>
    </Route>
    <Route path='*' element={<NotFound />} />
    <Route path='login' element={<Login/>} action={loginAction}/>
  </Route>
))


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
