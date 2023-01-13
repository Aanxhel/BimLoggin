package com.bim.springboot.backend.webapp.apirest.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bim.springboot.backend.webapp.apirest.models.entity.UsersEntity;
import com.bim.springboot.backend.webapp.apirest.models.services.IUserService;

@RestController
@RequestMapping("/api")
public class UserClientController {
	
	@Autowired
	private IUserService userService;
	
	@GetMapping("/users")
	public List<UsersEntity> index(){
		return userService.findAll();
		
	}

}
