import './App.css';
import {Route, NavLink, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import RootLayouts from './layouts/RootLayouts';
import Home, {carsLoader} from './pages/Home'
import About from './pages/About'
import Video from './pages/Video'
import Gallery from './pages/Gallery'
import Cars from './pages/Cars/Cars'
import CarsDetail, {carsDetailLoader} from './pages/Cars/CarsDetail'

import CarsLayout from './layouts/CarsLayout'
import AboutLayout from './layouts/AboutLayout';

import searchCar from './api/searchApi'


const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path='/' element={<RootLayouts />}>
      <Route index element={<Home />} />
      <Route path='about' element={<AboutLayout />}>
        <Route index element={<About />} />
        <Route path='/about/video' element={<Video />} />
        <Route path='/about/gallery' element={<Gallery />} />
      </Route>


      <Route path='cars' element={<CarsLayout />}>
        <Route index element={<Cars />} />
        <Route path=':id/:model' element={<CarsDetail />} loader={carsDetailLoader}/>
      </Route>
    </Route>
  )
)

function App() {
  
  return (
        <RouterProvider router={router} />
  );
}

export default App;
