import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "utils/requests";

import "./styles.css";
import { Ingresso } from "types/Ingresso";

const IngressoImpresso = () => {
  const { codigoConsumivel } = useParams();
  const [ingresso, setIngresso] = useState<Ingresso | null>(null);
  
  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/ingresso/code/${codigoConsumivel}`)
      .then((response) => {
        setIngresso(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados do ingresso:', error);
      });
  }, []);

  return (
    <>
      <div className="ingresso-impresso">
        <div className="nft">
          <div className="main">
            <img
              className="box-image"
              src="https://www.qrcode-monkey.com/img/default-preview-qr.svg"
              alt="QR Code"
            />
            <div className="code-text">
              <h2>{ingresso ? ingresso.codigoConsumivel : 'Código Inválido'}</h2>
            </div>
            <hr />
            <h2 className="card-nome">{ingresso ? ingresso.nome : 'Carregando...'}</h2>

            <div className="card-info">
              <div className="date">
                <span>◷</span>
                <p>XX dias restantes</p>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default IngressoImpresso;
