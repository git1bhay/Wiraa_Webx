// Section.jsx
import React from 'react';
import './Section.css'; // Import your CSS file
import i1 from '../Images/i1.png'
import i2 from '../Images/i2.png'
import i3 from '../Images/i3.png'
import i4 from '../Images/i4.png'
import i5 from '../Images/i5.png'
import i6 from '../Images/i6.png'
import i7 from '../Images/i7.png'
import i8 from '../Images/i8.png'

const Section = () => {
  return (
    <>
    <section xs="12" style={{ backgroundColor: 'white' }}>
      <div xs="12" sm="12" className="pt-5 container-fluid">
        <div className="pt-0 row">
          <div className="mb-5 d-none d-sm-block col-sm-2" style={{ paddingLeft: '8vh' }}>
            <img src={i1} alt="Image_1" className="p-1" style={{ width: '28vh' }} />
            <img src={i2} alt="Image_2" className="p-1" style={{ width: '28vh' }} />
          </div>
          <div className="d-none d-sm-block col-sm-2" style={{ marginTop: '18vh' }}>
            <img src={i3} alt="Image_3" className="p-1" style={{ width: '28vh' }} />
            <img src={i4} alt="Image_4" className="p-1" style={{ width: '28vh' }} />
          </div>
          <div className="col-sm-4 col-12 text-container">
            <h1 className="top-text-h1">Discover the world's top professionals</h1>
            <p className="text-disable top-text-p" style={{ fontSize: '25px', color: 'grey' }}>
              Hire the world’s top freelancers and get work done in a safe and flexible environment.
            </p>
            <a href="/#">
              <button className="post-request btn buttons">
                <b>Post a Project</b>
              </button>
            </a>
            <a href="/#">
              <button className="find-project btn buttons">
                <b>Find Project</b>
              </button>
            </a>
          </div>
          <div className="mb-5 d-none d-sm-block col-sm-2" style={{ paddingLeft: '8vh' }}>
            <img src={i5} alt="Image_5" className="p-1" style={{ width: '28vh' }} />
            <img src={i6} alt="Image_6" className="p-1" style={{ width: '28vh' }} />
          </div>
          <div className="d-none d-sm-block col-sm-2" style={{ marginTop: '18vh' }}>
            <img src={i7} alt="Image_7" className="p-1" style={{ width: '28vh' }} />
            <img src={i8} alt="Image_8" className="p-1" style={{ width: '28vh' }} />
          </div>
        </div>
      </div>
    </section>
    
    </>
  );
};

export default Section;
