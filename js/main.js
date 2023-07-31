const d = document,
	w = window,
	topBar = d.querySelector(".topbar");

//change opacity with scroll
w.addEventListener("scroll", () => {
	if (w.scrollY > 0) {
		topBar.classList.add("transparent");
	} else {
		topBar.classList.remove("transparent");
	}
});

//New variable to save the height of Topbar

let topBarHeight = topBar.offsetHeight;

//Add a paddingTop based on the height of main-content

const mainContent = d.querySelector(".main-content");
mainContent.style.paddingTop = `${topBarHeight + 20}px`;

/* -------------------------------------------------------------------------- */
/*                                 Play button                                */
/* -------------------------------------------------------------------------- */

const focusContainer = d.querySelectorAll(".card-focus");
const spotifyPlaylistContainer = d.querySelectorAll(".card-spotify-playlists");

//Repeated function

const createButton = (card) => {
	//create button
	const button = d.createElement("button");
	button.innerHTML = `<i class="fa-solid fa-play"></i>`;
	//Add button to child element
	card.appendChild(button);
	//Hide button on start
	button.style.display = "none";
	button.classList.add("btn-play");
	//Add a hover event to this element
	//When the mouse gets in and out
	card.addEventListener("mouseover", () => {
		button.style.display = "block";
	});
	card.addEventListener("mouseout", () => {
		button.style.display = "none";
	});
};

//We use this function on both of the content rows

focusContainer.forEach((card) => {
	createButton(card);
});
spotifyPlaylistContainer.forEach((card) => {
	createButton(card);
});
