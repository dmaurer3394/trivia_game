$(document).ready(function() {

    // Declare variables
    var timer = 20
    var correct = 0;
    var wrong = 0;

    var trivia = {
        one: {
            question: "What was the official name for Android 6.0?",
            answerOne: "Marshmallow",
            answerTwo: "Nougat",
            answerThree: "Macaroon",
            answerFour: "Gingerbread",
            hint: "6.0 was the version that started with the letter M.",
            fact: "Every version of Android up to 10.0 was a desert name and in alphabetical order, starting with 1.5 Cupcake in 2009."
        },
        two: {
            question: "Which personal computer was introduced with a TV commercial during Super Bowl XVIII?",
            answerOne: "IBM PC",
            answerTwo: "Commodore 64",
            answerThree: "Apple Macintosh",
            answerFour: "Atari ST",
            hint: "It helped form the most valuble company in the world.",
            fact: "The original Macintosh sold for $2,495 in 1984. It had a 7.8 MHz processor made by Motorola and 128 kb of RAM."
        },
        three: {
            question: "Which was the first in the Nexus line of Android phones?",
            answerOne: "LG Nexus 5",
            answerTwo: "Samsung Galaxy Nexus",
            answerThree: "Huawei Nexus 6P",
            answerFour: "HTC Nexus One",
            hint: "Don't overthink this one.",
            fact: "There were 14 devices during the Nexus program including phones, tablets and media players. It was a collaboration between Google and device manufacturers to create devices that ran Google's version of stock Android."
        },
        four: {
            question: "How much did the first 1 gb hard drive weigh?",
            answerOne: "18 lbs",
            answerTwo: "64 lbs",
            answerThree: "150 lbs",
            answerFour: "525 lbs",
            hint: "It weighed more than a car battery, but less than a modern refrigerator.",
            fact: "The hard drive in question was the IBM 3380. It had a capacity of 1.26 gb and cost around $50,000"
        },
        five: {
            question: "Mozilla's Firefox browser originally released as with what name?",
            answerOne: "Mozilla Red Panda",
            answerTwo: "Mozilla Phoenix",
            answerThree: "Mozilla Firefly",
            answerFour: "Mozilla Hyena",
            hint: "FIREfox",
            fact: "Mozilla origninally wanted to use the name Phoenix to illistrate the browser 'rising out of the ashes' of Netscape Navigator, which is where the original source code came from. The name was later changed to Firefox after a trademark dispute."
        },
        six: {
            question: "What was the first game controller with vibration feedback?",
            answerOne: "Nintendo 64 controller",
            answerTwo: "Sony Dualshock Two",
            answerThree: "Xbox Elite",
            answerFour: "Sega Dreamcast",
            hint: "Do a barrel roll!",
            fact: "Nintendo released the Rumble Pak alongside Star Fox 64 in April 1997. It was powered by two AAA batteries and designed as an add-on that attached to the gamepad's memory card slot."
        },
        seven: {
            question: "What was the first high-definition home video format available to consumers?",
            answerOne: "DVD",
            answerTwo: "LaserDisk",
            answerThree: "HD-DVD",
            answerFour: "D-VHS",
            hint: "Earlier than you probably thought.",
            fact: "D-VHS tapes were capable of showing movies in resolutions including 1920x1080 and 1280x720, and D-VHS VCRs could record from 480p to 1080i while being backwards compatible with standard VHS and S-VHS tapes."
        },
        eight: {
            question: "In 2010, the United States Air Force used more than a thousand of which game console to build a supercomputer?",
            answerOne: "Playstation 2",
            answerTwo: "Nintendo Wii",
            answerThree: "Playstation 3",
            answerFour: "Xbox 360",
            hint: "It's one of the Sony consoles",
            fact: "It was the 33 largest supercomputer in the world at the time and contained 1,760 Playstation 3s. It was used for radar enhancement, processing satellite imagerym and researching AI."
        },
        nine: {
            question: "What was the first version of Apple's mobile operating system to have the App Store?",
            answerOne: "iPhone OS 1",
            answerTwo: "iOS 4",
            answerThree: "iPhone OS 2",
            answerFour: "iPhone OS 3",
            hint: "This version became available on July 11, 2008 and released on the iPhone 3G",
            fact: "The App Store originally released with 500 applications in 2008. As of 2017, there are over 2.1 million applications and counting."
        },
        ten: {
            question: "What is the name of the landscape picture that is set as the default wallpaper on Windows XP?",
            answerOne: "Majesty",
            answerTwo: "Bliss",
            answerThree: "Splendor",
            answerFour: "Happiness",
            hint: "Ignorance is ...",
            fact: "The photo was captured in Sonoma County, California by National Geographic photographer Charles O'Rear in 1996. It was sold as a stock photo to image licensing agency Corbis, then sold to Microsoft in 2000."
        },
    };

    function firstQuestion() {

        $("#help").show();
        $("#question").text(trivia.one.question);
        $("#answer1").text(trivia.one.answerOne);
        $("#answer2").text(trivia.one.answerTwo);
        $("#answer3").text(trivia.one.answerThree);
        $("#answer4").text(trivia.one.answerFour);
        console.log(correct);
        console.log(wrong);
        console.log("-------------------")
        $("#help").on("click", function() {
            $("#hint").text(trivia.one.hint);
        });
        $("#answer1").on("click", function() {
            correct++;
            $("#hint").hide();
            secondQuestion();
        });
        $("#answer2").on("click", function() {
            wrong++;
            $("#hint").hide();
            secondQuestion();
        });
        $("#answer3").on("click", function() {
            wrong++;
            $("#hint").hide();
            secondQuestion();
        });
        $("#answer4").on("click", function() {
            wrong++;
            $("#hint").hide();
            secondQuestion();
        });
    };

    function secondQuestion() {

        $("#question").text(trivia.two.question);
        $("#answer1").text(trivia.two.answerOne);
        $("#answer2").text(trivia.two.answerTwo);
        $("#answer3").text(trivia.two.answerThree);
        $("#answer4").text(trivia.two.answerFour);
        console.log(correct);
        console.log(wrong);
        console.log("-------------------")
        $("#help").on("click", function() {
            $("#hint").show();
            $("#hint").text(trivia.two.hint);
        });
        $("#answer3").on("click", function() {
            correct++;
            $("#hint").hide();
            thirdQuestion();
        });
        $("#answer1").on("click", function() {
            wrong++;
            $("#hint").hide();
            thirdQuestion();
        });
        $("#answer2").on("click", function() {
            wrong++;
            $("#hint").hide();
            thirdQuestion();
        });
        $("#answer4").on("click", function() {
            wrong++;
            $("#hint").hide();
            thirdQuestion();
        });
    };

    function thirdQuestion() {

        $("#question").text(trivia.three.question);
        $("#answer1").text(trivia.three.answerOne);
        $("#answer2").text(trivia.three.answerTwo);
        $("#answer3").text(trivia.three.answerThree);
        $("#answer4").text(trivia.three.answerFour);
        console.log(correct);
        console.log(wrong);
        console.log("-------------------")
        $("#help").on("click", function() {
            $("#hint").show();
            $("#hint").text(trivia.three.hint);
        });
        $("#answer4").on("click", function() {
            correct++;
            $("#hint").hide();
            forthQuestion();
        });
        $("#answer1").on("click", function() {
            wrong++;
            $("#hint").hide();
            forthQuestion();
        });
        $("#answer2").on("click", function() {
            wrong++;
            $("#hint").hide();
            forthQuestion();
        });
        $("#answer3").on("click", function() {
            wrong++;
            $("#hint").hide();
            forthQuestion();
        });
    };

    function forthQuestion() {

        $("#question").text(trivia.four.question);
        $("#answer1").text(trivia.four.answerOne);
        $("#answer2").text(trivia.four.answerTwo);
        $("#answer3").text(trivia.four.answerThree);
        $("#answer4").text(trivia.four.answerFour);
        console.log(correct);
        console.log(wrong);
        console.log("-------------------")
        $("#help").on("click", function() {
            $("#hint").show();
            $("#hint").text(trivia.four.hint);
        });
        $("#answer2").on("click", function() {
            correct++;
            $("#hint").hide();
            fifthQuestion();
        });
        $("#answer1").on("click", function() {
            wrong++;
            $("#hint").hide();
            fifthQuestion();
        });
        $("#answer3").on("click", function() {
            wrong++;
            $("#hint").hide();
            fifthQuestion();
        });
        $("#answer4").on("click", function() {
            wrong++;
            $("#hint").hide();
            fifthQuestion();
        });
    };

    function fifthQuestion() {

        $("#question").text(trivia.five.question);
        $("#answer1").text(trivia.five.answerOne);
        $("#answer2").text(trivia.five.answerTwo);
        $("#answer3").text(trivia.five.answerThree);
        $("#answer4").text(trivia.five.answerFour);
        console.log(correct);
        console.log(wrong);
        console.log("-------------------")
        $("#help").on("click", function() {
            $("#hint").show();
            $("#hint").text(trivia.five.hint);
        });
        $("#answer2").on("click", function() {
            correct++;
            $("#hint").hide();
            sixthQuestion();
        });
        $("#answer1").on("click", function() {
            wrong++;
            $("#hint").hide();
            sixthQuestion();
        });
        $("#answer3").on("click", function() {
            wrong++;
            $("#hint").hide();
            sixthQuestion();
        });
        $("#answer4").on("click", function() {
            wrong++;
            $("#hint").hide();
            sixthQuestion();
        });
    };

    function sixthQuestion() {

        $("#question").text(trivia.six.question);
        $("#answer1").text(trivia.six.answerOne);
        $("#answer2").text(trivia.six.answerTwo);
        $("#answer3").text(trivia.six.answerThree);
        $("#answer4").text(trivia.six.answerFour);
        console.log(correct);
        console.log(wrong);
        console.log("-------------------")
        $("#help").on("click", function() {
            $("#hint").show();
            $("#hint").text(trivia.six.hint);
        });
        $("#answer1").on("click", function() {
            correct++;
            $("#hint").hide();
            seventhQuestion();
        });
        $("#answer2").on("click", function() {
            wrong++;
            $("#hint").hide();
            seventhQuestion();
        });
        $("#answer3").on("click", function() {
            wrong++;
            $("#hint").hide();
            seventhQuestion();
        });
        $("#answer4").on("click", function() {
            wrong++;
            $("#hint").hide();
            seventhQuestion();
        });
    };

    function seventhQuestion() {

        $("#question").text(trivia.seven.question);
        $("#answer1").text(trivia.seven.answerOne);
        $("#answer2").text(trivia.seven.answerTwo);
        $("#answer3").text(trivia.seven.answerThree);
        $("#answer4").text(trivia.seven.answerFour);
        console.log(correct);
        console.log(wrong);
        console.log("-------------------")
        $("#help").on("click", function() {
            $("#hint").show();
            $("#hint").text(trivia.seven.hint);
        });
        $("#answer4").on("click", function() {
            correct++;
            $("#hint").hide();
            eighthQuestion();
        });
        $("#answer1").on("click", function() {
            wrong++;
            $("#hint").hide();
            eighthQuestion();
        });
        $("#answer2").on("click", function() {
            wrong++;
            $("#hint").hide();
            eighthQuestion();
        });
        $("#answer3").on("click", function() {
            wrong++;
            $("#hint").hide();
            eighthQuestion();
        });
    };

    function eighthQuestion() {

        $("#question").text(trivia.eight.question);
        $("#answer1").text(trivia.eight.answerOne);
        $("#answer2").text(trivia.eight.answerTwo);
        $("#answer3").text(trivia.eight.answerThree);
        $("#answer4").text(trivia.eight.answerFour);
        console.log(correct);
        console.log(wrong);
        console.log("-------------------")
        $("#help").on("click", function() {
            $("#hint").show();
            $("#hint").text(trivia.eight.hint);
        });
        $("#answer3").on("click", function() {
            correct++;
            $("#hint").hide();
            ninthQuestion();
        });
        $("#answer1").on("click", function() {
            wrong++;
            $("#hint").hide();
            ninthQuestion();
        });
        $("#answer2").on("click", function() {
            wrong++;
            $("#hint").hide();
            ninthQuestion();
        });
        $("#answer4").on("click", function() {
            wrong++;
            $("#hint").hide();
            ninthQuestion();
        });
    };

    function ninthQuestion() {

        $("#question").text(trivia.nine.question);
        $("#answer1").text(trivia.nine.answerOne);
        $("#answer2").text(trivia.nine.answerTwo);
        $("#answer3").text(trivia.nine.answerThree);
        $("#answer4").text(trivia.nine.answerFour);
        console.log(correct);
        console.log(wrong);
        console.log("-------------------")
        $("#help").on("click", function() {
            $("#hint").show();
            $("#hint").text(trivia.nine.hint);
        });
        $("#answer3").on("click", function() {
            correct++;
            $("#hint").hide();
            tenthQuestion();
        });
        $("#answer1").on("click", function() {
            wrong++;
            $("#hint").hide();
            tenthQuestion();
        });
        $("#answer2").on("click", function() {
            wrong++;
            $("#hint").hide();
            tenthQuestion();
        });
        $("#answer4").on("click", function() {
            wrong++;
            $("#hint").hide();
            tenthQuestion();
        });
    };

    function tenthQuestion() {

        $("#question").text(trivia.ten.question);
        $("#answer1").text(trivia.ten.answerOne);
        $("#answer2").text(trivia.ten.answerTwo);
        $("#answer3").text(trivia.ten.answerThree);
        $("#answer4").text(trivia.ten.answerFour);
        console.log(correct);
        console.log(wrong);
        console.log("-------------------")
        $("#help").on("click", function() {
            $("#hint").show();
            $("#hint").text(trivia.ten.hint);
        });
        $("#answer2").on("click", function() {
            correct++;
            $("#hint").hide();
            endSlide();
        });
        $("#answer1").on("click", function() {
            wrong++;
            $("#hint").hide();
            endSlide();
        });
        $("#answer3").on("click", function() {
            wrong++;
            $("#hint").hide();
            endSlide();
        });
        $("#answer4").on("click", function() {
            wrong++;
            $("#hint").hide();
            endSlide();
        });
    };

    function endSlide() {
        $("#question").hide();
        $("#answer1").hide();
        $("#answer2").hide();
        $("#answer3").hide();
        $("#answer4").hide();
        $("#help").hide();
        $("#rights").text("You got " + correct + " right!");

        if (wrong === 0) {
            $("#wrongs").text("And you got none wrong! Great job!")
        }
        else {
            $("#wrongs").text("But you got " + wrong + " wrong.")
        };
    };

    $("#help").hide();
        
    $("#start").on("click", function() {
        $("#greeting").hide();
        $("#start").hide();
        firstQuestion();
    })

});