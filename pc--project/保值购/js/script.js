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
