<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/views/layouts/header.jsp" %>
<title>舆情运维系统</title>
    <style type="text/css">
      body {
      font-family:"微软雅黑";
        padding-top: 40px;
        overflow-y:hidden;
      }
      .sidebar-nav {
        padding: 9px 0;
      }
      
      .nav-list li.unfold {
			color: #000;
			font-weight: bold;
			background-color: #70C5F4;
		}
    </style>
<script>
$(function(){
	Surfilter.main.init();
})
</script>
</head>
<body>
<!-- 头部 start -->
<div class="navbar navbar-inverse navbar-fixed-top">
  <div class="navbar-inner ">
  	<div class="container-fluid">
  	<b class="brand">舆情运维系统</b>

    <div class="pull-right top-right">
    <ul class="nav">
       <!-- 
			一级菜单
	    -->
	</ul>
	
	
	<div class="btn-group ">
				<a class="btn dropdown-toggle" data-toggle="dropdown" href="#">
					<i class="icon-user"></i> <shiro:principal property="name"/>
					<span class="caret"></span>
				</a>
			
				<ul class="dropdown-menu pull-right">
						<li><a href="${ctx}/admin/user">Admin Users</a></li>
						<li class="divider"></li>
					<li><a href="${ctx}/api">APIs</a></li>
					<li><a href="${ctx}/profile">Edit Profile</a></li>
					<li><a href="${ctx}/logout">Logout</a></li>
				</ul>
			</div>
	</div>
	</div>
	
			
  </div>
</div>
<!-- 头部 end -->

<div class="container-fluid">
<div class="row-fluid">
	<!-- 内容左 start -->
	<div class="span2">
	<div class="well sidebar-nav">
		<h1 class="nav-header"><!-- 任务管理 --></h1>
		<ul class="nav nav-list">
	  		<!-- 
	  			左侧二级、三级菜单
	   		-->
	 	</ul>
	 </div>
	 </div>
	<!-- 内容左 end -->
  
  
	 <!-- 内容右 start -->
<div class="span10">
		<div id="myAlertSuccess" class="alert alert-success hide">
			<strong id="warningAlertMsg">成功!</strong>
				<button type="button" class="close" onclick='javascript: $("#myAlertSuccess").hide();'>
				  <span aria-hidden="true">&times;</span>
				</button>
		</div>
			
		<div id="myAlertInfo" class="alert alert-info hide">
			<strong id="infoAlertMsg">信息!</strong>
				<button type="button" class="close" onclick='javascript: $("#myAlertInfo").hide();'>
				  <span aria-hidden="true">&times;</span>
				</button>
		</div>
			
		<div id="myAlertWarning" class="alert alert-warning hide">
			<strong id="warningAlertMsg">警告!</strong>
				<button type="button" class="close" onclick='javascript: $("#myAlertWarning").hide();'>
				  <span aria-hidden="true">&times;</span>
				</button>
		</div>
			 	
		<div id="myAlertDanger" class="alert alert-danger hide">
			<strong id="dangerAlertMsg">危险!</strong>
				<button type="button" class="close" onclick='javascript: $("#myAlertDanger").hide();'>
				  <span aria-hidden="true">&times;</span>
				</button>
		</div>
	<iframe class="main-right" id="mainPage" frameborder=0 style="width:100%; overflow-y:hidden;">
	</iframe>
</div>
</div>
</div>
</body>
</html>