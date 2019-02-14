package com.main.test;

import static org.junit.Assert.*;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

import com.main.java.Calculator;

public class CalculatorTest {

	@BeforeClass
	public static void setUpBeforeClass() throws Exception {
	}

	@AfterClass
	public static void tearDownAfterClass() throws Exception {
	}

	private Calculator c;
	@Before
	public void setUp() throws Exception {
		c=new Calculator();
	}

	@After
	public void tearDown() throws Exception {
		c=null;
	}

	@Test
	public void testAdd() {
		int i=c.add(5, 9);
		assert i>8 : "value should not be greater than 8";
	}

	@Test
	public void testSub() {
		int i=c.sub(5, 9);
		assert i>8 : "value should not be greater than 8";
	}

	@Test
	public void testMult() {
		int i=c.mult(5, 9);
		assert i>8 : "value should not be greater than 8";
	}

}
