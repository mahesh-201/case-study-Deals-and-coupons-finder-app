package com.microservices.orders.services;

import java.util.List;
import java.util.Optional;


import com.microservices.orders.dtos.ResponseDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.microservices.orders.entity.Order;
import com.microservices.orders.exception.OrderRequestException;
import com.microservices.orders.repositories.OrderRepository;

@Service
@Slf4j
public class OrderServiceImp implements OrderService {

	private static final String String = null;
	@Autowired
	private OrderRepository orderRepository;
	
	public String addorder(  Order order ){
		orderRepository.insert( order );
		return ("Added Successfully");		
	}
	
	
    public List<Order> fetchAllOrders() {
		return  orderRepository.findAll();
    }
    
    @Override
	public String updateOrderDetails( Order order,  String id) {
		boolean isCartExist = orderRepository.existsById(id);
		if(isCartExist) {
			orderRepository.save(order);
			return "Update Cartdetails with id: "+id;
		}else {
			throw new OrderRequestException("CAN NOT update AS USER NOT FOUND WITH THIS ID ::");
		}
		
    }


	public ResponseEntity<Object> deleteById(String id)
	{
		boolean isUserExist=orderRepository.existsById(id);
		 if(isUserExist) {
			 orderRepository.deleteById(id);
			 return new ResponseEntity<Object>("user deleted with id "+id,HttpStatus.OK);
		 }
		 else
		 {
		 	throw new OrderRequestException("CAN NOT DELETE AS USER NOT FOUND WITH THIS ID ::");
		 }
	}


	
}
