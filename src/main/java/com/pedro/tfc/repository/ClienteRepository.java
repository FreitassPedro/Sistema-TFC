package com.pedro.tfc.repository;

import com.pedro.tfc.entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository  extends JpaRepository<Cliente, Integer> {
}
