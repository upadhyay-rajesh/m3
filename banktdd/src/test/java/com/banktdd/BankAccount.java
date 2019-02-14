package com.banktdd;

public class BankAccount implements IBankAccount {
	IAccount sa;
	IAccount ca;
	public BankAccount(IAccount sa,IAccount ca){
		this.sa=sa;
		this.ca=ca;
	}

	public int calculate(int i) {
		
		return 0;
	}

}
