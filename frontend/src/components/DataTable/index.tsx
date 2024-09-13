import React from 'react';
import { IngressoData } from './types';

interface DataTableProps {
    data: IngressoData[];
}

const DataTable: React.FC<DataTableProps> = ({data}) => {
  
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome registrado</th>
            <th>Código Ingresso</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
            {data.map((item) => (
                <tr key={item.id}>
                <td style={{width: '20px'}}>{item.id}</td>
                <td style={{width: '50%'}}>{item.nome}</td>
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