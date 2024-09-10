import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "utils/requests";
import NavBar from "components/NavBar"; // Importe seu componente NavBar
import SearchBar from "components/SearchBar";
import DataTable from "components/DataTable";

import "./styles.css";
import VendaForm from "components/VendaForm";

interface ItemData {
  id: number;
  nome: string;
  codigoConsumivel: string;
  valor: number;
}

const Lista: React.FC = () => {
  const [data, setData] = useState<ItemData[]>([]);
  const [filteredData, setFilteredData] = useState<ItemData[]>([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/dashboard/listar`).then((response) => {
      setData(response.data);
      setFilteredData(response.data); // Inicialmente, mostra todos os dados
      console.log(response.data);
    });
  }, []);

  const handleSearch = (searchTerm: string) => {
    const filtered = data.filter(item =>
      item.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <>
      <NavBar />

      <VendaForm />
      <div className="p-3">
        <h2>Todas Vendas</h2>
        <SearchBar onSearch={handleSearch} /> 
        <DataTable data={filteredData} /> 
      </div>
    </>
  );
};

export default Lista;