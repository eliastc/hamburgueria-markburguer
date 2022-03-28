package com.mpinfo.markburguer.services;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mpinfo.markburguer.dto.OrderDTO;
import com.mpinfo.markburguer.dto.ProductDTO;
import com.mpinfo.markburguer.entities.Order;
import com.mpinfo.markburguer.entities.Product;
import com.mpinfo.markburguer.enums.OrderStatus;
import com.mpinfo.markburguer.repositories.OrderRepository;
import com.mpinfo.markburguer.repositories.ProductRepository;

@Service
public class OrderService {
	
	@Autowired
	private OrderRepository repository;
	
	@Autowired
	private ProductRepository productRepository;

	@Transactional(readOnly = true)
	public List<OrderDTO> findAll() {
		List<Order> list = repository.findOrdersWithProductsIgnoreCase();
		return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
	}
	
	@Transactional
	public OrderDTO insert(OrderDTO dto) {
		Order order = new Order(null, dto.getAddress(), dto.getLatitude(), dto.getLongitude(), 
				Instant.now(), OrderStatus.PENDING);
		for(ProductDTO p : dto.getProducts()) {
			Product product = productRepository.getById(p.getId());
			order.getProducts().add(product);
		}
		order = repository.save(order);
		return new OrderDTO(order);
	}
	
	@Transactional
	public OrderDTO setDelivered(Long id) {
		Order order = repository.getById(id);
		order.setStatus(OrderStatus.DELIVERED);
		order = repository.save(order);
		return new OrderDTO(order);		
	}
}
