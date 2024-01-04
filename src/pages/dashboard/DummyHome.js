import React, { useEffect } from "react";
import ComplainLogo from "../../assest/images/complain-logo.png";
import Arrow from "../../assest/images/arrow.svg";
import Hindi from "../../assest/images/hindi.svg";
import English from "../../assest/images/english.svg"
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { ImInstagram } from "react-icons/im";
import Yogi from "../../assest/images/yogi.svg";
import Modi from "../../assest/images/modi.svg";
import Rakesh from "../../assest/images/rakesh.svg";
// import {} url('https://fonts.cdnfonts.com/css/yatra-one');

                
import { useTranslation } from "react-i18next";
import i18next from "i18next";


const changeLang =(l) =>{
  return()=>{
    i18next.changeLanguage(l);
    // set the current language in local storage
    localStorage.setItem('lang',l)


  }
}
const DummyHome = () => {
  const { t } = useTranslation();
  useEffect(()=>{
    let currentLang = localStorage.getItem('lang');
    i18next.changeLanguage(currentLang);

  },[]);

  return (
    <div className="container p-0" style={{overflow:"auto"}}>
          <div className="container-fluid p-0">
      <div className="row m-0 p-0">
        <div className="col d-flex justify-content-center align-item-center m-0 p-0">
          <div className="bg-image">
            <div className="polygon">
              <div className="home-nav d-flex w-100 justify-content-between px-5 pt-3">
                <div className="complain-logo">
                  <img src={ComplainLogo} alt="complain-logo.png" />
                  <img src={English} style={{cursor:"pointer"}} onClick={changeLang('en')} alt="english.svg" />
                  <img src={Arrow} alt="arrow.svg" />
                  <img src={Hindi}  style={{cursor:"pointer"}} onClick={changeLang('hi')} alt="hindi.svg" />
                
                  
                </div>
                <div className="side-image d-flex justify-content-center ">
                  
                  <div className="yogi-img">
                    <img src={Yogi} alt="yogi.svg" />
                  </div>
                  <div className="modi-img">
                    <img src={Modi} alt="modi.svg" />
                  </div>
                  <div className="rakesh-img">
                    <img src={Rakesh} alt="rakesh.svg" />
                  </div>
                </div>
              </div>
              <div className="para mt-3">
                <h5>{t("nagarPalikaLabel")}</h5>
                <p>{t("welcomeLabel")}</p>
              </div>
            </div>
            <div className="main-box d-flex justify-content-center mt-3">
              <div className="box mb-2">
                <div className="text mt-4">
                  <h5>{t("opinionFirstLabel")}</h5>
                  <p>{t("opinionSecondLabel")}</p>
                </div>
                <div className="com-app d-flex justify-content-center">
                  <div className="row text-center">
                    <div className="col" md={6}>
                      <p>{t("complaintLabel")}</p>
                      <div className="num-box">
                        <div className="num-box-second">
                          <span className="counter">
                            0
                          </span>
                        </div>
                        <div className="num-box-second">
                        <span className="counter">
                            0
                          </span>
                        </div>
                        <div className="num-box-second">
                        <span className="counter">
                            0
                          </span>
                        </div>
                        <div className="num-box-second">
                        <span className="counter">
                            0
                          </span>
                        </div>
                        <div className="num-box-second">
                        <span className="counter">
                            0
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col" md={6}>
                      <span>{t("appreciationLabel")}</span>
                      <div className="num-box">
                        <div className="num-box-second">
                          <span className="counter">
                            0
                          </span>
                        </div>
                        <div className="num-box-second">
                        <span className="counter">
                            0
                          </span>
                        </div>
                        <div className="num-box-second">
                        <span className="counter">
                            0
                          </span>
                        </div>
                        <div className="num-box-second">
                        <span className="counter">
                            0
                          </span>
                        </div>
                        <div className="num-box-second">
                        <span className="counter">
                            0
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="polygon-second">
              <div className="polysecond-text">
                <p>{t("pleaseYourLabel")}</p>
                <span>{t("registerFeedbackLabel")}</span>
              </div>
              <div className="button d-flex justify-content-center mt-3">
                <div className="row">
                  <div className="col" md={6}>
                    <button className="btn-danger">
                      {t("complaintLabel")}
                    </button>
                  </div>
                  <div className="col" md={6}>
                    <button className="btn-success">
                      {t("appreciationLabel")}
                    </button>
                  </div>
                </div>
              </div>
              <div className="btn-text text-center mt-3">
                <p>{t("followUsLabel")}</p>
              </div>
              <div className="icons d-flex justify-content-center">
                <div className="facebook-icon">
                  <FaFacebook />
                </div>
                <div className="twitter-icon px-3">
                  <AiFillTwitterCircle />
                </div>
                <div className="instagram-icon">
                  <ImInstagram />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
};

export default DummyHome;
