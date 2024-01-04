import React, { useState } from "react";
// import Form from "../../component/form";
import logo from "../../assest/images/logo192.png";
import { useTranslation, Trans } from "react-i18next";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { t } = useTranslation();

  // const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("users ::>", user);
  };
  const onChangeHandler = (e) => {
    e.preventDefault();
    setUser((preValue) => ({
      ...preValue,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Trans i18nKey="description.part1">
            Edit <code>src/App.js</code> and save to reload.
          </Trans>
        </p>
        <p>
          {t("nagarPalika")}
        </p>
      </header>
    </div>
  );
}
