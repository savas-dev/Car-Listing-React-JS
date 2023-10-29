import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'


export default function Cars() {

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
    <div className='cars'>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {cars.map((car) => {
          return (
            <div class="col">
              <div class="card">
                <NavLink to={car?.id.toString() + `/${car.model}`}>
                  <img className='car-img' src={car?.img} class="card-img-top" alt={car?.model} />
                </NavLink>
                <div class="card-body">
                  <NavLink to={car?.id.toString() + `/${car?.model}`} className="car-title-link">
                    <h5 class="card-title">{car?.model}</h5>
                  </NavLink>
                  <p class="card-text">{car?.desc}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
