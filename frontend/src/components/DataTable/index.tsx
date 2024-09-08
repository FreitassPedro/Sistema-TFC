import "./styles.css";

interface IngressoData {
    id: number;
    nome: string;
    codigoConsumivel: string;
    valor: number;
}

interface DataTableProps {
    data: IngressoData[];
}

const DataTable: React.FC<DataTableProps> = ({data}) => {
  
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