package com.bim.springboot.backend.webapp.apirest.models.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bim.springboot.backend.webapp.apirest.models.dao.IUserDao;
import com.bim.springboot.backend.webapp.apirest.models.entity.UsersEntity;
import com.bim.springboot.backend.webapp.apirest.models.services.IUserService;

@Service
public class UserServiceImp implements IUserService {

	@Autowired
	private IUserDao userDao;
	
	
	@Override
	@Transactional(readOnly = true)
	public List<UsersEntity> findAll(){
		return null;
	}
}
