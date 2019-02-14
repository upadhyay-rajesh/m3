package com.tddtest.test;

import static org.junit.Assert.*;
import junit.framework.Assert;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

import com.tddtest.main.Calculator;

public class CalculatorTest {
	
	private CalculatorInterface cc;
	
	@BeforeClass
	public static void bb(){
		System.out.println("inside before class");
	}
	
	@AfterClass
	public static void bb1(){
		System.out.println("inside after class");
	}

	@Before
	public void setUp() throws Exception {
		System.out.println("inside setup");
		cc=new Calculator();
	}

	@After
	public void tearDown() throws Exception {
		System.out.println("inside teardown");
		cc=null;
	}

	@Test
	public void testAdd() {
		System.out.println("inside add");
		int i=cc.add(2,3);
		Assert.assertEquals(5, i);
	}
	
	@Test
	public void testSub() {
		System.out.println("inside sub");
		int i=cc.sub(2,3);
		Assert.assertEquals(-1, i);
	}
	
	@Test
	public void testMult() {
		System.out.println("inside mult");
		int i=cc.mult(2,3);
		Assert.assertEquals(6, i);
	}
	@Test
	public void testDiv() {
		System.out.println("inside div");
		int i=cc.div(2,3);
		Assert.assertEquals(0, i);
	}

}









