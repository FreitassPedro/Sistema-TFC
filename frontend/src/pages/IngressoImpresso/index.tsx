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
        if (error.response.status === 404) {
          alert("Ingresso não encontrado");
        }

        console.error("Erro ao buscar dados do ingresso:", error);
      });
  }, [codigoConsumivel]);

  const diasRestantes = () => {
    const dataEvento = new Date("2024-10-25T23:00:00.000Z");

    // Pegue a data atual ao acessar
    const dataAtual = new Date();

    // Calcule a diferença entre as datas
    const diferencaEmMilisegundos = dataEvento.getTime() - dataAtual.getTime();

    // Converte a diferença em dias
    const diferencaEmDias = Math.floor(
      diferencaEmMilisegundos / (1000 * 60 * 60 * 24)
    );

    if (diferencaEmDias < 1) {
      const diferencaEmHoras = Math.floor(
        diferencaEmMilisegundos / (1000 * 60 * 60)
      );
      return `${diferencaEmHoras} horas`;
    }
    return `${diferencaEmDias} dias`;
  };

  const handleGerarQRCode = () => {
    if (ingresso) {
      const consulta = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${ingresso?.codigoConsumivel}`;
      return consulta;
    }
    return "";
  };

  return (
    <>
      <div className="ingresso-impresso">
        <div className="bg-text">
          <h1>TFC</h1>
        </div>

        <div className="card-main">
          <div className="main">
            {ingresso && (
              <img
                src={handleGerarQRCode()}
                className="box-image"
                alt="QR Code"
              />
            )}
            <div className="code-text">
              <h2>
                {ingresso
                  ? `ID: ${ingresso.codigoConsumivel}`
                  : "Código Inválido"}
              </h2>
            </div>
            <hr />
            <h2 className="card-nome">
              {ingresso ? ingresso.nome : "Carregando..."}
            </h2>

            <div className="card-info">
              <div className="date">
                <span>◷</span>
                <p>{diasRestantes()} restantes</p>
              </div>
            </div>
            <hr />

            <span>
              {ingresso ? (
                "Aproveite a festa!"
              ) : (
                <>
                  Seu código é inválido. <br /> Entre em contato em caso de
                  dúvidas
                </>
              )}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default IngressoImpresso;
