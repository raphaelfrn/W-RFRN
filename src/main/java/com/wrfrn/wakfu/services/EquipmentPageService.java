package com.wrfrn.wakfu.services;

import com.wrfrn.wakfu.entities.EquipmentPage;
import com.wrfrn.wakfu.repositories.EquipmentPageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EquipmentPageService {

    @Autowired
    private EquipmentPageRepository equipmentPageRepository;

    public List<EquipmentPage> findAll() {
        return equipmentPageRepository.findAll();
    }

    public Optional<EquipmentPage> findById(Integer id) {
        return equipmentPageRepository.findById(id);
    }

    public EquipmentPage save(EquipmentPage equipmentPage) {
        return equipmentPageRepository.save(equipmentPage);
    }

    public void deleteById(Integer id) {
        equipmentPageRepository.deleteById(id);
    }
}
