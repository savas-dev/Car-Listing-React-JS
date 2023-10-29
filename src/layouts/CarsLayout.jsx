import { Outlet } from 'react-router-dom'


export default function CarsLayout() {
  
  return (
    <div className='cars-layout'>
        <h1>Cars</h1>
        <p>You can examine any vehicle you want from the list below.</p>

        <Outlet />
    </div>
  )
}
