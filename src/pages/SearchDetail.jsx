import { NavLink } from "react-router-dom"



export default function SearchDetail({searchProps}) {
  return (
    <div className='search-detail'>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {searchProps.map((car) => {
          return (
            <div class="col">
              <div class="card">
                <NavLink to={`/cars/` + car?.id.toString() + `/${car.model}`}>
                  <img className='car-img' src={car?.img} class="card-img-top" alt={car?.model} />
                </NavLink>
                <div class="card-body">
                  <NavLink to={`/cars/` + car?.id.toString() + `/${car?.model}`} className="car-title-link">
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
