package com.pedro.tfc.controller;


import com.pedro.tfc.entity.dao.PedidoDTO;
import com.pedro.tfc.entity.Ingresso;
import com.pedro.tfc.entity.Transacao;
import com.pedro.tfc.service.CompraService;
import com.pedro.tfc.service.IngressoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/comprar")
public class CompraController {

    @Autowired
    private CompraService compraService;
    @Autowired
    private IngressoService ingressoService;

    @GetMapping
    public ResponseEntity<Transacao> gerarPedido() {
        log.info("Processando Pedido...");

        PedidoDTO pedidoDTO = gerarPedidoTeste();
        if (pedidoDTO.valorPago() % pedidoDTO.valorIngresso() != 0) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

        Transacao transacao = compraService.criarTransacao(pedidoDTO);


        List<Ingresso> ingressosGerados = ingressoService.gerarIngressos(pedidoDTO.valorPago(), pedidoDTO.valorIngresso());
        ingressoService.associarIngressoATransacao(ingressosGerados, transacao);
        compraService.definirDonoIngresso(pedidoDTO.nomes(), ingressosGerados);


        transacao.setIngresso(ingressosGerados);
        transacao.setQuantiaIngressos(ingressosGerados.size());

        compraService.salvarTransacao(transacao);

        return ResponseEntity.status(HttpStatus.CREATED).body(transacao);
    }

    private PedidoDTO gerarPedidoTeste() {
        int valorPago = 100;
        int valorIngresso = 50;
        String instagramComprovante = "@...";
        List<String> nomes = new ArrayList<>();
        nomes.add("Pedro");
        nomes.add("Fabuloso");

        PedidoDTO pedidoDTO = new PedidoDTO(valorPago, valorIngresso, nomes, instagramComprovante);

        return pedidoDTO;
    }


}