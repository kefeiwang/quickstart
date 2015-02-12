package com.surfilter.flood.maintain.web.account;  

import javax.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/test")
public class TestController {

	
	@RequestMapping("testIframe")
	public String getMenuList(HttpServletRequest request){
		return "account/login";
	}
}
