package com.surfilter.flood.maintain.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;


/** 
 * @ClassName: JumpCtrl
 * @Description: TODO(页面跳转控制器)
 * @author liyi
 * @date 2014-11-5 下午4:32:47
 * 
 */ 
@Controller
public class JumpCtrl {
	
	
	/** 
	 * @Title: jumpPage
	 * @Description: TODO(根据路径跳转到不同的页面)
	 * @param @param pagepath
	 * @param @return
	 * @return String
	 * @throws 
	 */ 
	@RequestMapping("/jump/{pagename}")
	public String jumpPage(@PathVariable String pagename){
		String retrurnpath="";
		if(pagename.contains("_")){
			String[] pagepaths= pagename.split("_");
			for(String path : pagepaths){
				retrurnpath += path+"/";
			}
			retrurnpath = retrurnpath.substring(0,retrurnpath.length()-1);
		}else{
			retrurnpath = pagename;
		}
		return retrurnpath;
	}
	
	/**
	 * 
	 * @Title: jumpApiPage
	 * @Description: TODO(跳转api页面)
	 * @param @param pagename
	 * @param @return
	 * @return String
	 * @throws
	 */
	@RequestMapping("/page/{pagename}")
	public String jumpApiPage(@PathVariable String pagename){
		return "api/"+pagename;
	}
}
