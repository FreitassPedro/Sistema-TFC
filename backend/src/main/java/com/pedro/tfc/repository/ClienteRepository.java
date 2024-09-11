package com.pedro.tfc.repository;

import com.pedro.tfc.entity.Cliente;
import com.pedro.tfc.entity.dao.VendaAdminDTO;
import com.pedro.tfc.entity.dao.VendaDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ClienteRepository  extends JpaRepository<Cliente, Integer> {
}
