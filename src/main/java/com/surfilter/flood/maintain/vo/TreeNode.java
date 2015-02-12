/**
 * 
 */
package com.surfilter.flood.maintain.vo;

import java.util.ArrayList;
import java.util.List;

/**
 * 
 * @author liyi
 *
 */
public class TreeNode {

	private String text;
	private String id;
	private Boolean leaf;
	private boolean expanded;
	private Boolean checked;
	private String memo;
	private String iconCls;
	private List<TreeNode> children = new ArrayList<TreeNode>(0);
	
	public TreeNode(){}
	
	public TreeNode(String id,String text,Boolean leaf){
		this.id = id;
		this.text = text;
		this.leaf = leaf;
		this.expanded = true;
	}
	
	public TreeNode(String id,String text,Boolean leaf,String iconCls){
		this.id = id;
		this.text = text;
		this.leaf = leaf;
		this.expanded = true;
		this.iconCls = iconCls;
	}
	
	
	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Boolean getLeaf() {
		return leaf;
	}

	public void setLeaf(Boolean leaf) {
		this.leaf = leaf;
	}

	public boolean isExpanded() {
		return expanded;
	}

	public void setExpanded(boolean expanded) {
		this.expanded = expanded;
	}

	public List<TreeNode> getChildren() {
		return children;
	}

	public void setChildren(List<TreeNode> children) {
		this.children = children;
	}

	public Boolean getChecked() {
		return checked;
	}

	public void setChecked(Boolean checked) {
		this.checked = checked;
	}

	public String getIconCls() {
		return iconCls;
	}

	public void setIconCls(String iconCls) {
		this.iconCls = iconCls;
	}

	public String getMemo() {
		return memo;
	}

	public void setMemo(String memo) {
		this.memo = memo;
	}
	
	

}
