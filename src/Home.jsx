import React from 'react'
import { NavLink } from 'react-router-dom'
function Home() {
  return (
    <>
    <section id="header" className="d-flex align-items-center">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-10 mx-auto">
          <div className="row">
            <div className="col-md-6 pt-5  pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
              <h1>
                Welcome Our 
                <strong className="brand-name"> Muhammad's Shop</strong>
              </h1>
              <p className="my-3 fw-bold fs-9">
              Welcome to Naveed's Shop, where productivity meets convenience. Step into a space designed to elevate your workflow and enhance your efficiency. From carefully curated products to streamline your tasks to an atmosphere that fosters focus and innovation, we're here to empower your productivity journey.
              </p>
              <div className="mt-3">
                <NavLink  className="btn-get-started mb-4" to={'/category'}>
                  Get Started
                </NavLink>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 header-img">
            <img src='./images/shp.png'  alt="home img" className="img-fluid animated"  />
</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default Home
