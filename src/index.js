import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Nav from './components/nav';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './styles/style.css'
import Footer from './components/footer';
import Products from './pages/products';
import Productdesc from './pages/productsdetails';
import Body from './Body';
import Error from './components/error.js'
import Offers from './components/offers';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/body.css'
import './styles/trendingslider.css'
import './styles/trendingitems.css'
import './styles/nav.css'
import './styles/footer.css'
import './styles/products.css'
import './styles/productsdetails.css'
import './styles/cart.css'

const Main=()=>{
  return(
    <div>
      <Nav/>
      <Body/>
      <Footer/>
    </div>
  )
}
const Offerscomponent=()=>{
  return(
    <div>
    <Nav/>
    <Offers/>
    <Footer/>
    </div>
  )
}
const router=createBrowserRouter([
  {
    path: "/",
    errorElement: <Error/>,
    element: <Main/>,
  },
  {
    path: "/categories/:id",
    element: <Products/>,
  },
  {
    path: "/categories/products/:id",
    element: <Productdesc/>
  },
  {
    path:'/offers',
    element: <Offerscomponent/>
  }
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}/>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
