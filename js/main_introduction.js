$("#ch").click(function() {
	$("#language").val("ch");
	var videoDiv = document.getElementById("dropdownMenu1");
	videoDiv.innerHTML = "普通话";
});

$("#en").click(function() {
	$("#language").val("en");
	var videoDiv = document.getElementById("dropdownMenu1");
	videoDiv.innerHTML = "英语";
});

$("#sh").click(function() {
	$("#language").val("sh");
	var videoDiv = document.getElementById("dropdownMenu1");
	videoDiv.innerHTML = "上海话";
});

$("#other").click(function() {
	$("#language").val("other");
	var videoDiv = document.getElementById("dropdownMenu1");
	videoDiv.innerHTML = "其他语种";
});

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

$(function() {
	// 获取地址栏参数
	var url = window.location.href;
	var addressParam = $.parseParams(url.split('?')[1] || '');
	var language = addressParam.lang;
	var name = addressParam.name;

	// 获取json
	$.getJSON("./list.json", "", function(data) {
		var sites = data[language];
		var site = sites[name];
		if (site == undefined) {
			console.log("有");
			$("#title").append("暂无该景点");
			return;
		}
		var title = site.title;
		var introduction = site.introduction;
		var bg = site.bg;
		console.log(bg)

		if (title !== undefined && introduction !== undefined) {
			$("body").css("background", "url(./images/public/" + bg + ") no-repeat center center fixed")
			$("body").css("background-size", "cover")
			$("#title").append(title);
			$("#introduction").append(introduction);
		} else {
			$("#title").append("暂无该景点");
		}

	});
});

$("#start").click(function() {
	// 获取地址栏参数
	var url = window.location.href;
	var addressParam = $.parseParams(url.split('?')[1] || '');
	var language = addressParam.lang;
	var name = addressParam.name;
	var audio = $("#language").val();

	window.location.href = "./list.html?lang=" + language + "&name=" + name + "&audio=" + audio
});
