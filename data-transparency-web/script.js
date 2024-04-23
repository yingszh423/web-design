let heading = document.getElementById('heading');

function changeHeading() {
    heading.textContent = "Understand the Decision-making Process of an AI Model";
}


heading.addEventListener("click",changeHeading);

function updateBackgroundColor(){
	let today = new Date();
	let hour = today.getHours();
	if ( hour >=18 || hour < 6) {
		document.body.style.backgroundColor = "#DADADA";
	} else if (hour >=12){
		document.body.style.backgroundColor ="#FFE9EC";
	} else {
		document.body.style.backgroundColor = "#E3F4F4";
	}

}

function updateGreeting(){
	let today = new Date();
	let day = today.getDay();
	let greeting = document.getElementById("dayoftheweek");
	let dailygreeting = [
		'Enjoy your Sunday!',
		'Motivated Monday!',
		'Happy Taco Tuesday!',
		'Midweek Madness!',
		'Almost Friday!',
		'TGIF!',
		'Weekend Vibes!']
	if (greeting){
		greeting.textContent = dailygreeting[day];
	}
}

document.addEventListener("DOMContentLoaded", function() {
    updateBackgroundColor();
    updateGreeting();
});



let banner = document.getElementsByClassName("banner")[0];
function changeBanner() {
	banner.src = "banner2_450.png";
	banner.srcset = "banner2_450.png 450w, banner2_900.png 900w";

}

banner.addEventListener('click',changeBanner);






