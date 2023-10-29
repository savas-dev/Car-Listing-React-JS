import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"



export default function Slider() {

    var slideButtonNumber = -1
    var slideNumber = 0
    
    const [cars, setCars] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://mocki.io/v1/0a27dccc-c0bd-46fb-8343-2599e48f9e9e')
            const data = await res.json()

            setCars(data)
        }

        fetchData()
    }, [])

    return (
        <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
                {cars.map((car) => {
                    return(
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={slideButtonNumber += 1} className={slideNumber === 0 ? 'active' : ''} aria-current="true" aria-label={slideNumber >= 0 ? 'Slide ' + `${slideNumber+=1}` : '' }></button>
                        
                    )
                    
                })}
            </div>
            <div className="carousel-inner">
                {cars.map((car) => {
                    return (
                        <div key={car?.id} className={car?.id === 1 ? 'carousel-item active' : 'carousel-item'}>
                            <img src={car?.img} className="d-block w-100" alt={car?.model} />
                            <div className="carousel-caption d-none d-md-block">
                                <NavLink to={`/cars/` + car?.id.toString() + `/${car?.model}`}>
                                {car?.model}
                                </NavLink>
                                <p>{car?.desc}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
