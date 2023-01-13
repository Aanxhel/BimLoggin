package com.bim.springboot.backend.webapp.apirest.models.services;

import java.util.List;

import com.bim.springboot.backend.webapp.apirest.models.entity.UsersEntity;

public interface IUserService {

	public List<UsersEntity> findAll();
}
