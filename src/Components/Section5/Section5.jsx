import React from 'react'
import img1 from '../Images/img1.png'
import girl from '../Images/girl.jpg'
import './Section5.css'
const Section5 = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="mt-5 col">
                            <div className="card" style={{ backgroundColor: 'rgb(239, 239, 239)', border: 'none' }}>
                                <div className="m-5 row">
                                    <div className="col-sm-5" style={{ textAlign: 'center', marginTop: '40px' }}>
                                        <h3 className="text-center" style={{ fontSize: '40px' }}>
                                            Unlock the secrets to successful freelancing
                                        </h3>
                                        <p className="text-center mt-5" style={{ fontSize: '20px' }}>
                                            Become a successful freelancer and learn tips and tricks from the experts to thrive in any industry.
                                        </p>
                                        <button className="mt-5 home-learn btn" style={{ color: 'white' }}>
                                            <b>Start Learning</b>
                                        </button>
                                    </div>
                                    <div className="col-sm-7">
                                        <img className="Pic" src={img1} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="start_project row">
                        <div className="col-sm-5">
                            <img src={girl} alt="" style={{ width: '100%' }} />
                        </div>
                        <div className="col-sm-1"></div>
                        <div className="mt-5 col-sm-5">
                            <center>
                                <h3>Ready to start your project?</h3>
                                <p className="startproject_p">
                                    Be a part of a global professional community, make friends, work independently, run your own business, and choose your own clients and projects.
                                </p>
                                <br />
                                <p className="startproject_p">
                                    Join us today and discover the freedom, flexibility, and fulfillment that come with freelancing.
                                </p>
                                <br />
                                <br />
                                <br />
                                <br />
                                <button className="Liveyourpassion">Live your passion</button>
                            </center>
                        </div>
                        {/* <div className="col-sm-1"></div> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section5
