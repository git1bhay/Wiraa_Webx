import React from 'react'
import logo1 from '../Images/logo1.png'
import logo2 from '../Images/logo2.png'
import logo3 from '../Images/logo3.png'
import './Section4.css'
const Section4 = () => {
  return (
    <>
      <section className="">
                <div className="container-fluid">
                    <div className="pt-5 pb-5 row">
                        <div className="col">
                            <h1 className="text-center hiresmarternotharder">Hire smarter, not harder</h1>
                            <p className="text-center" style={{ fontSize: '22px', color: 'grey' }}>
                                Find, connect, and hire the best talents to work on projects without any cost
                            </p>
                        </div>
                    </div>
                    <div className="pt-5 pb-5 hiresmart row">
                        <div className="col-sm-4">
                            <img src={logo1} alt="" className="card-img1" />
                            <h4 className="text-center mt-4">Connect & collaborate</h4>
                            <p className="text-center" style={{ fontSize: '18px', color: 'grey' }}>
                                Post your requirement and start receiving proposals within 24 hours
                            </p>
                        </div>
                        <div className="col-sm-4">
                            <img src={logo2} alt="" className="card-img1" />
                            <h4 className="text-center mt-4">Verified professionals</h4>
                            <p className="text-center" style={{ fontSize: '18px', color: 'grey' }}>
                                Instantly match with verified freelancers and agencies at zero commission
                            </p>
                        </div>
                        <div className="col-sm-4">
                            <img src={logo3} alt="" className="card-img1" />
                            <h4 className="text-center mt-4">Negotiating the deal</h4>
                            <p className="text-center" style={{ fontSize: '18px', color: 'grey' }}>
                                Transparency and certainty of price, scope of work, quality, and speed
                            </p>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Section4
