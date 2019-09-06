$(function() {
	var availableTags = [
		"龙华烈士陵园",
		"一大会址",
	];
	
	$("#search-input").autocomplete({
		source: availableTags
	});
});

$("#cn").click(function() {
	$("#language").val("ch");
	$("#cn").removeClass("btn-default");
	$("#en").removeClass("btn-danger");
	$("#cn").addClass("btn-danger");
	$("#en").addClass("btn-default");
	$("#search-input").attr("placeholder", "你想去哪儿呢？")
	availableTags = [
		"龙华烈士陵园",
		"一大会址",
	];
	$("#search-input").autocomplete({
		source: availableTags
	});
});

$("#en").click(function() {
	$("#language").val("en");
	$("#en").removeClass("btn-default");
	$("#cn").removeClass("btn-danger");
	$("#en").addClass("btn-danger");
	$("#cn").addClass("btn-default");
	$("#search-input").attr("placeholder", "Where do you want to go?")
	availableTags = [
		"Longhua Martyr's Cemetery",
		"Site of the First National Congress of the Communist Party of China",
	];
	$("#search-input").autocomplete({
		source: availableTags
	});
});

$("#search-btn").click(function() {
	var language = $("#language").val()
	var name = $("#search-input").val();
	if (name) {
		window.location.href = "./main_introduction.html?lang=" +language + "&name=" + name
	} else if (language == "ch"){
		$("#search-input").attr("placeholder", "请输入内容")
	} else if (language == "en"){
		$("#search-input").attr("placeholder", "Please input the content")
	}
})
