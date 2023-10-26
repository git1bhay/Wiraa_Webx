import React from 'react'
import GP from "../Images/GP.png";
import wiraaimg from "../Images/wiraaimg.png";
import './Section2.css'


const Section2 = () => {
  return (
    <>
      <section className="sec">
                <div className="p-4 container">
                    <div className="p-4 row">
                        {/* Left column */}
                        <div className="col-sm-5" style={{ marginTop: "30px" }}>
                            <span className="header">
                                Hire top talents from{" "}
                                <span
                                    className="anywhere"
                                    style={{ color: "rgb(0, 128, 128)" }}
                                >
                                    anywhere
                                </span>
                            </span>
                            <p
                                className="subheader"
                                style={{ backgroundColor: "black" }}
                            >
                                We’re available on Android devices and platforms.
                            </p>
                        </div>

                        {/* Middle column */}
                        <div className="col-sm-3">
                            <img
                                src={GP}
                                alt="Image_1"
                                className="Picture10"
                                style={{ width: "82%", marginTop: "30px", marginLeft: "10px" }}
                            />
                        </div>

                        {/* Right column */}
                        <div className="col-sm-4">
                            <img
                                src={wiraaimg}
                                alt="Image_2"
                                className="Picture09"
                                style={{ width: "80%", height: "100%", float: "right" }}
                            />
                        </div>
                    </div>
                </div>
            </section>

    </>
  )
}

export default Section2;
