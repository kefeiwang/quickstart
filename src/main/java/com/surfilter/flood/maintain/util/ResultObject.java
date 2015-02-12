package com.surfilter.flood.maintain.util;

import java.io.Serializable;

/**
 * @since jdk1.6
 * @description json返回对象
 * @author liyi
 *
 */
public class ResultObject implements Serializable {
	
	
	private boolean success = false;
	
	private String msg = "That's a result object!";
	
	private Object result = null;

	public ResultObject(boolean success, String msg) {
		this(success, msg, null);
	}
	
	public ResultObject(boolean success, String msg, Object obj) {
		super();
		this.success = success;
		this.msg = msg;
		this.result = obj;
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

	/**
	 * result.
	 *
	 * @return  the result
	 * @since   JDK 1.6
	 */
	public Object getResult() {
		return result;
	}

	/**
	 * result.
	 *
	 * @param   result    the result to set
	 * @since   JDK 1.6
	 */
	public void setResult(Object result) {
		this.result = result;
	}

}
