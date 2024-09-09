import React from "react";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const VendaForm: React.FC = () => {
  // Crie um formulário para adicionar uma nova venda

  const [nomes, setNomes] = React.useState<string[]>([""]); // Array p/ armazenar nomes
  const handleNomeChange =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const novosNomes = [...nomes];
      novosNomes[index] = e.target.value;
      setNomes(novosNomes);
    };

  const adicionarNome = () => {
    setNomes([...nomes, ""]);
  };
  const removerNome = (index: number) => {
    const novosNomes = [...nomes];
    novosNomes.splice(index, 1);
    setNomes(novosNomes);
  };

  return (
    <div className="base-card home">
      <div className="form-container">
        <div className="form base-card">
          <form action="#">
            <div className="form-header ">
              <div className="form-title">
                <h1>Registrar Venda</h1>
              </div>
              <div className="send-button">
                <button type="submit">Inserir</button>
              </div>
            </div>
            <div className="input-group">
              <div className="input-box">
                <label htmlFor="instagram">Comprovante</label>
                <input
                  id="instagram"
                  name="instagram"
                  type="text"
                  placeholder="Digite @... do comprovante"
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <div className="input-box">
                <label htmlFor="valorIngresso">Preço</label>
                <input
                  id="preco"
                  name=""
                  type="text"
                  placeholder="Digite valor do ingresso"
                  required
                />
              </div>
            </div>

            <div className="input-group">
              {nomes.map((nome, index) => (
                <div className="input-box" key={index}>
                  <label htmlFor={`nome-{$index}`}>Nome {index + 1}</label>
                  <input
                    id={`nome-${index}`}
                    type="text"
                    value={nome}
                    placeholder="Insira o nome"
                    onChange={(e) => handleNomeChange(index)(e)}
                    required
                  />
                  {index > 0 && (
                    
                      <button type="button" onClick={() => removerNome(index)}>
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                  )}
                </div>
              ))}

              <button type="button" onClick={adicionarNome} className="button-add-name">
                Adicionar nome
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VendaForm;
