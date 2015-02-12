package com.surfilter.flood.maintain.web.account;

import java.util.List;
import java.util.Map;
import java.util.TreeMap;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.surfilter.flood.maintain.entity.Menu;
import com.surfilter.flood.maintain.service.account.MenuService;
import com.surfilter.flood.maintain.vo.TreeNode;

@Controller
@RequestMapping(value = "/menu")
public class MenuController {
	
	@Autowired
	private MenuService menuService;
	
	@RequestMapping("getMenu")
	@ResponseBody
	public List<TreeNode> getMenuList(HttpServletRequest request){
		Map<String, Object> searchParams = new TreeMap<String, Object>();
		Sort sort = new Sort(Direction.ASC, "showIndex");
		List<Menu> menus = menuService.getAllMenu(searchParams, sort);
		return menuService.getTree(menus);
	}

}
