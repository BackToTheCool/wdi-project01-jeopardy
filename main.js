const category = {
    name: "category",
    description: "this is a description of the category.",
    scoreValue: {
        twoHundred: {
            points: 200,
            clues: [
                {
                    clue: "This is the 200 clue/question #1.",
                    correctAnswer: "This is the correct answer.",
                    wrongAnswers: [
                        "This is a 200-1 wrong answer.",
                        "This is another 200-1 wrong answer.",
                        "This is a 200-1 wrong answer as well."]
                },
                {
                    clue: "This is the 200 clue/question #2.",
                    correctAnswer: "This is the correct answer.",
                    wrongAnswers: [
                        "This is a 200-2 wrong answer.",
                        "This is another 200-2 wrong answer.",
                        "This is a 200-2 wrong answer as well."]
                },
                {
                    clue: "This is the 200 clue/question #3.",
                    correctAnswer: "This is the correct answer.",
                    wrongAnswers: [
                        "This is a 200-3 wrong answer.",
                        "This is another 200-3 wrong answer.",
                        "This is a 200-3 wrong answer as well."]
                }]
        },
        fourHundred: {
            points: 400,
            clues: [
                {
                    clue: "This is the 400 clue/question #1.",
                    correctAnswer: "This is the correct answer.",
                    wrongAnswers: [
                        "This is a 400-1 wrong answer.",
                        "This is another 400-1 wrong answer.",
                        "This is a 400-1 wrong answer as well."]
                },
                {
                    clue: "This is the 400 clue/question #2.",
                    correctAnswer: "This is the correct answer.",
                    wrongAnswers: [
                        "This is a 400-2 wrong answer.",
                        "This is another 400-2 wrong answer.",
                        "This is a 400-2 wrong answer as well."]
                },
                {
                    clue: "This is the 400 clue/question #3.",
                    correctAnswer: "This is the correct answer.",
                    wrongAnswers: [
                        "This is a 400-3 wrong answer.",
                        "This is another 400-3 wrong answer.",
                        "This is a 400-3 wrong answer as well."]
                }]
        },
        sixHundred: {
            points: 600,
            clues: [
                {
                    clue: "This is the 600 clue/question #1.",
                    correctAnswer: "This is the correct answer.",
                    wrongAnswers: [
                        "This is a 600-1 wrong answer.",
                        "This is another 600-1 wrong answer.",
                        "This is a 600-1 wrong answer as well."]
                },
                {
                    clue: "This is the 600 clue/question #2.",
                    correctAnswer: "This is the correct answer.",
                    wrongAnswers: [
                        "This is a 600-2 wrong answer.",
                        "This is another 600-2 wrong answer.",
                        "This is a 600-2 wrong answer as well."]
                },
                {
                    clue: "This is the 600 clue/question #3.",
                    correctAnswer: "This is the correct answer.",
                    wrongAnswers: [
                        "This is a 600-3 wrong answer.",
                        "This is another 600-3 wrong answer.",
                        "This is a 600-3 wrong answer as well."]
                }]
        },
        eightHundred: {
            points: 800,
            clues: [
                {
                    clue: "This is the 800 clue/question #1.",
                    correctAnswer: "This is the correct answer.",
                    wrongAnswers: [
                        "This is a 800-1 wrong answer.",
                        "This is another 800-1 wrong answer.",
                        "This is a 800-1 wrong answer as well."]
                },
                {
                    clue: "This is the 800 clue/question #2.",
                    correctAnswer: "This is the correct answer.",
                    wrongAnswers: [
                        "This is a 800-2 wrong answer.",
                        "This is another 800-2 wrong answer.",
                        "This is a 800-2 wrong answer as well."]
                },
                {
                    clue: "This is the 800 clue/question #3.",
                    correctAnswer: "This is the correct answer.",
                    wrongAnswers: [
                        "This is a 800-3 wrong answer.",
                        "This is another 800-3 wrong answer.",
                        "This is a 800-3 wrong answer as well."]
                }]
        },
        oneThousand: {
            points: 1000,
            clues: [
                {
                    clue: "This is the 1000 clue/question #1.",
                    correctAnswer: "This is the correct answer.",
                    wrongAnswers: [
                        "This is a wrong answer.",
                        "This is another wrong answer.",
                        "This is a wrong answer as well."]
                },
                {
                    clue: "This is the 1000 clue/question #2.",
                    correctAnswer: "This is the correct answer.",
                    wrongAnswers: [
                        "This is a wrong answer.",
                        "This is another wrong answer.",
                        "This is a wrong answer as well."]
                },
                {
                    clue: "This is the 1000 clue/question #3.",
                    correctAnswer: "This is the correct answer.",
                    wrongAnswers: [
                        "This is a wrong answer.",
                        "This is another wrong answer.",
                        "This is a wrong answer as well."]
                }]
        }
    }
}

const selected = $('section > div');
$('.section > div').click(function (e) {
    console.log("Something");
    ;
    // selected.index(this).toggleClass('blank');
})

// $('.teams-container').click(function (e) {
//     var index = $('.teams-container').index(this)
//     $(this).append(`<p>${teams[index]}</p>`);
//     .fadeOut(1000, function () {
//         $(`.teams-container:gt(${index}), .teams-container:lt(${index})`).hide
//     })
// })


// When I load the page,
//  I want the entire board
//   to fill itself out.

// Then, there will be 30 tiles consisting of:
// one row of 6 categories
// Each category will be above 5 tiles
// (200, 400, 600, 800, 1000)
// Each of which is a question
// the game will ask the user.
// only the tiles with numbers will be click-able.

// when the user clicks a tile,
// a div will appear
// containing a question
// and four possible answers to the question
// the questions will be on divs themselves
// and will be click-able
// if the user selects one of the wrong answers
    // they will be informed of their mistake
    // a red 'X' pops up
    // the correct answer will highlight itself green
    // and the user's response will turn red
    // the point value associated with their question
    // will be subtracted from their current score
// if the user's response is correct
    // a green check will display
    // their answer will turn green
    // the point value associated with their question
    // will be added to their score
// question's div will disappear
// and the user may select another question.

// if the user clicks on 
    // one of the category tiles
    // a brief description will appear
    // describing the subject matter of that category

// the user's score will be displayed
// in the upper corner
// if the user clicks on it
    // it will display their score 
    // and the user's potential score
    // based on the available value
    // of questions remaining will be displayed
    // underneath it

