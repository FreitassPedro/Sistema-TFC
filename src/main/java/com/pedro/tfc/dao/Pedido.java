package com.pedro.tfc.dao;

import java.util.List;

public record Pedido(int valorPago, int valorIngresso, List<String> nomes, String instagramComprovante) {}
