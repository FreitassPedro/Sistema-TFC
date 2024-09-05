package com.pedro.tfc.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "tb_ticket")
public class Ticket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "copos_disponiveis")
    private int coposDisponiveis = 3;

    @ManyToOne
    @JoinColumn(name = "compra_id") // Mapeia o relacionamento inverso ManyToOne com Compra
    private Compra compra;

}
