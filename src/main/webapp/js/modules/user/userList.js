Surfilter.define("user.userList",{
	/**
	 * 模块名称
	 */
	moduleName : '用户管理模块',
	
	/**
	 * 继承公共列表模块
	 */
	extend : Surfilter.modules.common.listModules,
	
	/**
	 * 初始化列表
	 */
	initGrid : function() {
		var me = this;
		
		var toolbar = [{
			text : '新增',
			iconCls : 'btn btn-success',
			handler : function(){
				me.showEditWindow(1);
			}
		},{
			text : "修改",
			iconCls : 'btn btn-info',
			handler : function(){
				var sels = $("[UI-Module=listGrid]").datagrid("getChecked");
				if (sels.length != 1) {
					me.alertDiv("myAlertWarning","请选择一条记录进行操作！");
					return;
				}
				me.showEditWindow(2,sels[0]);
			}
		},{
			text : "删除",
			iconCls : 'btn btn-danger',
			handler : function(){
				var sels = $("[UI-Module=listGrid]").datagrid("getChecked");
				if (sels.length != 1) {
					me.alertDiv("myAlertWarning","请选择一条记录进行操作！");
					return;
				}
				me.deleteUser(sels[0]);
			}
		}];
		
		me.$grid.datagrid({
			url : ctx + '/admin/user/listUser',
			toolbar : toolbar,
			height : 300,
			fit : true,
			frozenColumns : [ [ {
				field : 'ck',
				checkbox : true
			} ] ],
			columns : [[{
				title : 'ID',
				field : 'id',
				align : 'center'
			},{
				title : '账号',
				field : 'loginName',
				width : 1,
				align : 'center'
			},{
				title : '姓名',
				field : 'name',
				width : 1,
				align : 'center'
			},{
				title : '注册日期',
				field : 'registerDate',
				width : 1,
				align : 'center'
			}]],
			queryParams : me.$form.getFormValues()
		});
	},
	
	/**
	 * 初始化编辑窗口
	 */
	showEditWindow : function(addOrUpdateFlag,entity){
		var me = this;
		if(addOrUpdateFlag == 1){
			me.alertInfo("新增账号");
			$("#loginName").val("").attr({disabled:false});;
			$("#name").val("");
			$("#roles").val("");
		}else{
			me.alertInfo("修改账号");//修改账号的初始化
			$("#loginName").val(entity.loginName).attr({disabled:true});
			$("#name").val(entity.name);
			$("#roles").val(entity.roles);
		}
		$("#loginName").data("addOrUpdateFlag",addOrUpdateFlag);//缓存数据
		$("#name").data("entity",entity);//缓存数据，因为到click方法里面会无效
		$("#roles").data("executeTime",1);
		$("#add_submit").click(function(){
			var addOrUpdateFlag = $("#loginName").data("addOrUpdateFlag");
			var entity = $("#name").data("entity");
			var executeTime = $("#roles").data("executeTime");//这里有重复提交的问题，先暂时用这种办法解决
			if(executeTime == 0){
				return;
			}else if(executeTime == 1){
				$("#roles").data("executeTime",executeTime - 1);
			}
			var params = {};
			if(addOrUpdateFlag == 2){//修改账号param多一个id的值
				params['id'] = entity.id;
			}
			if(!$("#loginName").val()||!$("#name").val()||!$("#plainPassword").val()||!$("#roles").val()){
				me.alertDiv("myAlertWarning","登陆账号，用户名，密码，角色均不能为空，请重新输入！");
				return ;
			}
			params['loginName'] = $("#loginName").val();
			params['name'] = $("#name").val();
			params['plainPassword'] = $("#plainPassword").val();
			params['roles'] = $("#roles").val();
			$.ajax({
				url : ctx + "/admin/user/saveUser",
				data : params,
				async : false,
				success : function(data){
					if(data.success){
						me.alertDiv("myAlertSuccess",data.msg);
						$("#loginName").val("").attr({disabled:false});
						$("#name").val("");
						$("#plainPassword").val("");
						$("#roles").val("");
					}
					me.query();
				}
			})
		});
	},

	
	deleteUser : function(entity){
		var me = this;
		me.alertInfo("警告","确认删除吗？",true);
		$(Surfilter.getTopBody()).find("#myModal").find("#modal_submit").click(function(){
			$.ajax({
				url : ctx + "/admin/user/deleteUser",
				data : {
					id : entity.id
				},
				async : false,
				success : function(data){
					if(data.success){
						me.alertDiv("myAlertSuccess",data.msg);
					}
					me.query();
				}
			})
		});
	}
});