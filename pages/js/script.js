function openMore() {
	$(".expanded").css("display", "inline-block");
	$(".third-section-more").css("display", "none");
	$(".hr-more").css("display", "block");
}

function closeMore() {
	$(".expanded").css("display", "none");
	$(".third-section-more").css("display", "inline-block");
	$(".hr-more").css("display", "none");
}

function openNav() {
    document.getElementById("mySidenav").style.width = "50%";
    document.getElementsByTagName("body")[0].style.overflowY = "hidden";
    $("#cover").show();
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementsByTagName("body")[0].style.overflowY = "auto";
    $("#cover").hide();
}
