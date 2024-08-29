package com.wrfrn.wakfu.controllers;

import com.wrfrn.wakfu.entities.EquipmentPage;
import com.wrfrn.wakfu.services.EquipmentPageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/equipment-pages")
public class EquipmentPageController {

    @Autowired
    private EquipmentPageService equipmentPageService;

    @GetMapping
    public List<EquipmentPage> getAllEquipmentPages() {
        return equipmentPageService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<EquipmentPage> getEquipmentPageById(@PathVariable Integer id) {
        Optional<EquipmentPage> equipmentPage = equipmentPageService.findById(id);
        return equipmentPage.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<EquipmentPage> createEquipmentPage(@RequestBody EquipmentPage equipmentPage) {
        EquipmentPage savedEquipmentPage = equipmentPageService.save(equipmentPage);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedEquipmentPage);
    }

    @PutMapping("/{id}")
    public ResponseEntity<EquipmentPage> updateEquipmentPage(@PathVariable Integer id, @RequestBody EquipmentPage equipmentPage) {
        if (equipmentPageService.findById(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        equipmentPage.setEquipmentPageId(id);
        EquipmentPage updatedEquipmentPage = equipmentPageService.save(equipmentPage);
        return ResponseEntity.ok(updatedEquipmentPage);
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
