import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { fetchImg } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions";

const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
	event.preventDefault();
	clearGallery();

	const query = event.target.elements.searchText.value.trim();

	if (!query) {
		iziToast.error({
			title: "Please enter text",
			position: "topRight"
		});
		return;
	}

	showLoader();

	fetchImg(query)
		.then(images => {
			if (!images || images.length === 0) {
				iziToast.error({
					title: `Sorry, there are no images matching "${query}". Please try again!`,
					position: "topRight"
				});
				return;
			}
			createGallery(images);
		})
		.catch(error => {
			iziToast.error({
				title: error.message,
				position: "topRight" 
			});
		})
		.finally(() => {
			hideLoader();
			form.reset();  
		});
});