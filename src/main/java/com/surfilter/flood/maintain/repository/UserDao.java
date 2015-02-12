/*******************************************************************************
 * Copyright (c) 2005, 2014 springside.github.io
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 *******************************************************************************/
package com.surfilter.flood.maintain.repository;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.surfilter.flood.maintain.entity.User;

public interface UserDao extends JpaSpecificationExecutor<User>, PagingAndSortingRepository<User, Long> {
	User findByLoginName(String loginName);
}
