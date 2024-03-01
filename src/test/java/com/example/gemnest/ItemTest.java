package com.example.gemnest;

import com.example.gemnest.dto.ItemDTO;
import com.example.gemnest.entity.Item;
import com.example.gemnest.repository.ItemRepository;

import com.example.gemnest.service.Impl.ItemServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.any;
import static org.mockito.Mockito.when;

public class ItemTest {

    @InjectMocks
    private ItemServiceImpl itemService;

    @Mock
    private ItemRepository itemRepository;

    @BeforeEach
    public void init() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testSaveItem() {
        ItemDTO itemDTO = new ItemDTO();
        itemDTO.setProductName("TestProduct");
        itemDTO.setDescription("TestDescription");
        itemDTO.setPrice(10.0f);
        itemDTO.setCategory("TestCategory");
        itemDTO.setImageUrl("TestImageUrl");

        when(itemRepository.save(any(Item.class))).thenReturn(new Item());

        String result = itemService.save(itemDTO);

        assertEquals("Item saved successfully", result);
    }

}
