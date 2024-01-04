import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { userAddress } from "../../constant";
import ErrorPage from "../../component/ErrorPage";
import swal from "sweetalert";

export default function PreLogin() {
  const [loader, setLoader] = useState(true);
  const { token } = useParams();
  const navigate = useNavigate();
  const userkeys = Object.keys(userAddress);
  useEffect(() => {
    userkeys.includes(token) ? userSuccess() : setLoader(false);
  }, []);

  const userSuccess = () => {
    localStorage.setItem("userAddress", JSON.stringify(userAddress[token]));
    swal(
      "Hello !",
      `You are login from ${userAddress[token]?.wardNumber} ${userAddress[token]?.nagarPalika} `,
      "success"
    ).then(() => {
      navigate("/login");
      setLoader(false);
    });

  };

  return (
    <>
      {loader ? (
        <div className="container preloader">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="spinner-border text-secondary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      ) : (
        <ErrorPage text={"Not a valid address"} />
      )}
    </>
  );
}
