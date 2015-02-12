/**
 * 自定义jQuery扩展
 */
/***************************jQuery属性类*****************************/
//$.surfilterExample = 'example';
/** *************************jQuery函数（插件）类**************************** */
/**
 * 获取所有子元素表单值
 */
$.fn.getFormValues = function() {
	var obj = {};
	if ($(this).children().length > 0) {
		$.extend(obj,$(this).children().getFormValues());
	}
	$(this).children().each(function() {
		if ($(this).attr('name') != undefined && $(this).val != undefined) {
			if($(this).attr('type') == 'radio'){
				if(this.checked){
					obj[$(this).attr('name')] = $(this).val();
				}
			}else if($(this).attr('type') == 'checkbox'){
				if(this.checked){
					obj[$(this).attr('name')] = obj[$(this).attr('name')] || [];
					obj[$(this).attr('name')][obj[$(this).attr('name')].length] = $(this).val();
				}
			}else{
				obj[$(this).attr('name')] = $(this).val();
			}
		}
	});
	return obj;
}