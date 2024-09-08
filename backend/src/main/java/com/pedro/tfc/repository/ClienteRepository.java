package com.pedro.tfc.repository;

import com.pedro.tfc.entity.Cliente;
import com.pedro.tfc.entity.dao.ClienteListaDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ClienteRepository  extends JpaRepository<Cliente, Integer> {

    @Query("SELECT ing.id as id, c.nome as nome, ing.codigoConsumivel as codigoConsumivel, ing.valor as valor " +
            "FROM Ingresso ing " +
            "INNER JOIN Cliente c ON c.id = ing.cliente.id " +
            "ORDER BY ing.id")
    List<ClienteListaDTO> listarClientesComIngresso();
}
