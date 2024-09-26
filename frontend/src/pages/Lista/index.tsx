import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "utils/requests";
import NavBar from "components/NavBar"; // Importe seu componente NavBar
import SearchBar from "components/SearchBar";
import DataTable from "components/DataTable";
import { useNavigate } from "react-router-dom";

import "./styles.css";
import VendaForm from "components/VendaForm";

import { IngressoData } from "components/DataTable/types";

const Lista: React.FC = () => {
  const [data, setData] = useState<IngressoData[]>([]);
  const [filteredData, setFilteredData] = useState<IngressoData[]>([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/dashboard/listar`)
      .then((response) => {
        setData(response.data);
        setFilteredData(response.data); // Inicialmente, mostra todos os dados
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

  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  const handleLerQRCode = () => {
    navigate("/ingresso/scan");
  };

  return (
    <>
      <NavBar />
      <div className="base-card home">
        <h1>Dashboard Vendas</h1>
        <div className="dashboard">
          <div>
            <VendaForm />
          </div>
          <div className="form-container">
            <button onClick={handleBackToHome} className="btn btn-secondary">
              Voltar página inicial
            </button>

            <button onClick={handleLerQRCode} className="btn btn-primary">
              Ler QR Code
            </button>
          </div>
        </div>
      </div>
      <div className="table-vendas">
        <h2>Todas Vendas</h2>
        <SearchBar onSearch={handleSearch} />
        <DataTable data={filteredData} />
      </div>
    </>
  );
};

export default Lista;
