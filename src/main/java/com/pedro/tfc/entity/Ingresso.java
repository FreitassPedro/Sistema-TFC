package com.pedro.tfc.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "tb_ingresso")
public class Ingresso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "codigo_consumivel", nullable = false)
    private String codigoConsumivel;

    @Column(name = "copos_disponiveis")
    private int coposDisponiveis = 3;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "transacao_id") // Mapeia o relacionamento inverso ManyToOne com Compra
    private Transacao transacao;

    @OneToOne
    @JoinColumn(name = "cliente_id")
    private Cliente cliente;

}
