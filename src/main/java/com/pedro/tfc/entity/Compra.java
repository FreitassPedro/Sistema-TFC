package com.pedro.tfc.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.List;

@Entity
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

}
