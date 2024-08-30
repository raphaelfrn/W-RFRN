package com.wrfrn.wakfu.controllers;

import com.wrfrn.wakfu.dto.ItemDTO;
import com.wrfrn.wakfu.entities.Item;
import com.wrfrn.wakfu.services.ItemService;
import com.wrfrn.wakfu.utils.GenericConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/items")
public class ItemController {

    @Autowired
    private ItemService itemService;

    @GetMapping
    public List<ItemDTO> getAllItems() {
        return GenericConverter.map(itemService.findAll(), ItemDTO.class);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ItemDTO> getItemById(@PathVariable Integer id) {
        return itemService.findById(id)
                .map(item -> ResponseEntity.ok(GenericConverter.map(item, ItemDTO.class)))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<ItemDTO> createItem(@RequestBody ItemDTO itemDTO) {
        Item item = GenericConverter.map(itemDTO, Item.class);
        Item savedItem = itemService.save(item);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(GenericConverter.map(savedItem, ItemDTO.class));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ItemDTO> updateItem(@PathVariable Integer id, @RequestBody ItemDTO itemDTO) {
        if (itemService.findById(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        Item item = GenericConverter.map(itemDTO, Item.class);
        item.setItemId(id);
        Item updatedItem = itemService.save(item);
        return ResponseEntity.ok(GenericConverter.map(updatedItem, ItemDTO.class));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteItem(@PathVariable Integer id) {
        if (itemService.findById(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        itemService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
