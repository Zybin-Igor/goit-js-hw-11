import axios from "axios";

const apiKey = "51458784-2f96fe50249650f21f6db1ef2";
const baseUrl = "https://pixabay.com/api/";

export const fetchImg = (query) => {
	return axios.get(baseUrl, {
		params: {
			key: apiKey,
			q: query,
			image_type: "photo",
			orientation: "horizontal",
			safesearch: true
		}
	})
		.then(response => {
			if (!response.data || !response.data.hits) {
				throw new Error('Invalid response format from Pixabay API');
			}
			return response.data.hits;
		})
		.catch(error => {
			console.error('Error fetching images:', error);
			throw error; 
		});
}