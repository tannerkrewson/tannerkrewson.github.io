$(".title").typed({
	strings: ["Hi, I'm Tanner."],
	typeSpeed: 100,
	callback: function() {
		// done once the typing animation is complete

		// make the elements take up space
		// by removing display: none
		$(".subtitle").removeClass("non-existant");
		$(".content").removeClass("non-existant");

		// if it has less than an 11ms delay, the fade
		// animation won't play
		// 11ms would only work sometimes, so I made
		// it hire
		setTimeout(showSubtitle, 30);
	}
});

function showSubtitle(){
	// show the rest of the page
  $(".subtitle").addClass("fade");
	$(".content").addClass("fade");
}
