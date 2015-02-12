<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/views/layouts/header.jsp" %>
<script
	src="${resourceRoot }/js/modules/user/userList.js"></script>

<!-- 条件查询 -->
<div class="">
	<form UI-Module="listForm">
		<span class="list-search-ico"></span> 
		<span>
			<label class="help-inline" >账号名：</label>
			<input class="span2" type="text" name="search_LIKE_loginName" style="margin-top: 10px;"></input>
		</span> 
		<span>
			<button type="button" class="btn btn-success">查询</button>
			<button type="button" class="btn">重置</button>
		</span>
	</form>
</div>
<!-- 列表区域 -->
<div name="gridParent" id="list_tab">
	<table UI-Module="listGrid">
	</table>
</div>
<!-- 弹窗区域 -->
<div class="modal fade" id="addModal" tabindex="-1" role="dialog"
		aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-hidden="true">&times;</button>
					<h4 class="modal-title" id="addTitle">提示</h4>
				</div>
				<div class="modal-body" id="addContent">
				<div class="control-group">
					<label  class="control-label">登陆账号:</label>
						<div class="controls">
							<input type="text" id="loginName" name="loginName"  class="input-medium required"/>
								<i class="icon-user"></i>
						</div>
				</div>	
				<div class="control-group">
					<label  class="control-label">用户名:</label>
						<div class="controls">
							<input type="text" id="name" name="name" class="input-medium required"/>
								<i class="icon-user"></i>
						</div>
				</div>	
				<div class="control-group" id="passworDiv">
					<label  class="control-label">密码:</label>
						<div class="controls">
							<input type="text" id="plainPassword" name="plainPassword" class="input-medium required"/>
								<i class="icon-lock"></i>
						</div>
				</div>		
				<div class="control-group">
					<label  class="control-label">权限:(admin/user)</label>
						<div class="controls">
							<input type="text" id="roles" name="roles" class="input-medium required"/>
								<i class="icon-user"></i>
						</div>
				</div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal" id="add_submit" onclick=";">确认</button>
					<button type="button" class="btn btn-primary" data-dismiss="modal" id="add_cancel" onclick=";">取消</button>
				</div>
			</div>
			<!-- /.modal-content -->
		</div>
	</div>
