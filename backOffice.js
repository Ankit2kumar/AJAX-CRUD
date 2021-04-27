const url = 'https://striveschool-api.herokuapp.com/api/movies/';

const addNewData = document.querySelector('#addNewData');

function enableform() {
	myForm.classList.remove('d-none');
}

const getData = () => {
	const movieName = document.querySelector('#InputMovieName').value;
	const movieDesc = document.querySelector('#InputMovieDesc').value;
	const moviePrice = document.querySelector('#InputMoviePrice').value;
	const movieImgUrl = document.querySelector('#InputMovieUrl').value;
	const movieCate = document.querySelector('#InputMovieCate').value;
	return (Data = {
		name: movieName,
		description: movieDesc,
		price: moviePrice,
		category: movieCate,
		imageUrl: movieImgUrl,
	});
};

const submit = document.querySelector('#submit');
const showMovies = document.querySelector('#showMovies');

const addMovies = async (event) => {
	event.preventDefault();
	const resp = await fetch(
		'https://striveschool-api.herokuapp.com/api/movies/',
		{
			method: 'POST',
			headers: {
				Authorization:
					'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMDZhMGIxZjBmYjAwMTVkOTE2ZmIiLCJpYXQiOjE2MTkwMDMwNDEsImV4cCI6MTYyMDIxMjY0MX0.BUjunefP1cqV1viZCRo9wZf_AWri7aeJAYeJILezuJA',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(getData()),
		}
	);
	if (resp.ok) {
		alert('Data has been successfully addedd!!');
	}
};
const getCategories = async (event) => {
	try {
		const response = await fetch(
			'https://striveschool-api.herokuapp.com/api/movies',
			{
				headers: {
					Authorization:
						'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMDZhMGIxZjBmYjAwMTVkOTE2ZmIiLCJpYXQiOjE2MTkwMDMwNDEsImV4cCI6MTYyMDIxMjY0MX0.BUjunefP1cqV1viZCRo9wZf_AWri7aeJAYeJILezuJA',
					'Content-Type': 'application/json',
				},
			}
		);
		const categories = await response.json();
		console.log(categories);
	} catch (error) {
		window.alert(error);
	}
};
