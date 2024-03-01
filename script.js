const themeSwitchBtn = document.querySelector("#switch button")
const themeSwitch = document.querySelector("#switch")
let trackIsMoving = false

themeSwitchBtn.addEventListener("touchmove", moveTrack)
themeSwitchBtn.addEventListener("touchend", trackTouchEnd)
themeSwitch.addEventListener("click", toggleTheme)

// Theme toggle function
function toggleTheme() {
	const html = document.documentElement
	const img = document.querySelector("#profile img")
	html.classList.toggle("light")

	if (html.classList.contains("light")) {
		img.setAttribute("src", "./assets/avatar-light.png")
		img.setAttribute("alt", "Marcelo de óculos escuros sorrindo com um fundo gradiente")
	} else {
		img.setAttribute("src", "./assets/avatar.png")
		img.setAttribute("alt", "Marcelo de óculos sorrindo com um fundo laranja")
	}
}

function moveTrack(event) {
	trackIsMoving = true
}

// Change theme color when touch ends
function trackTouchEnd() {
	if (trackIsMoving) {
		trackIsMoving = false
		toggleTheme()
	}
}
