package com.pedro.tfc.entity.dao;

import java.time.LocalDate;

public interface VendaSuccessByDay {

    LocalDate getData();
    Integer getValorTotal();
    Integer getQuantidadeVendas();

}
