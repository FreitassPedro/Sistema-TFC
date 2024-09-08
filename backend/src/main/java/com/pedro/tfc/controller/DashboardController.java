package com.pedro.tfc.controller;

import com.pedro.tfc.entity.dao.ClienteListaDTO;
import com.pedro.tfc.service.CompraService;
import com.pedro.tfc.service.IngressoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    @Autowired
    private IngressoService ingressoService;
    @Autowired
    private CompraService compraService;

    @GetMapping("/listar")
    public ResponseEntity<List<ClienteListaDTO>> listarClientes() {
        List<ClienteListaDTO> clientes = compraService.listarClientes();
        return ResponseEntity.ok(clientes);
    }
}
