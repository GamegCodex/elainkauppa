package com.example.demo.controller;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Food {
	 
	@Id
	private int id;
	@GeneratedValue(strategy=GenerationType.AUTO)
	private String desc;
	
	private float price;
	
	private int inventory;
	
	//private int imgid;

	public Food() {
	}
	
	public Food(int id, String desc, float price, int inventory) {//, int imgid) {
		this.id = id;
		this.desc = desc;
		this.price = price;
		this.inventory = inventory;
		//this.imgid = imgid;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}


	public String getDesc() {
		return desc;
	}


	public void setDesc(String desc) {
		this.desc = desc;
	}


	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public int getInventory() {
		return inventory;
	}

	public void setInventory(int inventory) {
		this.inventory = inventory;
	}
	/*
	public int getImgid() {
		return imgid;
	}

	public void setImgid(int imgid) {
		this.imgid = imgid;
	}
	*/
	

	@Override
	public String toString() {
		return "Food [desc=" + desc + ", price=" + price + "]";
	}

}
