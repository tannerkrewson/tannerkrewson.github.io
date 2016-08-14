
$(".title").typed({
	strings: ["Hi, I'm Tanner."],
	typeSpeed: 100,
	callback: function() {
		showSubtitle();
	}
});

function showSubtitle(){
	//show the rest of the page,
	//once the typing animation finishes
  $(".subtitle").addClass("fade");
	$(".content").addClass("fade");
}
