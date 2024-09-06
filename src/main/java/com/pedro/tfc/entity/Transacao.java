package com.pedro.tfc.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Table(name = "tb_transacao")
public class Transacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "valor", nullable = false)
    private Integer valor;

    @OneToMany(mappedBy = "transacao")
    private List<Ingresso> ingresso;

    @Column(name = "quantia_ingressos")
    private int quantiaIngressos;

    @Column(name = "data_transacao", nullable = false)
    private LocalDateTime dataTransacao;

    @Column(name = "instagram_comprovante")
    private String instagramComprovante;

    public void addTicket(Ingresso ingresso) {
        if (this.ingresso == null) {
            this.ingresso = new ArrayList<>();
        }
        this.ingresso.add(ingresso);
    }
}
