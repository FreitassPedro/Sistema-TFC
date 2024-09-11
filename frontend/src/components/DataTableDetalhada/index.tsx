import React from "react";
import { IngressoDataDetalhado } from "./types";

interface DataTableProps {
  data: IngressoDataDetalhado[];
}

const DataTableDetalhada: React.FC<DataTableProps> = ({ data }) => {
  return (
    <div className="table-responsive">
      <table className="table">

        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Código Ingresso</th>
            <th>Valor</th>
            <th>@ Comprovante</th>
            <th>Data (mes/dia)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td style={{ width: "20px" }}>{item.id}</td>
              <td style={{ width: "50%" }}>{item.nome}</td>
              <td>{item.codigoConsumivel}</td>
              <td>R$ {item.valor}</td>
              <td>{item.comprovante}</td>
              <td>{new Date(item.data).toISOString().slice(0, 10)}</td>
            </tr>
          ))}
          </tbody>        
      </table>
    </div>
  );
};

export default DataTableDetalhada;
