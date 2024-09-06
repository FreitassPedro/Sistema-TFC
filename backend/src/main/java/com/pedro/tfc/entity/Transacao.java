package com.pedro.tfc.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
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


    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime dataTransacao = LocalDateTime.now();

    @Column(name = "instagram_comprovante")
    private String instagramComprovante;

    public void addTicket(Ingresso ingresso) {
        if (this.ingresso == null) {
            this.ingresso = new ArrayList<>();
        }
        this.ingresso.add(ingresso);
    }
}
