package com.pedro.tfc.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
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
    @JsonManagedReference
    private List<Ingresso> ingresso;

    @Column(name = "quantia_ingressos")
    private int quantiaIngressos;


    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate dataTransacao = LocalDateTime.now().toLocalDate();

    @Column(name = "instagram_comprovante")
    private String instagramComprovante;

    public void adicionarIngresso(Ingresso ingresso) {
        if (this.ingresso == null) {
            this.ingresso = new ArrayList<>();
        }
        this.ingresso.add(ingresso);
    }
}
