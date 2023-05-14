package com.MMportfolio.MM.Repocitory;

import com.MMportfolio.MM.Entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface IPersonaRepository extends JpaRepository<Persona,Long> {
    
}