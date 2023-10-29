import { Outlet } from "react-router-dom"


export default function AboutLayout() {
  return (
    <div className="about-layout">
        <h2>CAR LISTING APP</h2>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo eaque debitis nesciunt odio illum iusto cum dolor veritatis, distinctio sed itaque magni quisquam. Modi quibusdam blanditiis, numquam deleniti maxime molestias! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quod cumque cupiditate odit fuga alias quo molestias eveniet, officia quidem, culpa odio aut optio beatae, iure aliquam ex dolor quos.
        </p>
        <Outlet />
    </div>

    
  )
}
