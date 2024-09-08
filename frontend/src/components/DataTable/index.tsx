import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "utils/requests";

import "./styles.css";

interface IngressoData {
    id: number;
    nome: string;
    codigoConsumivel: string;
    valor: number;
}
const DataTable = () => {
  const [data, setData] = useState<IngressoData[]>([]);
  useEffect(() => {
    axios.get(`${BASE_URL}/api/dashboard/listar`).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Código Ingresso</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
            {data.map((item) => (
                <tr key={item.id}>
                <td style={{width: '20px'}}>{item.id}</td>
                <td style={{width: '60%'}}>{item.nome}</td>
                <td>{item.codigoConsumivel}</td>
                <td>R$ {item.valor}</td>
                </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;