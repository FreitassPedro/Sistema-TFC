package com.pedro.tfc.entity.dao;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public interface VendaSuccessByDay {

    LocalDate getDia();

    Integer getValorTotal();
    Integer getQuantidadeVendas();

    default String getDiaFormatado() {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM");
        return getDia().format(formatter);
    }
}
