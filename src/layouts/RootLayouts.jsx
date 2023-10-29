
import {NavLink, Outlet} from 'react-router-dom'
import Search from '../components/Search'
import searchCar from '../api/searchApi'
import { useState } from 'react'
import SearchDetail from '../pages/SearchDetail'

export default function RootLayouts({search}) {

    const [car, setCar] = useState([])
    const handleSearch = async (term) =>{
        console.log(term)
        const result = await searchCar(term)
        setCar(result)
    }

    return (
        <div className="root-layout">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <NavLink className='navbar-brand' to='/'>CARS LOGO</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <NavLink className='nav-link' to='/about'>
                                About Us
                            </NavLink>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Multimedia
                                </a>
                                <ul className="dropdown-menu">
                                <NavLink className='dropdown-item' to='/about/video'>
                                    Videos
                                </NavLink>
                                <NavLink className='dropdown-item' to='/about/gallery'>
                                    Photos
                                </NavLink>
                                </ul>
                            </li>

                            <NavLink className='nav-link' to='/cars'>
                                Cars
                            </NavLink>
                        </ul>

                        <Search search={handleSearch} />
                    </div>
                </div>
            </nav>
        
            <main className='outlet'>

            <SearchDetail searchProps={car} />
            <Outlet />
            </main>
        </div>

       
    )
}
