package com.mpinfo.markburguer.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mpinfo.markburguer.dto.OrderDTO;
import com.mpinfo.markburguer.entities.Order;
import com.mpinfo.markburguer.repositories.OrderRepository;

@Service
public class OrderService {
	
	@Autowired
	private OrderRepository repository;

	@Transactional(readOnly = true)
	public List<OrderDTO> findAll() {
		List<Order> list = repository.findOrdersWithProductsIgnoreCase();
		return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
	}
}
