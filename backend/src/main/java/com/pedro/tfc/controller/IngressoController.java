package com.pedro.tfc.controller;

import com.pedro.tfc.entity.Ingresso;
import com.pedro.tfc.entity.dao.IngressoImpressoDTO;
import com.pedro.tfc.service.IngressoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
        IngressoImpressoDTO ingresso = ingressoService.findIngressoByCodigoConsumivelDTO(codigoConsumivel);

        if (ingresso == null) return ResponseEntity.notFound().build();

        return ResponseEntity.ok().body(ingresso);
    }

    @GetMapping("/gerarTeste")
    public ResponseEntity<Ingresso> gerarCodigoTeste() {
        Ingresso imp = new Ingresso(50);
        return ResponseEntity.ok(imp);
    }

    @PostMapping("/validar/{codigo}")
    public ResponseEntity<Void> validarCodigo (@PathVariable("codigo") String codigo) {
        log.info("Validando código de ingresso: " + codigo);

        Ingresso ingresso = ingressoService.findIngressoByCodigoConsumivel(codigo);

        if (ingresso.getIsConsumido()) return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();

        ingressoService.consumirIngresso(ingresso);
        log.info("Ingresso consumido com sucesso! " + ingresso.toString());


        return ResponseEntity.ok().build();
    }

}
