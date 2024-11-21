package com.app.entity;


import javax.persistence.*;

@Entity
@Table(name = "nearby_blood_centers")
public class NearByBloodCenter {

	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    private String name;

	    private String address;

	    @Column(name = "state_id")
	    private Long stateId;

	    @Column(name = "city_id")
	    private Long cityId;

	    // Getters and Setters
	    public Long getId() {
	        return id;
	    }

	    public void setId(Long id) {
	        this.id = id;
	    }

	    public String getName() {
	        return name;
	    }

	    public void setName(String name) {
	        this.name = name;
	    }

	    public String getAddress() {
	        return address;
	    }

	    public void setAddress(String address) {
	        this.address = address;
	    }

	    public Long getStateId() {
	        return stateId;
	    }

	    public void setStateId(Long stateId) {
	        this.stateId = stateId;
	    }

	    public Long getCityId() {
	        return cityId;
	    }

	    public void setCityId(Long cityId) {
	        this.cityId = cityId;
	    }
}
