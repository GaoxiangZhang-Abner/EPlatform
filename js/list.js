// 解析 url 参数
(function($) {
	var re = /([^&=]+)=?([^&]*)/g,
		decodeRE = /\+/g,
		decode = function(str) {
			return decodeURIComponent(str.replace(decodeRE, " "));
		};

	$.parseParams = function(query) {
		let params = {},
			e;

		while (e = re.exec(query)) params[decode(e[1])] = decode(e[2]);
		return params;
	};
})(jQuery);

$("#p1l1").click(function() {
	// 获取地址栏参数
	var url = window.location.href;
	var addressParam = $.parseParams(url.split('?')[1] || '');
	var language = addressParam.lang;
	var name = addressParam.name;
	var audio = addressParam.audio;
	
	window.location.href = "./detail.html?lang=" + language + "&name=" + name + "&audio=" + audio;
	
});

$(function() {
	// 获取地址栏参数
	var url = window.location.href;
	var addressParam = $.parseParams(url.split('?')[1] || '');
	var language = addressParam.lang;
	var name = addressParam.name;
	var audio = addressParam.audio;

	// 获取json
	$.getJSON("./list.json", "", function(data) {
		var sites = data[language];
		var site = sites[name];
		if (site == undefined) {
			return;
		}
		var bg = site.bg;
		
		if (bg !== undefined ) {
			$("body").css("background","url(./images/public/"+ bg + ") no-repeat center center fixed")
			$("body").css("background-size","cover")
		} else {
			$("#title").append("暂无该景点");
		}

	});
});