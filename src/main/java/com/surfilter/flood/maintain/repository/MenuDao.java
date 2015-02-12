package com.surfilter.flood.maintain.repository;

import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.surfilter.flood.maintain.entity.Menu;

public interface MenuDao extends PagingAndSortingRepository<Menu, Long>,JpaSpecificationExecutor<Menu> {

}
