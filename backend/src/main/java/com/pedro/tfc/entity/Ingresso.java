package com.pedro.tfc.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
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

    @Column(name = "valor")
    private Integer valor;

    @Column(name = "copos_disponiveis")
    private int coposDisponiveis = 3;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "transacao_id") // Mapeia o relacionamento inverso ManyToOne com Compra
    @JsonBackReference // Evita loop infinito
    private Transacao transacao;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "cliente_id")
    private Cliente cliente;

}
