package com.mpinfo.markburguer.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mpinfo.markburguer.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
	
	List<Product> findAllByOrderByNameAsc();

}
