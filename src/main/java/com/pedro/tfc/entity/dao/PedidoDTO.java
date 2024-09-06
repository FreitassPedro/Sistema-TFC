package com.pedro.tfc.entity.dao;

import java.util.List;

public record PedidoDTO(int valorPago, int valorIngresso, List<String> nomes, String instagramComprovante) {}
