package com.pedro.tfc.controller;

import com.pedro.tfc.entity.dao.IngressoImpressoDTO;
import com.pedro.tfc.service.IngressoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/ingresso")
@CrossOrigin(origins = "*")
public class IngressoController {

    @Autowired
    private IngressoService ingressoService;

    @GetMapping("/id/{id}")
    public ResponseEntity<List<IngressoImpressoDTO>> encontrarIngressoPorTransacaoID(@PathVariable("id") int id) {
        List<IngressoImpressoDTO> ingressosLista = ingressoService.encontrarIngressosPorTransacaoID(id);

        return ResponseEntity.ok(ingressosLista);
    }

    @GetMapping("/code/{codigoConsumivel}")
    public ResponseEntity<IngressoImpressoDTO> encontrarIngressoPorCodigoConsumivel(@PathVariable("codigoConsumivel") String codigoConsumivel) {
        IngressoImpressoDTO ingresso = ingressoService.encontrarIngressoPorCodigoConsumivel(codigoConsumivel);

        return ResponseEntity.ok(ingresso);
    }
}
