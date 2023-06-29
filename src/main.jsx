import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
}  from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Category from './pages/Category/Category';
import Categories from './pages/Categories/Categories';
import Profile from './pages/Profile/Profile';
import ProjectSingle from './pages/ProjectSingle/ProjectSingle';
import Register from './pages/Register/Register';
import EditProfile from './pages/Editprofile/EditProfile';

const Layout = () => {
  return(
    <div>
<Navbar />
     <Outlet/> 
     <Footer />
    </div>
  
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
          path:"/",
          element:  <Home/>
      },
      {
        path:"/category/:id",
        element:  <Category/>
    },
    {
      path:'/categories',
      element:  <Categories/>
  },
  {
    path:'/profile/:id',
    element:  <Profile/>
},
{
  path:'/project/:id/:id',
  element:  <ProjectSingle/>
},
,
{
  path:'/profile/:id/edit',
  element:  <EditProfile/>
},
{
  path:'/join',
  element:  <Register/>
}
     
 
]
},

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  
 
    <React.StrictMode>

 {/* 08102145087 */}
 <RouterProvider router={router} />
    {/* <App /> */}

  </React.StrictMode>

)
