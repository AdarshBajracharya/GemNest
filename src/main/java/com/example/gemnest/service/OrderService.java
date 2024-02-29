package com.example.gemnest.service;

import com.example.gemnest.dto.OrderDTO;
import com.example.gemnest.dto.OrderHistoryDTO;
import com.example.gemnest.entity.Order;

import java.util.List;

public interface OrderService {
    void createOrder(Order order);
    List<Order> getAllOrders();
    List<OrderHistoryDTO> getOrderHistory();
}