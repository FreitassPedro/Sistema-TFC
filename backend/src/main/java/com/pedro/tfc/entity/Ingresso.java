package com.pedro.tfc.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Random;

@Entity
@Data
@AllArgsConstructor
@Table(name = "tb_ingresso")
public class Ingresso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "codigo_consumivel", nullable = false)
    private String codigoConsumivel = gerarCodigoConsumivel();

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

    public Ingresso(int valor) {
        this.valor = valor;
    }

    private String gerarCodigoConsumivel() {
        String caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        Random random = new Random();

        StringBuilder codigo = new StringBuilder();
        for (int i = 0; i < 8; i++) {
            codigo.append(caracteres.charAt(random.nextInt(caracteres.length())));
        }
        return codigo.toString();
    }

}
