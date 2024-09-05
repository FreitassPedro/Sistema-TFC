package com.pedro.tfc.service;

import com.pedro.tfc.dao.Pedido;
import com.pedro.tfc.entity.Compra;
import com.pedro.tfc.entity.Ticket;
import com.pedro.tfc.repository.CompraRepository;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
@Slf4j
public class CompraService {

    @Autowired
    private CompraRepository compraRepository;

    public Ticket gerarPedido(Pedido pedido) {

        Ticket ticket = gerarTicket();
        log.info(ticket.toString());

        return ticket;
    }

    public Ticket gerarTicket() {

        Ticket ticket = new Ticket();
        ticket.setCodigoConsumivel(this.gerarCodigoConsumivel());
        ticket.setCoposDisponiveis(3);
        ticket.setCompra(new Compra());

        return ticket;
    }

    private String gerarCodigoConsumivel() {
        String caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        Random random = new Random();

        StringBuilder codigo = new StringBuilder();
        for (int i = 0; i < 6; i++) {
            codigo.append(caracteres.charAt(random.nextInt(caracteres.length())));
        }
        return codigo.toString();

    }
}
