import React from "react";
import "./index.css";
import LoginButton from "../buttons/loginButton";
import RegisterButton from "../buttons/registerButton";
import DadosButton from "../buttons/dadosButton";
import LogoutButton from "../buttons/logoutButton";

const Crown = ({ username }) => {
  //if user logged: remove login/register -> add userButton
  return (
    <div className="crown">
      <div className="crown_logo">
        <div
          style={{
            width: "200px",
            height: "32px",
            backgroundColor: "lightgreen",
          }}
        />
      </div>
      <div className="crown_account">
        <DadosButton />
        {username !== "" ? <p>Bem-vindo, {username}!</p> : <LoginButton />}
        {username !== "" && <LogoutButton />}
        <RegisterButton />
      </div>
    </div>
  );
};

export default Crown;
