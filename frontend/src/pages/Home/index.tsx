import { Link } from "react-router-dom";
import ButtonIcon from "../../components/ButtonIcon/ButtonIcon";
import "./styles.css";
import NavBar from "components/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="home-container">
        <div className="jumbotron">
          <div className="home-content-container">
         
              <h1 className="display-4 ">Controle de Vendas</h1>
              <div className="jumbotron">
                <div className="animated-text">
                  <span className="text-the-caras">
                    The 
                    <span className="text-festival">Festival</span>
                    Caras
                  </span>
                </div>
              </div>
              <p className="home-subtitle">Ainda em desenvolvimento</p>

            <div>
              <Link to="/lista">
                <ButtonIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
