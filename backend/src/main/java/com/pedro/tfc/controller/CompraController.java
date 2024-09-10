package com.pedro.tfc.controller;


import com.pedro.tfc.entity.dao.ClienteListaDTO;
import com.pedro.tfc.entity.dao.PedidoDTO;
import com.pedro.tfc.entity.Ingresso;
import com.pedro.tfc.entity.Transacao;
import com.pedro.tfc.service.CompraService;
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
    private CompraService compraService;
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
        int valorPago = 300;
        int valorIngresso = 50;
        String instagramComprovante = "@...";
        List<String> nomes = new ArrayList<>();
        nomes.add("Pedro");
        nomes.add("Fabuloso");
        nomes.add("Cristiano Ronaldo Jr.");
        nomes.add("Messi Felipe Neto");
        nomes.add("Neymar da Silva Santos Júnior");
        nomes.add("Zé Pequeno da Rocinha");

        PedidoDTO pedidoDTO = new PedidoDTO(valorPago, valorIngresso, nomes, instagramComprovante);

        return pedidoDTO;
    }


}
