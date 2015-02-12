package com.surfilter.flood.maintain.entity;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.validator.constraints.NotBlank;

@Entity
@Table(name = "ss_menu")
public class Menu extends IdEntity {
	
	/**
	 * 菜单名称
	 */
	@NotBlank
	private String name;
	
	/**
	 * 菜单url
	 */
	private String pageCmpUrl;

	/**
	 * 菜单级别
	 */
	@NotBlank
	private Integer renderLevel;
	/**
	 * 菜单索引
	 */
	@NotBlank
	private Integer showIndex;
	/**
	 * 父菜单
	 */
	private Menu parentMenu;
	/**
	 * 菜单图标
	 */
	private String iconCls;
	
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPageCmpUrl() {
		return pageCmpUrl;
	}
	public void setPageCmpUrl(String pageCmpUrl) {
		this.pageCmpUrl = pageCmpUrl;
	}
	public Integer getRenderLevel() {
		return renderLevel;
	}
	public void setRenderLevel(Integer renderLevel) {
		this.renderLevel = renderLevel;
	}
	public Integer getShowIndex() {
		return showIndex;
	}
	public void setShowIndex(Integer showIndex) {
		this.showIndex = showIndex;
	}
	
	@ManyToOne
	@JoinColumn(name = "parentMenu", nullable = true)
	public Menu getParentMenu() {
		return parentMenu;
	}
	public void setParentMenu(Menu parentMenu) {
		this.parentMenu = parentMenu;
	}
	public String getIconCls() {
		return iconCls;
	}
	public void setIconCls(String iconCls) {
		this.iconCls = iconCls;
	}
	

}
