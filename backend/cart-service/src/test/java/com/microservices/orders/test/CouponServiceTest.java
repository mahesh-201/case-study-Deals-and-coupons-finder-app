package com.microservices.orders.test;


import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.kafka.KafkaProperties.Admin;
import org.springframework.boot.test.context.SpringBootTest;

import com.microservices.orders.entity.Order;
import com.microservices.orders.repositories.OrderRepository;
import com.microservices.orders.services.OrderService;



@SpringBootTest
public class CouponServiceTest {

	@Autowired
	private OrderService OrderService;
	
	
	@Autowired
	private OrderRepository orderRepository;
	
	
	
	
/*	
   @Test
	public void saveTest() {
	   @Test
		public void viewAllCompaniesTest() {
			when(orderRepository.findAll()).thenReturn(Stream
					.of(new Order("123","456","productOrders":[],"online",5000,"1367","09/12/2021"),new Order("36", "Danile","food ,", "Ucbjhbjbxc")).collect(Collectors.toList()));
			assertEquals(2, OrderService.getAllCompany().size());
		}

		

		@Test
		public void addNewCompanyTest() {
			Admin admin = new Admin("376", "Danile","food ,", "Ucbjhbjbxc");
			when(repo.save(admin)).thenReturn(admin);
			assertEquals(admin, service.addCompany(admin));
		}

		@Test
		public void deletedCompanyTest() {
			Admin admin = new Admin("376", "Danile","food ,", "Ucbjhbjbxc");
			service.deleteCompany(id);
			verify(repo, times(1)).delete(admin);
		}
		
	   
}*/
}
