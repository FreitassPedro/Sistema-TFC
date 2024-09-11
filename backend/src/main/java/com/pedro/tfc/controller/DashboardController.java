package com.pedro.tfc.controller;

import com.pedro.tfc.entity.dao.VendaAdminDTO;
import com.pedro.tfc.entity.dao.VendaDTO;
import com.pedro.tfc.service.CompraService;
import com.pedro.tfc.service.IngressoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin(origins = "*")
public class DashboardController {

    @Autowired
    private IngressoService ingressoService;
    @Autowired
    private CompraService compraService;

    @GetMapping("/listar")
    public ResponseEntity<List<VendaDTO>> listarClientes() {
        List<VendaDTO> clientes = compraService.listarIngressos();
        return ResponseEntity.ok(clientes);
    }

    @GetMapping("/listar/admin")
    public ResponseEntity<List<VendaAdminDTO>> listarAdmin() {
        List<VendaAdminDTO> vendas = compraService.listarVendasAdmin();
        return ResponseEntity.ok(vendas);
    }
}
