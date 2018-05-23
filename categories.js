const categorySports = {
    name: "Sports",
    description: "Topics ranging from general sports knowledge to individual accomplishments and records.",
    scoreValue: [
        twoHundred = {
            points: 200,
            clues: [
                {
                    clue: "This programming network has been broadcasting since 1979.",
                    correctAnswer: "What is ESPN?",
                    wrongAnswers: [
                        "What are the X-Games?",
                        "What is HGTV?",
                        "What is G4TV?"]
                },
                {
                    clue: "This major sports league is the producer of the Super Bowl.",
                    correctAnswer: "What is the NFL?",
                    wrongAnswers: [
                        "What is the MLB?",
                        "What is the NHL?",
                        "What is the NBA?"]
                },
                {
                    clue: "The NHL season concludes every year with this series of games.",
                    correctAnswer: "What are the Stanley Cup Playoffs?",
                    wrongAnswers: [
                        "What are the NBA Finals?",
                        "What is the ALCS?",
                        "What is the NLCS?"]
                }]
        },
        fourHundred = {
            points: 400,
            clues: [
                {
                    clue: "This 5-time NBA MVP helped win his team 11 championships.",
                    correctAnswer: "Who is Bill Russell?",
                    wrongAnswers: [
                        "Who is Michael Jordan?",
                        "Who is Kareem Abdul-Jabbar?",
                        "Who is Lebron James?"]
                },
                {
                    clue: "This NFL division features teams all of which began season simultaneous in 1960.",
                    correctAnswer: "What is the AFC West?",
                    wrongAnswers: [
                        "What is the NFC East?",
                        "What is the AFC North?",
                        "What is the NFC South?"]
                },
                {
                    clue: "This player was drafted ahead of Michael Jordan in the 1984 NBA draft.",
                    correctAnswer: "Who is Hakeem Olajuwon?",
                    wrongAnswers: [
                        "Who is John Stockton?",
                        "Who is Charles Barkley?",
                        "Who is Kareem Abdul-Jabbar?"]
                }]
        },
        sixHundred = {
            points: 600,
            clues: [
                {
                    clue: "This NBA team has just as many seasonal Most Valuable Players as it does Finals Championships.",
                    correctAnswer: "What are the Chicago Bulls?",
                    wrongAnswers: [
                        "Who are the New England Patriots?",
                        "Who are the Los Angeles Lakers?",
                        "What are the Boston Celtics?"]
                },
                {
                    clue: "Winning the 'Grand Slam' involves winning this tournament along with the Australian Open, French Open, and U.S. Open in a calendar year.",
                    correctAnswer: "What is Wimbledon?",
                    wrongAnswers: [
                        "What is the Italian Open?",
                        "What is the Davis Cup?",
                        "What is the Japanese Open?"]
                },
                {
                    clue: "China won its first Olympic medal in this year.",
                    correctAnswer: "What is 1984?",
                    wrongAnswers: [
                        "What is 1968?",
                        "What is 1952?",
                        "What is 1936?"]
                }]
        },
        eightHundred = {
            points: 800,
            clues: [
                {
                    clue: "After 32 standing for years, this legend's scoring records wouldn't be bested again for another 18 years.",
                    correctAnswer: "Who is Jack Niklaus?",
                    wrongAnswers: [
                        "Who is Tiger Woods?",
                        "Who is Arnold Palmer?",
                        "Who is Phil Mickelson?"]
                },
                {
                    clue: "This country won the first World Cup.",
                    correctAnswer: "Where is Uruguay?",
                    wrongAnswers: [
                        "Where is Switezerland?",
                        "Where is Argentina?",
                        "Where is Brazil?"]
                },
                {
                    clue: "This is the only person to be named Most Valuable Player, Coach of the Year, and Executive of the Year in NBA history.",
                    correctAnswer: "Who is Larry Bird?",
                    wrongAnswers: [
                        "Who is Michael Jordan?",
                        "Who is Bill Russell?",
                        "Who is Phil Jackson?"]
                }]
        },
        oneThousand = {
            points: 1000,
            clues: [
                {
                    clue: "This is coach came off the bench to play for his team in the Stanley Cup Finals.",
                    correctAnswer: "Who is Lester Patrick?",
                    wrongAnswers: [
                        "Who is Wayne Gretzky?",
                        "Who is Dick Irvin?",
                        "Who is Toe Blake?"]
                },
                {
                    clue: "This NFL player returned a fumble 66 yards to the wrong end zone.",
                    correctAnswer: "Who is Jim Marshall?",
                    wrongAnswers: [
                        "Who is Leon Lett?",
                        "Who is Deion Sanders?",
                        "Who is Deltha O'Neal?"]
                },
                {
                    clue: "This PGA record is the highest score on a par-4.",
                    correctAnswer: "What is 16?",
                    wrongAnswers: [
                        "What is 13?",
                        "What is 7?",
                        "What is 10?"]
                }]
        }
    ]
}

