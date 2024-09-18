package com.pedro.tfc.entity.dao.DTOs;

import com.pedro.tfc.entity.dao.VendaSuccessByDay;

import java.time.format.DateTimeFormatter;

public record VendaSuccessByDayDTO(String dia, int valorTotal, int quantidadeVendas) {


    public VendaSuccessByDayDTO(VendaSuccessByDay vendaSuccessByDay) {
        this(vendaSuccessByDay.getDia().format(DateTimeFormatter.ofPattern("dd/MM")),
                vendaSuccessByDay.getValorTotal(),
                vendaSuccessByDay.getQuantidadeVendas());
    }




}
