package com.pedro.tfc.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Table(name = "tb_compra")
public class Compra {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "valor", nullable = false)
    private Integer valor;

    @OneToMany(mappedBy = "compra")
    private List<Ticket> ticket;

    @OneToOne
    @JoinColumn(name = "cliente_id")
    private Cliente cliente;

    @Column(name = "data_compra", nullable = false)
    private LocalDateTime dataCompra;

    @Column(name = "instagram_comprovante")
    private String instagramComprovante;

    public void addTicket(Ticket ticket) {
        if (this.ticket == null) {
            this.ticket = new ArrayList<>();
        }
        this.ticket.add(ticket);
    }
}
