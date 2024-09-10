import React from "react";
import ImgLogo from "../../assets/images/ImgLogoPNG.png";
import PumpkinIcon from "../../assets/images/pumpkin.png"; // Adicione a imagem de abóbora
import "./styles.css";

function NavBar() {
  return (
    <div className="d-flex flex-column p-3 px-md-4 mb-3 border-bottom shadow-sm navbar-halloween">
      <div className="pumpkin-background">
      <img src={PumpkinIcon} alt="Pumpkin Icon" />
        <img src={PumpkinIcon} alt="Pumpkin Icon" />
        <img src={PumpkinIcon} alt="Pumpkin Icon" />
        <img src={PumpkinIcon} alt="Pumpkin Icon" />
        <img src={PumpkinIcon} alt="Pumpkin Icon" />
        <img src={PumpkinIcon} alt="Pumpkin Icon" />
        <img src={PumpkinIcon} alt="Pumpkin Icon" />
        <img src={PumpkinIcon} alt="Pumpkin Icon" />
        <img src={PumpkinIcon} alt="Pumpkin Icon" />
      </div>
      <div className="container">
        <nav className="my-2 mr-md-3 texttfc">
          <span>The</span>
          <img src={ImgLogo} alt="Logo" />
          <span>Festival</span>
        </nav>
      </div>
    </div>
  );
}
export default NavBar;