const categoryTV = {
    name: "Television",
    description: "Television trivia featuring tidbits of information from the timeline of televised broadcast.",
    scoreValue: [
        twoHundred = {
            points: 200,
            clues: [
                {
                    clue: "In Bewitched, Samantha twitches this body part to practice magic.",
                    correctAnswer: "What is her nose?",
                    wrongAnswers: [
                        "What is her forehead?",
                        "What is her bottom?",
                        "What is her ears?"]
                },
                {
                    clue: "George Jefferson owned this kind of business on The Jeffersons.",
                    correctAnswer: "What is a dry cleaner?",
                    wrongAnswers: [
                        "What is a gas station?",
                        "What is a butcher shop?",
                        "What is a construction company?"]
                },
                {
                    clue: "This comic book hero can be seen in every episode of Seinfeld.",
                    correctAnswer: "Who is Superman?",
                    wrongAnswers: [
                        "Who is Batman?",
                        "Who is Spider-Man?",
                        "Who is the Incredible Hulk?"]
                }]
        },
        fourHundred = {
            points: 400,
            clues: [
                {
                    clue: "This TV series showed the first interracial kiss on American network television.",
                    correctAnswer: "What is Star Trek?",
                    wrongAnswers: [
                        "What is The Cosby Show?",
                        "What is Family Feud?",
                        "What is All in the Family?"]
                },
                {
                    clue: "This was the name of Michael Knight's car on Knight Rider.",
                    correctAnswer: "What is KITT?",
                    wrongAnswers: [
                        "What is General Lee?",
                        "What is Christine?",
                        "What is HAL 9000?"]
                },
                {
                    clue: "This author wrote the series of novels HBO's Game of Thrones is based on.",
                    correctAnswer: "Who is George R. R. Martin?",
                    wrongAnswers: [
                        "Who is J. R. R. Tolkien?",
                        "Who is J. K. Rowling?",
                        "Who is Stephen King?"]
                }]
        },
        sixHundred = {
            points: 600,
            clues: [
                {
                    clue: 'This TV show is famous for the catchphrase "Missed it by that much!"',
                    correctAnswer: "What is Get Smart?",
                    wrongAnswers: [
                        "What is Galavant?",
                        "What is the Simpsons'?",
                        "What is Green Acres?"]
                },
                {
                    clue: "This show was the first animated series made for prime-time network television.",
                    correctAnswer: "What is The Flinstones?",
                    wrongAnswers: [
                        "What is The Simpsons'?",
                        "What is Scooby-Doo?",
                        "What is Felix the Cat?"]
                },
                {
                    clue: "This TV show was the first to use the F word.",
                    correctAnswer: "What is Saturday Night Live?",
                    wrongAnswers: [
                        "What is NYPD Blue?",
                        "What is Cagney & Lacey?",
                        "What is Hill Street Blues?"]
                }]
        },
        eightHundred = {
            points: 800,
            clues: [
                {
                    clue: "This phrase can be seen on a UFO poster in Fox Mulder's office in X-Files.",
                    correctAnswer: 'What is "I want to believe"?',
                    wrongAnswers: [
                        'What is "The truth is out there"?',
                        'What is "Trust no one"?',
                        'What is "We are not alone"?']
                },
                {
                    clue: "This U.S. President is the first to appear on television.",
                    correctAnswer: "Who is Franklin D. Roosevelt?",
                    wrongAnswers: [
                        "Who is Dwight D. Eisenhower?",
                        "Who is Harry S. Truman?",
                        "Who is Herbert Hoover?"]
                },
                {
                    clue: "This was name of a famous mouse before Walt Disney changed it Mickey.",
                    correctAnswer: "What is Mortimer?",
                    wrongAnswers: [
                        "What is Mighty Marvin?",
                        "What is Michael?",
                        "What is Minnie?"]
                }]
        },
        oneThousand = {
            points: 1000,
            clues: [
                {
                    clue: "This actress played Grandma Squarepants on the animated TV show Spongebob Squarepants.",
                    correctAnswer: "Who is Marion Ross?",
                    wrongAnswers: [
                        "Who is Mary Tyler Moore?",
                        "Who is Meredith Baxter?",
                        "Who is Barbara Eden?"]
                },
                {
                    clue: "This product was advertised in the first television commercial.",
                    correctAnswer: "What are Bulova watches?",
                    wrongAnswers: [
                        "What are Winchell's Donuts?",
                        "What is Charmin Bath Tissue?",
                        "What are Phillip Morris cigarettes?"]
                },
                {
                    clue: "This sitcom, which was the first ever, was also the first to feature the first TV couple to share a bed.",
                    correctAnswer: "What is The Mary Kay and Johnny show?",
                    wrongAnswers: [
                        "What is The Brady Bunch?",
                        "What is The Munsters?",
                        "What is I Love Lucy?"]
                }]
        }
    ]
}

const category = {
    name: "category",
    description: "this is a description of the category.",
    scoreValue: [
        twoHundred = {
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
        fourHundred = {
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
        sixHundred = {
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
        eightHundred = {
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
        oneThousand = {
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
    ]
}

const category = {
    name: "category",
    description: "this is a description of the category.",
    scoreValue: [
        twoHundred = {
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
        fourHundred = {
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
        sixHundred = {
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
        eightHundred = {
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
        oneThousand = {
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
    ]
}

const category = {
    name: "category",
    description: "this is a description of the category.",
    scoreValue: [
        twoHundred = {
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
        fourHundred = {
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
        sixHundred = {
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
        eightHundred = {
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
        oneThousand = {
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
    ]
}

const category = {
    name: "category",
    description: "this is a description of the category.",
    scoreValue: [
        twoHundred = {
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
        fourHundred = {
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
        sixHundred = {
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
        eightHundred = {
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
        oneThousand = {
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
    ]
}