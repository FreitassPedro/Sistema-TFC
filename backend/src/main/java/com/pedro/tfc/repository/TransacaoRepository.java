package com.pedro.tfc.repository;

import com.pedro.tfc.entity.Transacao;
import com.pedro.tfc.entity.dao.VendaSuccessByDay;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

public interface TransacaoRepository extends JpaRepository<Transacao, Integer> {

    @Query("SELECT Date(dataTransacao) as data, SUM(valor) AS valorTotal, COUNT(*) AS quantidadeVendas " +
            "FROM Transacao " +
            "WHERE MONTH(dataTransacao) = MONTH(CURRENT_DATE()) " +
            "AND YEAR(dataTransacao) = YEAR(CURRENT_DATE()) " +
            "GROUP BY DATE(dataTransacao)")
    List<VendaSuccessByDay> contarVendasPorDia();
}
