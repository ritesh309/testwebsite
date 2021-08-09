import React from 'react'
import Common from './Common'
import RiteshImg from '../src/images/ritesh_img.jpg'
import "./About.css"
function About() {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10  mx-auto ">
                        <div className="card_dim card mb-3 ">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={RiteshImg} class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Ritesh Kumar</h5>
                                        <p className="card-text">He is a CSE Student .Full Stack development . His goal to take the technology to the  next level of development. He will be  contributing his efforts on meking others known the efficient use of technology.
                                        </p>
                                        <button type="submit" class="btn btn-primary position-relative" to="https://www.linkedin.com/in/ritesh-kumar-b240731a7/" >
                                            LinkedIn
                                            <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                                                <span class="visually-hidden">New alerts</span>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default About
