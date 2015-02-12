/**
 * 
 */
package com.surfilter.flood.maintain.util;

import java.util.List;

/**
 * @author liyi
 *
 */
public class PageResult{
	private boolean success = false;
	
	private String msg = "That's a page result!";
	
	
	private long total;

	private List<? extends Object> rows;
	public PageResult(){
		
	}
	
	public PageResult (boolean success){
		this.success = success;
	}
	public PageResult (boolean success,String msg, List<? extends Object> rows){
		this(success,msg,rows,0);
	}
	public PageResult (boolean success, String msg, List<? extends Object> rows,int totalSize){
		this.success = success;
		this.msg = msg;
		this.rows = rows;
		this.total = totalSize;
	}
	public List<? extends Object> getRows() {
		return rows;
	}

	public void setRows(List<? extends Object> rows) {
		this.rows = rows;
	}
	public long getTotal() {
		return total;
	}
	public void setTotal(long total) {
		this.total = total;
	}
	public boolean isSuccess() {
		return success;
	}
	public void setSuccess(boolean success) {
		this.success = success;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	
	
}
