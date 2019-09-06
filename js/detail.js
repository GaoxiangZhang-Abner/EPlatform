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


var name1 = document.getElementById("1");
var name2 = document.getElementById("2");
var name3 = document.getElementById("3");
var music = document.getElementById("music");

var onClick = function() {
	
	// 获取地址栏参数
	var url = window.location.href;
	var addressParam = $.parseParams(url.split('?')[1] || '');
	var language = addressParam.lang;
	var name = addressParam.name;
	var audio = addressParam.audio;
	
	// 获取id
	var id = this.id;
	var language = $("#language").val();
	
	// 音乐播放
	// var music = document.getElementById("music");
	var musicSrc= "./audio/p1l1-" + id + "-" + audio + "-audio.mp3";
	music.src = musicSrc;
	music.play(); //开始播放
	console.log(musicSrc)
	
	// 更换图片
	
	var portrait = document.getElementById("portrait");
	var portraitSrc = "./images/detail/p1l1-" + id + ".png"
	portrait.src = portraitSrc;
	
}

name1.addEventListener('click', onClick, false);
name2.addEventListener('click', onClick, false);
name3.addEventListener('click', onClick, false);
