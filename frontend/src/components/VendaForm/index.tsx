import React from "react";

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
    }
    const removerNome = (index: number) => {
        const novosNomes = [...nomes];
        novosNomes.splice(index, 1);
        setNomes(novosNomes);
    }
    
  return (
    <div className="form-container">
      <form action="#">
        <div className="title">Inserir Venda</div>
        <div className="login-button">
          <button type="submit">Inserir</button>
        </div>

        <div className="input-group">
          <div className="input-box">
            <label htmlFor="instagram">Insta @</label>
            <input
              id="instagram"
              name="instagram"
              type="text"
              placeholder="@"
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
              placeholder="Valor do ingresso"
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
                  Remover
                </button>
              )}
            </div>
          ))}

          <button type="button" onClick={adicionarNome}>
            Adicionar nome
          </button>
        </div>
      </form>
    </div>
  );
};

export default VendaForm;
