import React from 'react'
import bus from '../Images/bus.png'
import cake from '../Images/cake.png'
import Eng from '../Images/Eng.png'
import IT from '../Images/IT.png'
import Life from '../Images/Life.png'
import Mark from '../Images/Mark.png'
import Study from '../Images/Study.png'
import Writing from '../Images/Writing.png'
import './Section3.css';
const Section3 = () => {
    return (
        <>
            <section style={{ backgroundColor: "buttonhighlight" }}>
                <div className="pb-5 container">
                    <div className="row">
                        <div className="explore_skill col">
                            <h1
                                className="text-center explore_skill mt-5"
                                style={{ fontSize: "45px" }}
                            >
                                Explore the marketplace
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
            <section style={{ backgroundColor: 'buttonhighlight' }}>
                <div className="card_container container">
                    <div className="pt-5 row">
                        <div className="col-sm-3 col-6">
                            <div className="card-box" style={{ textAlign: 'center' }}>
                                <img src={bus} alt="" className="card-img" style={{ height: '60px', width: '60px', display: 'block', margin: 'auto' }} />
                                <h1>Business</h1>
                            </div>
                        </div>
                        <div className="col-sm-3 col-6">
                            <div className="card-box" style={{ textAlign: 'center' }}>
                                <img src={cake} alt="" className="card-img" style={{ height: '60px', width: '60px' }} />
                                <h1>Creative</h1>
                            </div>
                        </div>
                        <div className="col-sm-3 col-6">
                            <div className="card-box" style={{ textAlign: 'center' }}>
                                <img src={Eng} alt="" className="card-img" style={{ height: '60px', width: '60px' }} />
                                <h1>Engineering</h1>
                            </div>
                        </div>
                        <div className="col-sm-3 col-6">
                            <div className="card-box" style={{ textAlign: 'center' }}>
                                <img src={IT} alt="" className="card-img" style={{ height: '60px', width: '60px' }} />
                                <h1>IT</h1>
                            </div>
                        </div>
                    </div>
                    <div className="pt-5 pb-5 row">
                        <div className="col-md-3 col-sm-3 col-6">
                            <div className="card-box">
                                <img src={Life} alt="" className="card-img" style={{ height: '60px', width: '60px' }} />
                                <h1>Lifestyle</h1>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-6">
                            <div className="card-box">
                                <img src={Mark} alt="" className="card-img" style={{ height: '60px', width: '60px' }} />
                                <h1>Marketing</h1>
                            </div>
                        </div>
                        <div className="col-sm-3 col-6">
                            <div className="card-box">
                                <img src={Study} alt="" className="card-img" style={{ height: '60px', width: '60px' }} />
                                <h1>Study</h1>
                            </div>
                        </div>
                        <div className="col-sm-3 col-6">
                            <div className="card-box">
                                <img src={Writing} alt="" className="card-img" style={{ height: '60px', width: '60px' }} />
                                <h1>Writing</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section3
