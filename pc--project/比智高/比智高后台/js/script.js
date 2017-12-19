//注册tabs插件
jQuery.fn.switchTab = function(l) {
	l = jQuery.extend({
		defaultIndex: 0,
		titOnClassName: "on",
		titCell: "dt span",
		mainCell: ".tab_div",
		omitLinks: false,
	}, l);
	this.each(function() {
		var b;
		var c = -1;
		var d = jQuery(this);
		if (l.omitLinks) {
			l.titCell = l.titCell + "[href^='#']"
		};
		var e = d.find(l.titCell);
		var f = d.find(l.mainCell);
		var g = e.length;
		var h = function(a) {
				if (a != c) {
					e.eq(c).removeClass(l.titOnClassName);
					f.hide();
					d.find(l.titCell + ":eq(" + a + ")").addClass(l.titOnClassName);
					d.find(l.mainCell + ":eq(" + a + ")").show();
					c = a;
				};
			};
		h(l.defaultIndex);
		e.each(function(i, a) {
				jQuery(a).click(function(){
					h(i);
					return false
				});
		});
	});
	return this
};
//自定义confirm
jQuery.fn.Ask = function(word, callback) {
	event.preventDefault();
	if (typeof($(this).attr("href")) != "undefined") {
		var href = $(this).attr("href");
	} else if (typeof(callback) != "function") {
		return;
	}
	$("body").prepend('<div class="msg"><div class="confirm">' + word + '<p><a class="add mr10">确定</a><a class="gray">取消</a></p></div></div>');
	$(".msg .confirm p a").click(function() {
		$(".msg").remove();
		var index = $(this).index();
		if (index == 0) {
			if (typeof(callback) == "function") {
				callback();
			} else {
				window.location = href;
			}
		}
	})
	return
};
//自动执行
$(function(){
//侧边栏菜单
	$(".menu ul li>a").click(function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active").next(".sub_menu").slideUp(100);
		}else{
			$(document).find(".menu ul li a.active").removeClass("active").next(".sub_menu").slideUp(100);;
			$(this).addClass("active").next(".sub_menu").slideDown(100);
		}
	})	
})
//toast
function Msg(stat,text,callback){
	//stat:success或faild
	$("body").prepend('<div class="msg"><div class="'+ stat +'">'+ text +'</div></div>');
	setTimeout(function(){
		$(".msg").remove();
		if(typeof(callback) == "function"){
			callback();
		}
	},1500)
}
//日期格式化
function fomartTime(unix){
	var F = new Date(unix);
	var month = ((F.getMonth()+1)<10)?"0"+(F.getMonth()+1):F.getMonth()+1;
	var date = (F.getDate()<10)?"0"+F.getDate():F.getDate();
	fullDate = F.getFullYear() + "-" + month + "-" + date;
	return fullDate;
}