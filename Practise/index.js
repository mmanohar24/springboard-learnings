const spoonacularAPIKEY = "6d80cda16e954557a2122f4044680b7f";

const generateRecipeButton = document.getElementById("generate-button");
const displayDiv = document.getElementById('display-div');

generateRecipeButton.addEventListener('click', function () {
    getRandomRecipe();
});


// async function getRandomRecipe() {
//     // Create a new div
//     let newDiv = document.createElement('div');
//     let h3 = document.createElement('h3');

//     try {
//         const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${spoonacularAPIKEY}`);
//         const recipe = response.data.recipes[0];

//         // console.log(response);

//         displayDiv.innerHTML = "";


//         // Set Recipe Title into Header
//         h3.innerHTML = recipe.title;
//         displayDiv.appendChild(h3);

//         // Set the recipe summary in new div
//         newDiv.innerHTML = recipe.summary;
//         displayDiv.appendChild(newDiv);
//     }
//     catch (error) {

//         // clear the div
//         displayDiv.innerHTML = "";

//         // set the header
//         h3.innerHTML = 'Error';
//         h3.classList.add("error-response")
//         displayDiv.appendChild(h3);

//         // show the error message from API response
//         newDiv.innerHTML = error.response.data.message;
//         newDiv.classList.add("error-response")
//         displayDiv.appendChild(newDiv);
//     }
// }



async function getRandomRecipe() {
    try {
        const response = await axios.get(`https://api.openf1.org/v1/drivers?driver_number=44&session_key=9158`);
        const f1PlayerProfile = response.data[0];

        console.log(f1PlayerProfile);

        displayDiv.innerHTML = "";

        // Create a new div
        let newDiv = document.createElement('div');
        let h3 = document.createElement('h3');
        let img = document.createElement('img');

        // Set Recipe Title into Header
        h3.innerHTML = f1PlayerProfile.full_name;
        img.src = f1PlayerProfile.headshot_url;
        img.alt = f1PlayerProfile.full_name;
        img.width = 300;

        displayDiv.appendChild(h3);
        displayDiv.appendChild(img);

        // Set the recipe summary in new div
        newDiv.innerHTML = f1PlayerProfile.team_name;
        displayDiv.appendChild(newDiv);
    }
    catch (error) {
        console.log(`Error Status: ${error.response.status}`);
        console.log(`Error Data: ${error.response.message}`);
    }
}