package com.example.demo;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class OrderApplicationTests {

	private OrderService orderService;

	@Test
	public void testCreateOrder() {
		Order order = orderService.createOrder("Test Order", 100.0);
		assertNotNull(order.getId());
	}
	@Test
	public void testGetAllOrders(){
		orderService.createOrder("Test Order 1", 50.0);
		orderService.createOrder("Test Order 2", 150.0);
		assertEquals(2, orderService.getAllOrders().size());
	}
	@Test
	public void testTransactionRollback() {
		try {
			orderService.createOrder(null, null); // Должен вызвать исключение
		} catch (Exception e) {
			// Ожидаем исключение
		}
		assertEquals(0, orderService.getAllOrders().size()); // Должно быть 0, так как транзакция откатилась
	}
}
