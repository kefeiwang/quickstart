package com.surfilter.flood.maintain.service.account;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.springside.modules.persistence.DynamicSpecifications;
import org.springside.modules.persistence.SearchFilter;

import com.surfilter.flood.maintain.entity.Menu;
import com.surfilter.flood.maintain.repository.MenuDao;
import com.surfilter.flood.maintain.service.ServiceException;
import com.surfilter.flood.maintain.vo.TreeNode;

@Component
@Transactional
public class MenuService {
	
	private MenuDao menuDao;

	@Autowired
	public void setMenuDao(MenuDao menuDao) {
		this.menuDao = menuDao;
	}
	
	public List<Menu> getAllMenu(Map<String, Object> searchParams, Sort sort){
		Specification<Menu> spec = buildSpecification(searchParams);
		return menuDao.findAll(spec, sort);
	}
	
	public Page<Menu> getEntityList(Map<String, Object> searchParams,PageRequest pageRequest) throws ServiceException{
		Specification<Menu> spec = buildSpecification(searchParams);
		Page<Menu> rows = menuDao.findAll(spec,pageRequest);
		return rows;
	}
	
	/**
	 * 创建动态查询条件组合.
	 */
	private Specification<Menu> buildSpecification(Map<String, Object> searchParams) {
		Map<String, SearchFilter> filters = SearchFilter.parse(searchParams);
//		filters.put("user.id", new SearchFilter("user.id", Operator.EQ, userId));
		Specification<Menu> spec = DynamicSpecifications.bySearchFilter(filters.values(), Menu.class);
		return spec;
	}
	
	/**
	 * 拿到的menus是按照  showIndex 的升序排列
	 * @param menus
	 * @return
	 */
	public List<TreeNode> getTree(List<Menu> menus){
		List<TreeNode> treeNodes = new ArrayList<TreeNode>();//一级树总树
		for(Menu menu : menus){
			if(menu.getRenderLevel() == 0){//第一级菜单
				TreeNode treeNode = new TreeNode();
				treeNode.setText(menu.getName());
				treeNode.setId(menu.getPageCmpUrl());
				treeNode.setExpanded(true);
				treeNode.setIconCls(menu.getIconCls());
				treeNode.setLeaf(false);
				
				List<TreeNode> treeNodes1 = new ArrayList<TreeNode>();//二级树
				for(Menu menu1 : menus){//再次遍历menus
					if(menu1.getRenderLevel() == 1 && menu1.getParentMenu().equals(menu)){//找到他的子节点,如果是子节点
						TreeNode treeNode1 = new TreeNode();//就添加到这个树节点下
						treeNode1.setText(menu1.getName());
						treeNode1.setId(menu1.getPageCmpUrl());
						treeNode1.setExpanded(true);
						treeNode1.setIconCls(menu1.getIconCls());
						treeNode1.setLeaf(true);
						
						List<TreeNode> treeNodes2 = new ArrayList<TreeNode>();//三级树
						for(Menu menu2 : menus){//再次遍历menus
							if(menu2.getRenderLevel() == 2 && menu2.getParentMenu().equals(menu1)){//找到他的子节点,如果是子节点
								TreeNode treeNode2 = new TreeNode();//就添加到这个树节点下
								treeNode2.setText(menu2.getName());
								treeNode2.setId(menu2.getPageCmpUrl());
								treeNode2.setExpanded(true);
								treeNode2.setIconCls(menu2.getIconCls());
								treeNode2.setLeaf(true);
								treeNodes2.add(treeNode2);
							}
						}
						treeNode1.setChildren(treeNodes2);//设置第二级树的子树
						treeNodes1.add(treeNode1);
					}
				}
				treeNode.setChildren(treeNodes1);//设置第一级树的子树
				treeNodes.add(treeNode);
				
			}
		}
		return treeNodes;
		
	}
	
		
		
		
	
	

}
