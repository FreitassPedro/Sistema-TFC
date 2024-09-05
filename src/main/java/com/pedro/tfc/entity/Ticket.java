package com.pedro.tfc.entity;

import jakarta.persistence.*;

@Entity
public class Ticket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "copos_disponiveis")
    private int coposDisponiveis = 3;


}
