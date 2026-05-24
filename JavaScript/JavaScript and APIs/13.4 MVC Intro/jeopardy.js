// categories is the main data structure for the app; it looks like this:

//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]

const NUM_CATEGORIES = 6;
const NUM_QUESTIONS_PER_CAT = 5;

let categories = [];


/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

async function getCategoryIds() {
    let categoryIds = await axios.get('https://rithm-jeopardy.herokuapp.com/api/categories?count=100');
    let categoryIdsResponse = categoryIds.data;

    // Extract just the id from each category object
    let ids = categoryIdsResponse.map(category => category.id);

    // Shuffle the array randomly
    ids.sort(() => Math.random() - 0.5);

    // Return the array of category ids
    return ids.slice(0, NUM_CATEGORIES)
}

/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */

async function getCategory(catId) {
    let response = await axios.get(`https://rithm-jeopardy.herokuapp.com/api/category?id=${catId}`);
    let responseData = response.data.clues;

    let clues = responseData
        .sort(() => Math.random() - 0.5)
        .slice(0, NUM_QUESTIONS_PER_CAT)
        .map(clue => (
            {
                question: clue.question, answer: clue.answer, showing: null
            })
        );

    return { title: response.data.title, clues };
}

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

function fillTable() {
    // Clear existing table content
    $('#jeopardy-table thead').empty();
    $('#jeopardy-table tbody').empty();

    // Build header row with category titles
    let $headerRow = $('<tr>');
    for (let cat of categories) {
        $headerRow.append($('<th>').text(cat.title));
    }
    $('#jeopardy-table thead').append($headerRow);

    // Build body rows
    for (let i = 0; i < NUM_QUESTIONS_PER_CAT; i++) {
        let $row = $('<tr>');
        for (let j = 0; j < NUM_CATEGORIES; j++) {
            let $cell = $('<td>')
                .attr('id', `cell-${i}-${j}`)
                .text('?')
            $row.append($cell);
        }
        $('#jeopardy-table tbody').append($row);
    }
}

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

function handleClick(evt) {
    let id = evt.target.id;

    let [, row, col] = id.split('-').map(Number);
    let clue = categories[row].clues[col];

    if (clue.showing === 'answer') {
        return;
    }

    if (clue.showing === null) {
        // Show the question
        $(`#${id}`).text(clue.question).addClass('question');
        clue.showing = 'question';
    }
    else if (clue.showing === 'question') {
        $(`#${id}`).text(clue.answer).removeClass('question').addClass('answer');
        clue.showing = 'answer';
    }
}

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

function showLoadingView() {
    $('#jeopardy-table thead').empty();
    $('#jeopardy-table tbody').empty();
    $('#start-btn').text('Loading...').prop('disabled', true);
    $('#spinner').show();
}

/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {
    $('#spinner').hide();
    $('#start-btn').text('Restart').prop('disabled', false);
}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {
    showLoadingView();

    // Reset categories
    categories = [];

    // Fetch categories by IDs
    let catIds = await getCategoryIds();

    // Fetch data for each category
    categories = await Promise.all(catIds.map(id => getCategory(id)));

    // Build table
    await fillTable();

    hideLoadingView();
}

/** On click of start / restart button, set up game. */

// TODO
$('#start-btn').on('click', setupAndStart);

/** On page load, add event handler for clicking clues */

// TODO
$('#jeopardy-table').on('click', handleClick);