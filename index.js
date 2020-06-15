



document.querySelector(".welcom").onclick = function() {
	document.querySelector(".two").style.backgroundImage = "url(https://s2.best-wallpaper.net/wallpaper/1366x768/1710/Japan-beautiful-sunset-sea-waves_1366x768.jpg)"
	document.querySelector(".about").removeAttribute("id")
	document.querySelector(".welcom").setAttribute("id", "active")
	
}




document.querySelector(".about").onclick = function() {
	document.querySelector(".two").style.backgroundImage = "url(https://cdna.artstation.com/p/assets/images/images/012/318/558/4k/massimo-ribattezzato-great-white-shark.jpg?1569340695&dl=1)"
	document.querySelector(".welcom").removeAttribute("id")
	document.querySelector(".about").setAttribute("id", "active")

}



