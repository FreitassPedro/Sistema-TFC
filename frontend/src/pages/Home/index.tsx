
import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="base-card home-card">
        <div className="home-content-container">
          <div>
            <h1>Controle de Vendas</h1>
            <span className="text-the-caras"> The <span className="text-festival">Festival</span> Caras</span>
            <p className="home-subtitle">
                Ainda em desenvolvimento
            </p>
          </div>
          <div>
            <Link to="/products">
              
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
