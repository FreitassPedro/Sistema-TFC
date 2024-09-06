package com.pedro.tfc.service;

import com.pedro.tfc.entity.Ingresso;
import com.pedro.tfc.entity.Transacao;
import com.pedro.tfc.repository.IngressoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
public class IngressoService {

    @Autowired
    private IngressoRepository ingressoRepository;


    public List<Ingresso> gerarIngressos(int valorPago, int valorIngresso) {
        if (valorPago < valorIngresso) {
            throw new IllegalArgumentException("Valor pago é menor que o valor do ingresso");
        }

        int quantiaIngressos = 0;
        while (valorIngresso <= valorPago) {
            valorPago -= valorIngresso;
            quantiaIngressos++;
        }

        return gerarListaIngressos(quantiaIngressos);
    }

    private String gerarCodigoConsumivel() {
        String caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        Random random = new Random();

        StringBuilder codigo = new StringBuilder();
        for (int i = 0; i < 6; i++) {
            codigo.append(caracteres.charAt(random.nextInt(caracteres.length())));
        }
        return codigo.toString();

    }

    private List<Ingresso> gerarListaIngressos(int quantiaIngressos) {
        List<Ingresso> ingressos = new ArrayList<>();
        for (int i = 0; i < quantiaIngressos; i++) {
            Ingresso ingresso = new Ingresso();
            ingresso.setCodigoConsumivel(gerarCodigoConsumivel());
            ingressos.add(ingresso);

        }
        return ingressos;
    }

    public void associarIngressoATransacao(List<Ingresso> ingressosGerados, Transacao transacao) {
        for (Ingresso ingresso : ingressosGerados) {
            ingresso.setTransacao(transacao);
        }
        ingressoRepository.saveAll(ingressosGerados);
    }
}
