import React from "react";
import { Ingresso } from "types/Ingresso";
interface PopupPros {
  onClose: () => void;
  ingresso: Ingresso | null;
  onValidarEntrada: () => void;
}
const Popup: React.FC<PopupPros> = ({
  onClose,
  ingresso,
  onValidarEntrada,
}) => {
  return (
    <div className="popup-overlay">
      <div
        className="popup-content">
        <div>
          <h2>Validar Ingresso?</h2>
          <div>
            <p>
              <strong>Código:</strong> {ingresso?.codigoConsumivel}
            </p>
            <p>
              <strong>Nome:</strong> {ingresso?.nome}
            </p>
          </div>
        </div>
        <div className="buttons">
          <button className="btn" onClick={onClose}>Fechar</button>
          <button className="btn btn-success" onClick={onValidarEntrada}>Validar Entrada</button>
        </div>
      </div>
      <div></div>
    </div>
  );
};


export default Popup;