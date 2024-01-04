import React from "react";
import Logo from "../../assest/images/complain-logo.png";

const DummyHomeSecond = ()=> {
  return (
    <div className="container p-0" style={{overflow:"auto"}}>
    <div className="container-fluid p-0">
      <div className="row m-0 p-0">
        <div className="col d-flex justify-content-center m-0 p-0">
          <div className="background-image mt-3">
            <div className="main-circle d-flex justify-content-center">
              <div className="circle mt-5">
              <div className="logo d-flex justify-content-center mt-3">
                  <img src={Logo} alt="complain-logo.png" />
                </div>
              </div>
            </div>

            <div className="third-polygon">
              <from className="form d-flex justify-content-center">
                <label className="input-text mt-5">
                  <p>नाम या ई-मेल</p>
                  <br />
                  <input className="input" />
                </label>
              </from>
              <from className="form d-flex justify-content-center">
                <label className="input-text">
                  <p>मोबाइल</p>
                  
                  <br />
                  <input className="input" />
                  <br />
                  <p className="para-text">ओटीपी प्राप्त करें</p>
                </label>
              </from>
              <from className="form d-flex justify-content-center">
                <label className="input-text">
                  <p>ओटीपी</p>
                  <br />
                  <input className="input" />
                </label>
              </from>
              <div className="btn d-flex justify-content-center mt-3">
              <button>SUBMIT</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
}

export default DummyHomeSecond;
