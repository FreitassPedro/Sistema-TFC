import React from "react";
import axios from "axios";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BASE_URL } from "utils/requests";

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

  const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();

      const formData = new FormData(event.currentTarget as HTMLFormElement);

      const instagram = formData.get("instagram") as string;
      const valorIngresso = parseFloat(formData.get("valorIngresso") as string);
      const valorPago = parseFloat(formData.get("valorPago") as string); 
      const nomes = formData.getAll("nome") as string[];
  
      // Cria objeto para enviar ao backend
      const dadosParaEnviar = {
        instagramComprovante: instagram,
        valorIngresso: valorIngresso,
        valorPago: valorPago,
        nomes: nomes,
      }

      try {
        console.log(dadosParaEnviar);
        // Envia dados para o backend
        const resposta = await axios.post(`${BASE_URL}/api/comprar`, dadosParaEnviar);
        if (resposta.status === 201 ) {
          alert("Ingresso registrada com sucesso!");
        } else {
          alert("Erro ao registrar ingresso. Confira os dados");
        }
      } catch (error) {
        alert("Algo deu errado");
      }
      
  
    };
  return (
    <div className="base-card home">
      <div className="form-container">
        <div className="form base-card">
          <form action="#" onSubmit={handleSubmit}>
            <div className="form-header ">
              <div className="form-title">
                <h1>Registrar Venda</h1>
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
                <label htmlFor="valorIngresso">Preço R$</label>
                <input
                  id="valorIngresso"
                  name="valorIngresso"
                  type="text"
                  placeholder="Digite valor do ingresso"
                  required
                />
              </div>
            </div>
            <div className="input-group">
              <div className="input-box">
                <label htmlFor="valorPago">Valor total R$</label>
                <input
                  id="valorPago"
                  name="valorPago"
                  type="text"
                  placeholder="Digite valor total pago"
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
                    name="nome"
                    value={nome}
                    placeholder="Insira o nome"
                    onChange={e => handleNomeChange(index)(e)}
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
                Inserir outro nome
              </button>
              <div className="button-add">
                <button type="submit" className="button-add-name">Confirmar Venda</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VendaForm;
