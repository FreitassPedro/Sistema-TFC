package com.pedro.tfc.entity.dao;

import java.time.LocalDate;
import java.time.LocalDateTime;

public interface VendaAdminDTO {

    Integer getId();
    LocalDate getData();
    Integer getValor();
    String getNome();
    String getComprovante();
    String getCodigoConsumivel();
    Integer getTransacaoID();
}
