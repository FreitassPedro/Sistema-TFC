package com.pedro.tfc.entity.dao;

import java.time.LocalDate;
import java.time.LocalDateTime;

public interface VendaAdminDTO {

    /*
    @Query("SELECT i.id as id, t.dataTransacao as data, i.valor as valor, c.nome as nome, t.instagramComprovante as comprovante, i.codigoConsumivel as codigoConsumivel " +
            "FROM Ingresso i " +
            "INNER JOIN Transacao t ON i.transacao.id = t.id " +
            "INNER JOIN Cliente c ON i.cliente.id = c.id " +
            "ORDER BY t.dataTransacao")
     */
    Integer getId();
    LocalDate getData();
    Integer getValor();
    String getNome();
    String getComprovante();
    String getCodigoConsumivel();
}
