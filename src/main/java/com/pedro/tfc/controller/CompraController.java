package com.pedro.tfc.controller;


import com.pedro.tfc.dao.Pedido;
import com.pedro.tfc.entity.Cliente;
import com.pedro.tfc.entity.Compra;
import com.pedro.tfc.entity.Ticket;
import com.pedro.tfc.service.CompraService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;

@Slf4j
@RestController
@RequestMapping("/api/compra")
public class CompraController {

    @Autowired
    private CompraService compraService;

    @GetMapping
    public ResponseEntity<Compra> gerarPedido() {
        log.info("Gerando pedido");

        Pedido pedido = new Pedido(100);
        Compra compra = new Compra();

        compra.setValor(pedido.valor());
        compra.setCliente(new Cliente());

        compra.setDataCompra(LocalDateTime.now());
        Ticket ticket = compraService.gerarPedido(pedido);
        compra.addTicket(ticket);
        compra.setValor(pedido.valor());
        compra.setInstagramComprovante("@...");

        return ResponseEntity.status(HttpStatus.CREATED).body(compra);
    }


}
