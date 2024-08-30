package com.wrfrn.wakfu.controllers;

import com.wrfrn.wakfu.dto.EquipmentPageDTO;
import com.wrfrn.wakfu.entities.EquipmentPage;
import com.wrfrn.wakfu.services.EquipmentPageService;
import com.wrfrn.wakfu.utils.GenericConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/equipment-pages")
public class EquipmentPageController {

    @Autowired
    private EquipmentPageService equipmentPageService;

    @GetMapping
    public List<EquipmentPageDTO> getAllEquipmentPages() {
        return GenericConverter.map(equipmentPageService.findAll(), EquipmentPageDTO.class);
    }

    @GetMapping("/{id}")
    public ResponseEntity<EquipmentPageDTO> getEquipmentPageById(@PathVariable Integer id) {
        return equipmentPageService.findById(id)
                .map(equipmentPage -> ResponseEntity.ok(GenericConverter.map(equipmentPage, EquipmentPageDTO.class)))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<EquipmentPageDTO> createEquipmentPage(@RequestBody EquipmentPageDTO equipmentPageDTO) {
        EquipmentPage equipmentPage = GenericConverter.map(equipmentPageDTO, EquipmentPage.class);
        EquipmentPage savedEquipmentPage = equipmentPageService.save(equipmentPage);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(GenericConverter.map(savedEquipmentPage, EquipmentPageDTO.class));
    }

    @PutMapping("/{id}")
    public ResponseEntity<EquipmentPageDTO> updateEquipmentPage(@PathVariable Integer id, @RequestBody EquipmentPageDTO equipmentPageDTO) {
        if (equipmentPageService.findById(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        EquipmentPage equipmentPage = GenericConverter.map(equipmentPageDTO, EquipmentPage.class);
        equipmentPage.setEquipmentPageId(id);
        EquipmentPage updatedEquipmentPage = equipmentPageService.save(equipmentPage);
        return ResponseEntity.ok(GenericConverter.map(updatedEquipmentPage, EquipmentPageDTO.class));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEquipmentPage(@PathVariable Integer id) {
        if (equipmentPageService.findById(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        equipmentPageService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
