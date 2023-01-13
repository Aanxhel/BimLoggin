package com.bim.springboot.backend.webapp.apirest.models.dao;

import org.springframework.data.repository.CrudRepository;

import com.bim.springboot.backend.webapp.apirest.models.entity.UsersEntity;

public interface IUserDao extends CrudRepository<UsersEntity, Long>{

}
