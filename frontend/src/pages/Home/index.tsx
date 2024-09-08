import { Link } from "react-router-dom";
import ButtonIcon from "../../components/ButtonIcon/ButtonIcon";
import "./styles.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="base-card home-card">
        <div className="home-content-container">
          <div>
            <h1>Controle de Vendas</h1>
            <div className="animated-text">
              <span className="text-the-caras">
                The <span className="text-festival">Festival</span> Caras
              </span>
            </div>
            <p className="home-subtitle">Ainda em desenvolvimento</p>
          </div>
          <div>
            <Link to="/lista">
              <ButtonIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
