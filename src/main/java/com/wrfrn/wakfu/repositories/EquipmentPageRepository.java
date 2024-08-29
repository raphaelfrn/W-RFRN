package com.wrfrn.wakfu.repositories;

import com.wrfrn.wakfu.entities.EquipmentPage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EquipmentPageRepository extends JpaRepository<EquipmentPage, Integer> {

}