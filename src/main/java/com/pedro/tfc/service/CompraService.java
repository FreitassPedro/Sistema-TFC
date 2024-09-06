package com.pedro.tfc.service;

import com.pedro.tfc.entity.dao.PedidoDTO;
import com.pedro.tfc.entity.Cliente;
import com.pedro.tfc.entity.Ingresso;
import com.pedro.tfc.entity.Transacao;
import com.pedro.tfc.repository.ClienteRepository;
import com.pedro.tfc.repository.IngressoRepository;
import com.pedro.tfc.repository.TransacaoRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@Slf4j
public class CompraService {

    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private IngressoRepository ingressoRepository;

    @Autowired
    private TransacaoRepository transacaoRepository;


    public void definirDonoIngresso(List<String> nomes, List<Ingresso> ingressosGerados) {
        if (nomes.size() != ingressosGerados.size() || nomes.isEmpty()) {
            throw new IllegalArgumentException("Quantidade de nomes diferente da quantidade de ingressos");
        }


        for (int i = 0; i < nomes.size(); i++) {
            Cliente cliente = new Cliente();
            cliente.setNome(nomes.get(i));
            ingressosGerados.get(i).setCliente(cliente);
            clienteRepository.save(cliente);
        }

        ingressoRepository.saveAll(ingressosGerados);
    }

    public void salvarTransacao(Transacao transacao) {
        transacaoRepository.saveAndFlush(transacao);
    }

    @Transactional
    public Transacao criarTransacao(PedidoDTO pedidoDTO) {
        Transacao transacao = new Transacao();

        transacao.setValor(pedidoDTO.valorPago());
        transacao.setInstagramComprovante(pedidoDTO.instagramComprovante());
        transacao.setQuantiaIngressos(pedidoDTO.nomes().size());

        transacaoRepository.save(transacao);

        return transacao;
    }
}