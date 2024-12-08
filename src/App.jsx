import {Routes, Router, Route} from 'react-router-dom'
import PageNotFound from './pages/404'
import Landing from './pages/landing'
import Register from './pages/regis'
import Home from './pages/home'
import Rent from './pages/rent'
import RentFormFord from './pages/rentform'
import RentFormCivic from './pages/rentformcivic'
import RentFormVan from './pages/rentformvan'
import Summary from './pages/summary'
import About from './pages/about'
import Layout from './layout/layout'

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  

  return (
    <Routes>
    <Route path='*' element={<PageNotFound/>}/>
    <Route path='/' element={<Landing/>}/>
    <Route path='/register' element={<Register/>}/>
    
    <Route element={<Layout/>}>
        <Route path='/home' element={<Home/>}/>
        <Route path='/rent' element={<Rent/>}/>
        <Route path='/rentformford' element={<RentFormFord/>}/>
        <Route path='/rentformcivic' element={<RentFormCivic/>}/>
        <Route path='/rentformvan' element={<RentFormVan/>}/>
        <Route path='/summary' element={<Summary/>}/>
        <Route path='/about' element={<About/>}/>
       </Route>   
     

  </Routes>
  )
}

export default App
