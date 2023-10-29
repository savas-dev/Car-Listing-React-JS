import { useLoaderData } from "react-router-dom"

export const carsDetailLoader = async ({ params }) => {
  const { id } = params

  const res = await fetch('http://localhost:3001/cars/' + id)

  if (!res.ok) {
    throw Error('an error when get data')
  }

  return res.json()
}

export default function CarsDetail() {

  const car = useLoaderData()

  return (
    <div className="cars-detail">
      <div className="card" style={{width: 'width: 18rem'}}>
        <img src={car.img} className="card-img-top" alt={car.model} />
          <div className="card-body">
            <h5 className="card-title">
              {car.model}
            </h5>
            <p className="card-text">
              {car.desc}
              {car.desc}
              {car.desc}
            </p>
          </div>
      </div>
    </div>
  )
}
