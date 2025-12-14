package br.edu.ufop.web.sales.infrastructure.repositories;

import br.edu.ufop.web.sales.infrastructure.entities.SaleEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public class ISaleRepository extends JpaRepository<SaleEntity, UUID> {
}
