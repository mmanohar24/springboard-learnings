// look back at the <readme.md> file for some hints //
// working API key //
const giphyApiKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";

const searchTermInput = document.getElementById("input-text-field");
const searchGiphyButton = document.getElementById("search-giphy-button");
const deleteGiphyButton = document.getElementById("remove-image-button");
const displayDiv = document.getElementById("display-div");


searchGiphyButton.addEventListener('click', function (event) {

    event.preventDefault();
    // console.log(' Search Giphy button is clicked');
    searchGiphyImages();
})

deleteGiphyButton.addEventListener('click', function (event) {
    event.preventDefault();
    deleteGiphyImages();
})

async function searchGiphyImages() {
    try {
        const searchTerm = searchTermInput.value;
        const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=${searchTerm}`);
        const results = response.data.data;

        const randomIndex = Math.floor(Math.random() * results.length);
        const randomGif = results[randomIndex];

        let img = document.createElement('img');
        img.src = randomGif.images.downsized_medium.url;
        img.alt = searchTerm;
        img.addEventListener('click', function()
        {
            img.remove();
        })
        displayDiv.appendChild(img);

        // console.log(response.data);


    }
    catch (error) {
        console.log(error);
    }
}

function deleteGiphyImages() {
    try {
        displayDiv.innerHTML = "";
        searchTermInput.value = "";
    }
    catch (error) {
        console.log(error);
    }
}
