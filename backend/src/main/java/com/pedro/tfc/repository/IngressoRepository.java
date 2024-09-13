package com.pedro.tfc.repository;

import com.pedro.tfc.entity.Ingresso;
import com.pedro.tfc.entity.dao.VendaAdminDTO;
import com.pedro.tfc.entity.dao.VendaDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IngressoRepository extends JpaRepository<Ingresso, Integer> {

    @Query("SELECT i.id as id, t.dataTransacao as data, i.valor as valor, c.nome as nome, " +
            "t.instagramComprovante as comprovante, i.codigoConsumivel as codigoConsumivel, t.id as transacaoID " +
            "FROM Ingresso i " +
            "INNER JOIN Transacao t ON i.transacao.id = t.id " +
            "INNER JOIN Cliente c ON i.cliente.id = c.id " +
            "ORDER BY t.dataTransacao")
    List<VendaAdminDTO> listarVendasAdmin();

    @Query("SELECT ing.id as id, c.nome as nome, ing.codigoConsumivel as codigoConsumivel, ing.valor as valor " +
            "FROM Ingresso ing " +
            "INNER JOIN Cliente c ON c.id = ing.cliente.id " +
            "ORDER BY ing.id")
    List<VendaDTO> listarClientesComIngresso();
}
