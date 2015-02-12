

Surfilter.define("common.listModules",{
	/**
	 * 模块名称
	 */
	moduleName : '列表模块',
	
	/**
	 * 基类初始化方法
	 */
	init : function(){
		
		//引用自身，以防在子域中this冲突混乱
		var me = this;
		//特有的作为form和grid的标示
		me.$form = $('[UI-Module=listForm]');
		me.$grid = $('[UI-Module=listGrid]');
		
		var h=document.documentElement.clientHeight;
		var m=h-20-me.$form.height();
		$("#list_tab").height(m);
		
		me.$div = $('div[name=gridParent]');
		
		me.initGrid();
		
		me.resetGridSize();
		
		me.$form.keypress(function(event){
			if(event.keyCode == 13){
				me.query();
				event.preventDefault();
			}
		});
		
		me.$form.find("button:contains('查询')").click(function(){
				me.query();
				me.resetGridSize();
		});
		
		me.$form.find("button:contains('重置')").click(function(){
			me.reset();
			me.resetGridSize();
		});
		
		me.$form.find('.combobox-f').combobox({
			
		});
	},
	
	/**
	 * 查询
	 */
	query : function() {
/*		var me=this;
		if(me.beforeQuery){
			me.beforeQuery();
		}*/
		var me = this;
		if (me.$form.form('validate')) {
			var params = me.$form.getFormValues();
			for(v in params){
				if(params[v] && typeof params[v] == 'string'){
					params[v] = params[v].trim();
				}
			}
			me.$grid.datagrid("options").queryParams = params;
			me.$grid.datagrid("load");
		}

	},
	
	/**
	 * 重置查询条件
	 */
	reset : function() {
		var me = this;
		me.$form.form('reset');
		me.query();
	},
	
	/**
	 * 重设列表区尺寸
	 */
	resetGridSize : function(){
		var me = this;
		$("#mainPage").contents().find('body').find(".datagrid-wrap").css({width:1100,height:300})
	},
	
	/**
	 * 触发警告之类的提示（有弹窗的）
	 */
	alertInfo : function(alertTitle,alertContent,isAlert){
		if(isAlert){
			$(Surfilter.getTopBody()).find("#myModalLabel").html(alertTitle);
			$(Surfilter.getTopBody()).find("#modal_content").html(alertContent);
			$(Surfilter.getTopBody()).find("#myModal").modal("show");
		}else{
			$("#addTitle").html(alertTitle);
			$("#addModal").modal("show");
		}
	},
	
	/**
	 * 警示之类的提示（无弹窗）
	 */
	alertDiv : function(alertDivName,content){
		$(Surfilter.getTopBody()).find("#" + alertDivName + " > strong").html(content);
		$(Surfilter.getTopBody()).find("#" + alertDivName + "").show();
		var time = 2000;
		function run(){
		    interval = setInterval(fun,time);
		    interval2 = setInterval(checkHide,time);
		}
		function fun(){
			$(Surfilter.getTopBody()).find("#" + alertDivName + "").hide();
		}
		function checkHide(){
		  if($(Surfilter.getTopBody()).find("#" + alertDivName + ":hidden")){
		      clearInterval(interval);
		      clearInterval(interval2);
		    }
		}
		run();
	}
},true);