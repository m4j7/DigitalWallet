import React from "react";
import { LoginTypes } from "./login.types";
import "./loginStyle.css";
import { ButtonComponent } from "../../componentes/button";
import { TextFieldComponent } from "../../componentes/textfield";
import { Header } from "../../componentes/header";

function handleForm() {}

const Login = () => {
  return (
    <div className="container">
      <div className="container-login">
        <div className="header">
                  </div>
        <div className="wrap-login">
          <form className="login-form">
            <div className="wrap-input">
              <TextFieldComponent style={{ width: "100%" }} label="Email" />
            </div>

            <div className="wrap-input">
              <TextFieldComponent style={{ width: "100%", }} label="Senha"  />
            </div>

            <div className="container-login-form-btn">
              <ButtonComponent
                themeColor="rgb(57, 71, 203)"
                title="Entrar"
                onClick={() => handleForm()}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
