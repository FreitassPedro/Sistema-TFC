package com.pedro.tfc.controller;


import com.pedro.tfc.entity.dao.DTOs.PedidoDTO;
import com.pedro.tfc.entity.Ingresso;
import com.pedro.tfc.entity.Transacao;
import com.pedro.tfc.service.TransacaoService;
import com.pedro.tfc.service.IngressoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/comprar")
@CrossOrigin(origins = "*")
public class CompraController {

    @Autowired
    private TransacaoService transacaoService;
    @Autowired
    private IngressoService ingressoService;

    @PostMapping
    public ResponseEntity<Transacao> gerarPedido(@RequestBody PedidoDTO pedidoDTO) {
        log.info("Processando Pedido...");

        //PedidoDTO pedidoDTO = gerarPedidoTeste();
        log.info("Pedido recebido: " + pedidoDTO);
        if (pedidoDTO.valorPago() % pedidoDTO.valorIngresso() != 0) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

        Transacao transacao = transacaoService.criarTransacao(pedidoDTO);
        transacao.setInstagramComprovante(transacaoService.tratarNomeComprovante(pedidoDTO.instagramComprovante()));

        List<Ingresso> ingressosGerados = ingressoService.gerarIngressos(pedidoDTO.valorPago(), pedidoDTO.valorIngresso());
        ingressoService.associarIngressoATransacao(ingressosGerados, transacao);
        transacaoService.definirNomeNoIngresso(pedidoDTO.nomes(), ingressosGerados);

        transacao.setQuantiaIngressos(ingressosGerados.size());

        transacaoService.salvarTransacao(transacao);

        return ResponseEntity.status(HttpStatus.CREATED).body(transacao);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarTransacao(@PathVariable int id) {
        transacaoService.deletarTransacao(id);
        return ResponseEntity.noContent().build();
    }
}
