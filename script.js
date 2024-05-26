const navToggle=document.querySelector(".nav-toggle");
const navMenu=document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    //si esta la clase la quita, y si no esta la añade
    navMenu.classList.toggle("nav-menu-visible");
});

/*SOLAPAS */
$(document).ready(function(){
	$('ul.tabs li a:first').addClass('active-consola');
	$('.secciones article').hide();
	$('.secciones article:first').show();

	$('ul.tabs li a').click(function(){
		$('ul.tabs li a').removeClass('active-consola');
		$(this).addClass('active-consola');
		$('.secciones article').hide();

		var activeTab = $(this).attr('href');
		$(activeTab).show();
		return false;
	});
});

/*HISTORIA */
const targets = document.querySelectorAll(".timeline ol li");
const threshold = 0.5;
const ANIMATED_CLASS = "in-view";

function callback(entries, observer) {
  entries.forEach((entry) => {
    const elem = entry.target;
    if (entry.intersectionRatio >= threshold) {
      elem.classList.add(ANIMATED_CLASS);
      observer.unobserve(elem);
    } else {
      elem.classList.remove(ANIMATED_CLASS);
    }
  });
}

const observer = new IntersectionObserver(callback, { threshold });
for (const target of targets) {
  observer.observe(target);
}
/*CONSOLAS */
$(".step").click( function() {
	$(this).addClass("active").prevAll().addClass("active");
	$(this).nextAll().removeClass("active");
});

$(".step01").click( function() {
	$("#experience-line-process").css("width", "15%");
	$(".sg1000").addClass("active").siblings().removeClass("active");
});

$(".step02").click( function() {
	$("#experience-line-process").css("width", "25%");
	$(".segaMasterSystem").addClass("active").siblings().removeClass("active");
});

$(".step03").click( function() {
	$("#experience-line-process").css("width", "40%");
	$(".segaMegaDrive").addClass("active").siblings().removeClass("active");
});

$(".step04").click( function() {
	$("#experience-line-process").css("width", "55%");
    $(".segaGameGear").addClass("active").siblings().removeClass("active");
	
});

$(".step05").click( function() {
	$("#experience-line-process").css("width", "71%");
	$(".segaMegaCd").addClass("active").siblings().removeClass("active");
});
$(".step06").click( function() {
	$("#experience-line-process").css("width", "100%");
	$(".sega32X").addClass("active").siblings().removeClass("active");
});
