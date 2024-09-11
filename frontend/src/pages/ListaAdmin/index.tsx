import DataTableDetalhada from "components/DataTableDetalhada";
import axios from "axios";
import NavBar from "components/NavBar";
import SearchBar from "components/SearchBar";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "utils/requests";
import { IngressoDataDetalhado } from "components/DataTableDetalhada/types";

import "./styles.css";

const ListaAdmin: React.FC = () => {
  const [data, setData] = useState<IngressoDataDetalhado[]>([]);
  const [filteredData, setFilteredData] = useState<IngressoDataDetalhado[]>([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/dashboard/listar/admin`)
      .then((response) => {
        setData(response.data);
        setFilteredData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSearch = (searchTerm: string) => {
    const filtered = data.filter((item) =>
      item.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <>
      <NavBar />
      <h1>Lista Admin</h1>
      <div className="vendas">
        <SearchBar onSearch={handleSearch} />
        <DataTableDetalhada data={filteredData} />
      </div>
    </>
  );
};

export default ListaAdmin;
