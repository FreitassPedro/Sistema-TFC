import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "utils/requests";

const IngressoImpresso = () => {
    const { codigoConsumivel } = useParams();
    
    
    useEffect(() => {
        axios.get(`${BASE_URL}/api/ingresso/code/${codigoConsumivel}`)
        .then((response) => {
            console.log(response.data);
        });
    }, []);
    
    return (    
        <>
            <h1>Detalhes do Ingresso</h1>
            <p>Detalhes do ingresso: {codigoConsumivel}</p>
        </>
    );
};

export default IngressoImpresso;