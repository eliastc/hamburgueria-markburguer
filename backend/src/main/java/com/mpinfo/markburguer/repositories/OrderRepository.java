package com.mpinfo.markburguer.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mpinfo.markburguer.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
