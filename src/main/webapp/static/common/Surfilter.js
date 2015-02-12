(function(){
	// 避免低版本浏览器不支持控制台console对象
	var console  = this.console || {
		log : function(){
		}
	};
	
	// 顶级命名空间
	this.Surfilter = this.Surfilter || {};
	
	(function(){
		this.version = 1.0;
		/**
		 * 定义命名空间
		 * 
		 * @name 命名空间
		 * @content 定义对象
		 */
		this.ns = this.namespace = function(name, content, ingoreInit){
			var names, defineJsCode,defineName;
			names = name.split(".");
			for(var i = 0; i < names.length; i++){
				var defineObject = "";
				for(j = 0; j < i + 1; j++){
					defineObject += "." + names[j];
				}
				defineName = "Surfilter" + defineObject;
				defineJsCode = defineName + "=" + defineName + "|| {}";
				eval(defineJsCode);
				console.log(defineJsCode);
				
				// 最深层的对象定义
				if (i == names.length - 1) {
					result = eval(defineName);
					// 继承
					if (content.extend) {
						for (v in content.extend) {
							result[v] = content.extend[v];
						}
					}
					if(content && typeof  content == "object"){
						for(v in content){
							result[v] = content[v];
						}
					}
					console.log(defineName + ' has been defined',eval(defineName));
					
					// 是否忽略初始化
					if (!ingoreInit) {
						$(function(){
								if(eval(defineName + '.init')){
								console.log('Call ' + defineName + '.init()');
								eval(defineName + '.init();');
							}
						})
					}
				}
			}
		}
		/**
		 * 定义模块
		 * 
		 * @moduleName 模块名称
		 * @content 模块对象
		 */
		this.define = function(moduleName, content, ingoreInit){
			return this.namespace('modules.' + moduleName, content, ingoreInit);
		}
		
		/**
		 * JS热加载
		 */
		this.loadJs = function(src, callback){
			var script = document.createElement("script");
			script.type = "text/javascript";
			script.language = "javascript";
			script.src = src;
			script.onload = script.onreadystatechange = function(){
				if (!script.readyState || script.readyState == "loaded"
					|| script.readyState == "complete") {
				callback.call(script);
			}
			}
			document.getElementsByTagName('head')[0].appendChild(script);
		}
		
		/**
		 * CSS热加载
		 */
		this.loadCSS = function(src){
			var script = document.createElement("link");
			script.rel = "stylesheet";
			script.type = "text/css";
			script.media = "screen";
			script.href = src;
			document.getElementsByTagName("head")[0].appendChild(script);
		}
		
		/**
		 * 获取顶级window
		 */
		this.getTopWindow = function(){
			var top = window;
			while(top != top.parent){
				top = top.parent;
			}
			return top;
		}
		
		/**
		 * 获取顶级window的document
		 */
		this.getTopDocument = function(){
			return this.getTopWindow().document;
		}
		
		/**
		 * 获取顶级window的document的body
		 */
		this.getTopBody = function(){
			return this.getTopDocument().body;
		}
		
	}).call(Surfilter);
	console.log("Surfilter.js has been defined",Surfilter);
}).call(window);