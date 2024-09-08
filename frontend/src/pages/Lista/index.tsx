import NavBar from "components/NavBar";
import DataTable from "components/DataTable";

const Lista = () => {
  return (
    <>
      <NavBar />

      <div className="py-3">
        <h2>Todas Vendas</h2>
        <DataTable />
      </div>
    </>
  );
};

export default Lista;
