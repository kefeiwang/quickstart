/**
 * 自定义easyUI扩展
 */
// 修改grid默认页大小
$.fn.datagrid.defaults.pageSize = 50
// easyui grid单击行时 不让选中
$.fn.datagrid.defaults.onSelect = function(rowIndex, rowData) {
	$(this).datagrid("clearSelections");
};
$.fn.datagrid.defaults.fit = true;
$.fn.datagrid.defaults.checkOnSelect = false;
$.fn.datagrid.defaults.selectOnCheck = false;
$.fn.datagrid.defaults.idField = 'id';
$.fn.datagrid.defaults.pagination = true;
$.fn.datagrid.defaults.rownumbers = true;
$.fn.datagrid.defaults.fitColumns = true;
$.fn.datagrid.defaults.singleSelect = true;
// 窗口默认有最大化最小化按钮 改为没有
$.fn.window.defaults.minimizable = false
$.fn.window.defaults.maximizable = false

// easyui form表单取值
$.extend($.fn.form.methods, {
	getFileldsAndValues : function($form) {
		return $form.getFormValues();
	}
});
// 解决easyui datagrid级联外键不显示
$.fn.datagrid.defaults.view = $
		.extend(
				{},
				$.fn.datagrid.defaults.view,
				{
					renderRow : function(_63d, _63e, _63f, _640, _641) {
						var opts = $.data(_63d, "datagrid").options;
						var cc = [];
						if (_63f && opts.rownumbers) {
							var _642 = _640 + 1;
							if (opts.pagination) {
								_642 += (opts.pageNumber - 1) * opts.pageSize;
							}
							cc
									.push("<td class=\"datagrid-td-rownumber\"><div class=\"datagrid-cell-rownumber\">"
											+ _642 + "</div></td>");
						}
						for (var i = 0; i < _63e.length; i++) {
							var _643 = _63e[i];
							var col = $(_63d).datagrid("getColumnOption", _643);
							if (col) {
								var fieldSp = _643.split(".");
								var _644 = _641[fieldSp[0]];
								for (var j = 1; j < fieldSp.length; j++) {
									_644 = _644 ? _644[fieldSp[j]] : null;
								}
								var _645 = col.styler ? (col.styler(_644, _641,
										_640) || "") : "";
								var _646 = col.hidden ? "style=\"display:none;"
										+ _645 + "\"" : (_645 ? "style=\""
										+ _645 + "\"" : "");
								cc.push("<td field=\"" + _643 + "\" " + _646
										+ ">");
								if (col.checkbox) {
									var _646 = "";
								} else {
									var _646 = _645;
									if (col.align) {
										_646 += ";text-align:" + col.align
												+ ";";
									}
									if (!opts.nowrap) {
										_646 += ";white-space:normal;height:auto;";
									} else {
										if (opts.autoRowHeight) {
											_646 += ";height:auto;";
										}
									}
								}
								cc.push("<div style=\"" + _646 + "\" ");
								if (col.checkbox) {
									cc.push("class=\"datagrid-cell-check ");
								} else {
									cc.push("class=\"datagrid-cell "
											+ col.cellClass);
								}
								cc.push("\">");
								if (col.checkbox) {
									cc.push("<input type=\"checkbox\" name=\""
											+ _643 + "\" value=\""
											+ (_644 != undefined ? _644 : "")
											+ "\"/>");
								} else {
									if (col.formatter) {
										cc
												.push(col.formatter(_644, _641,
														_640));
									} else {
										cc.push(_644);
									}
								}
								cc.push("</div>");
								cc.push("</td>");
							}
						}
						return cc.join("");
					}
				});

// 解决easyui combogrid级联外键不显示
$.fn.combogrid.defaults.view = $.extend({}, $.fn.datagrid.defaults.view, {
	renderRow : $.fn.datagrid.defaults.view.renderRow
});

// 解决easyUI中form.submit传递数组时参数方式为array = 1,2,3,4的问题 改为array=1;array=2……
window.Surfilter.ajaxSubmit = function(target, options) {
	options = options || {};

	var param = {};
	if (options.onSubmit) {
		if (options.onSubmit.call(target, param) == false) {
			return;
		}
	}

	var form = $(target);
	if (options.url) {
		form.attr('action', options.url);
	}
	var frameId = 'easyui_frame_' + (new Date().getTime());
	var frame = $('<iframe id=' + frameId + ' name=' + frameId + '></iframe>')
			.attr('src',
					window.ActiveXObject ? 'javascript:false' : 'about:blank')
			.css({
				position : 'absolute',
				top : -1000,
				left : -1000
			});
	var t = form.attr('target'), a = form.attr('action');
	form.attr('target', frameId);

	var paramFields = $();
	try {
		frame.appendTo('body');
		frame.bind('load', cb);
		for ( var n in param) {
			if (jQuery.isArray(param[n])) {
				for ( var i in param[n]) {
					var f = $('<input type="hidden" name="' + n + '">').val(
							param[n][i]).appendTo(form);
					paramFields = paramFields.add(f);
				}
			} else {
				var f = $('<input type="hidden" name="' + n + '">').val(
						param[n]).appendTo(form);
				paramFields = paramFields.add(f);
			}
		}
		form[0].submit();
	} finally {
		form.attr('action', a);
		t ? form.attr('target', t) : form.removeAttr('target');
		paramFields.remove();
	}

	var checkCount = 10;
	function cb() {
		frame.unbind();
		var body = $('#' + frameId).contents().find('body');
		var data = body.html();
		if (data == '') {
			if (--checkCount) {
				setTimeout(cb, 100);
				return;
			}
			return;
		}
		var ta = body.find('>textarea');
		if (ta.length) {
			data = ta.val();
		} else {
			var pre = body.find('>pre');
			if (pre.length) {
				data = pre.html();
			}
		}
		if (options.success) {
			options.success(data);
		}
		setTimeout(function() {
			frame.unbind();
			frame.remove();
		}, 100);
	}
}

$.fn.form.methods = $.extend({}, $.fn.form.methods, {
	submit : function(jq, options) {
		return jq.each(function() {
			window.Surfilter.ajaxSubmit(this, $.extend({}, $.fn.form.defaults,
					options || {}));
		});
	}
})
$.fn.combobox.methods.getSelected=function(data){
	var datas = $(data[0]).combobox("getData");
	var value = $(data[0]).combobox("getValue");
	var valueField = $(data[0]).combobox("options").valueField;
	for(var index in datas){
		if(datas[index][valueField]==value){
			return datas[index];
		}
	}
}
/**
 * 将 onExpandRow 事件提前
 * @author fengcongyue
 * @date 2014-10-10
 */
$.fn.datagrid.methods.expandRow = function(jq , index){
	return jq.each(function(){
		var opts = $(this).datagrid('options');
		var dc = $.data(this, 'datagrid').dc;
		var expander = $(this).datagrid('getExpander', index);
		if (expander.hasClass('datagrid-row-expand')){
			if (opts.onExpandRow){
				var row = $(this).datagrid('getRows')[index];
				opts.onExpandRow.call(this, index, row);
			}
			expander.removeClass('datagrid-row-expand').addClass('datagrid-row-collapse');
			var tr1 = opts.finder.getTr(this, index, 'body', 1).next();
			var tr2 = opts.finder.getTr(this, index, 'body', 2).next();
			tr1.show();
			tr2.show();
			$(this).datagrid('fixDetailRowHeight', index);
		}
	});
}