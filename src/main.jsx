import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'

import './index.css'
import 'bootstrap/dist/css/bootstrap.css';

import Layout from './components/Layout.jsx'

import Home from './pages/Home';
import Vans from './pages/Vans';
import VansDetails from './pages/VanDetails';
import Error from './components/Error'

import { loader as vansLoader } from './pages/Vans'
import { loader as vanDetailsLoader} from './pages/VanDetails'

let router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='vans' element={<Vans />} loader={vansLoader} />
    <Route path='vans/:id'  element={<VansDetails/>} loader={vanDetailsLoader} errorElement={<Error/>} />
  </Route>
))


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
