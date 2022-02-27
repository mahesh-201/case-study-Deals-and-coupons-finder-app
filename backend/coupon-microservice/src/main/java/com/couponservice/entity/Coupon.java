package com.couponservice.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document("Coupon")
public class Coupon {
	@Id
	private String coupon;
	@Field
	private String category;
	@Field
	private int price;
	@Field
	private String offer;
	@Field
	private String companyName;
	@Field
	private String img;

	
	
	
	public String getCoupon() {
		return coupon;
	}




	public void setCoupon(String coupon) {
		this.coupon = coupon;
	}




	public String getCategory() {
		return category;
	}




	public void setCategory(String category) {
		this.category = category;
	}




	public int getPrice() {
		return price;
	}




	public void setPrice(int price) {
		this.price = price;
	}




	public String getOffer() {
		return offer;
	}




	public void setOffer(String offer) {
		this.offer = offer;
	}




	public String getCompanyName() {
		return companyName;
	}




	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}




	public String getImg() {
		return img;
	}




	public void setImg(String img) {
		this.img = img;
	}




	




	public Coupon(String coupon, String category, int price, String offer, String companyName, String img) {
		super();
		this.coupon = coupon;
		this.category = category;
		this.price = price;
		this.offer = offer;
		this.companyName = companyName;
		this.img = img;
	}




	@Override
	public String toString() {
		return "Coupon [coupon=" + coupon+ ", category=" + category + ", price=" + price + ", offer=" + offer
				+ ", companyName=" + companyName + "]";
	}
	
}
