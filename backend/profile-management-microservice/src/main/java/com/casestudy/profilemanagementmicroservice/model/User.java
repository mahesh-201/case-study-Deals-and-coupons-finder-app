package com.casestudy.profilemanagementmicroservice.model;

import javax.annotation.processing.Generated;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="user")
public class User {

	  @Id
	    private int id;
	    private String userName;
	    private String password;
	    private boolean active;
	    private String roles;//ROLE_USER,ROLE_ADMIN
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public String getUserName() {
			return userName;
		}
		public void setUserName(String userName) {
			this.userName = userName;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public boolean isActive() {
			return active;
		}
		public void setActive(boolean active) {
			this.active = active;
		}
		public String getRoles() {
			return roles;
		}
		public void setRoles(String roles) {
			this.roles = roles;
		}
	    
	    
}
