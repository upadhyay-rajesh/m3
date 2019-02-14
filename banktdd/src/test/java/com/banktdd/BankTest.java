package com.banktdd;

import static org.junit.Assert.*;
import static org.mockito.Mockito.when;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)
public class BankTest {

	IBankAccount bainterface;
	
	@Mock
	IAccount sa;
	@Mock
	IAccount ca;
	
	@Before
	public void setUp() throws Exception {
		bainterface = new BankAccount(sa, ca);
	}

	@After
	public void tearDown() throws Exception {
		bainterface=null;
		sa=null;
		ca=null;
	}

	@Test
	public void test() {
		when(sa.getAmount(1050)).thenReturn(true);
		when(ca.getAmount(1060)).thenReturn(true);
		
		//assertTrue(coffeeMachine.makeCoffee(Portion.LARGE));
	}

}
