// Category = object
// Description = string
// ScoreValue = object
// 200 = object
// points = number
// questions = array
// [0] = object
// clue = string
// correctAnswer = string
// wrong answers = array
// [0] = string
// [1] = string
// [2] = string
// [1] = object
// [2] = object
// 400 = object
// 600 = object
// 800 = object
// 1000 = object

const category = {
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