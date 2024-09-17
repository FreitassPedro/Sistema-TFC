package com.pedro.tfc.controller;

import com.pedro.tfc.entity.dao.VendaAdminDTO;
import com.pedro.tfc.entity.dao.VendaDTO;
import com.pedro.tfc.entity.dao.DTOs.VendaSuccessByDayDTO;
import com.pedro.tfc.service.TransacaoService;
import com.pedro.tfc.service.IngressoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin(origins = "*")
public class DashboardController {

    @Autowired
    private IngressoService ingressoService;
    @Autowired
    private TransacaoService transacaoService;

    @GetMapping("/listar")
    public ResponseEntity<List<VendaDTO>> listarClientes() {
        List<VendaDTO> clientes = transacaoService.listarIngressos();
        return ResponseEntity.ok(clientes);
    }

    @GetMapping("/listar/admin")
    public ResponseEntity<List<VendaAdminDTO>> listarAdmin() {
        List<VendaAdminDTO> vendas = transacaoService.listarVendasAdmin();
        return ResponseEntity.ok(vendas);
    }

    @GetMapping("/admin/success-by-day")
    public ResponseEntity<List<VendaSuccessByDayDTO>> listarVendasPorDia() {

        List<VendaSuccessByDayDTO> vendaSuccessByDayDTOList = transacaoService.contarVendasPorDia();
        return ResponseEntity.ok(vendaSuccessByDayDTOList);
    }
}
