package com.surfilter.flood.maintain.web;  

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
  
/**
 * 
 * @Title:  
 * @Description:  
 * @Author:     wkf  
 * @Since:      2015年2月3日 下午4:13:27    
 * @Version:    1.0.0
 */
@Controller
@RequestMapping(value = "/main")
public class MainController {
	
	@RequestMapping(value = "success")
	public String MainPage(){
		return "layouts/main";
	}
}
