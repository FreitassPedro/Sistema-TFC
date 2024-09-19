package com.pedro.tfc.controller;

import com.pedro.tfc.entity.dao.DTOs.IngressoImpressoDTO;
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

    @GetMapping("/{id}")
    public ResponseEntity<List<IngressoImpressoDTO>> encontrarIngressoPorTransacaoID(@PathVariable("id") int id) {
        List<IngressoImpressoDTO> ingressosLista = ingressoService.encontrarIngressosPorTransacaoID(id);

        return ResponseEntity.ok(ingressosLista);

    }
}
