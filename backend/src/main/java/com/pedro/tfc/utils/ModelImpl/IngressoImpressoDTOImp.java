package com.pedro.tfc.utils.ModelImpl;

import com.pedro.tfc.entity.dao.IngressoImpressoDTO;

public class IngressoImpressoDTOImp implements IngressoImpressoDTO {
    private String codigoConsumivel;
    private int coposDisponiveis;
    private int id;
    private String nome;

    public IngressoImpressoDTOImp(String codigoConsumivel, int coposDisponiveis, int id, String nome) {
        this.codigoConsumivel = codigoConsumivel;
        this.coposDisponiveis = coposDisponiveis;
        this.id = id;
        this.nome = nome;
    }

    @Override
    public String getCodigoConsumivel() {
        return codigoConsumivel;
    }

    @Override
    public int getCoposDisponiveis() {
        return coposDisponiveis;
    }

    @Override
    public int getId() {
        return id;
    }

    @Override
    public String getNome() {
        return nome;
    }
}
