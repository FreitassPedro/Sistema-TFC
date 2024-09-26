package com.pedro.tfc.service;

import com.pedro.tfc.entity.Ingresso;
import com.pedro.tfc.entity.Transacao;
import com.pedro.tfc.entity.dao.IngressoImpressoDTO;
import com.pedro.tfc.repository.IngressoRepository;
import jakarta.persistence.EntityNotFoundException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class IngressoService {

    @Autowired
    private IngressoRepository ingressoRepository;

    @Autowired
    private ModelMapper modelMapper;

    public List<Ingresso> gerarIngressos(int valorPago, int valorIngresso) {
        if (valorPago < valorIngresso) {
            throw new IllegalArgumentException("Valor pago é menor que o valor do ingresso");
        }

        int quantiaIngressos = valorPago / valorIngresso;

        return gerarListaIngressos(quantiaIngressos, valorIngresso);
    }



    private List<Ingresso> gerarListaIngressos(int quantiaIngressos, int valorIngresso) {
        List<Ingresso> ingressos = new ArrayList<>();
        for (int i = 0; i < quantiaIngressos; i++) {
            Ingresso ingresso = new Ingresso(valorIngresso);
            ingressos.add(ingresso);
        }
        return ingressos;
    }

    public void associarIngressoATransacao(List<Ingresso> ingressosGerados, Transacao transacao) {
        ingressosGerados.forEach(ingresso -> ingresso.setTransacao(transacao));

        for (Ingresso ingresso : ingressosGerados) {
            transacao.adicionarIngresso(ingresso);
        }

        ingressoRepository.saveAll(ingressosGerados);
    }

    public List<IngressoImpressoDTO> encontrarIngressosPorTransacaoID(int transacaoId) {
        return ingressoRepository.listarIngressosImpressos(transacaoId);
    }

    public IngressoImpressoDTO findIngressoByCodigoConsumivelDTO(String codigoConsumivel) {
        return ingressoRepository.findByCodigoConsumivelDTO(codigoConsumivel);
    }

    public Ingresso findIngressoByCodigoConsumivel(String codigoConsumivel) {
        Ingresso byCodigoConsumivel = ingressoRepository.findByCodigoConsumivel(codigoConsumivel);
        if (byCodigoConsumivel == null) {
            throw new EntityNotFoundException("Ingresso não encontrado");
        }
        return byCodigoConsumivel;
    }

    public void consumirIngresso(Ingresso ingresso) {
        ingresso.setHorarioEntrada(LocalDateTime.now());
        ingresso.setCoposDisponiveis(3);
        ingresso.setIsConsumido(true);
        ingressoRepository.saveAndFlush(ingresso);
    }
}
