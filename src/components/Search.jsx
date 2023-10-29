import { useState } from "react"


export default function Search({search}) {

    const [value, setValue] = useState('')
    const handleFormSubmit = (e) =>{
        e.preventDefault()
        search(value)
    }

    const handleChange = (event) =>{
        setValue(event.target.value)
    }
 
    return (
        <div>
            <form onSubmit={handleFormSubmit} className="d-flex" role="search">
                <input value={value} onChange={handleChange} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    )
}
