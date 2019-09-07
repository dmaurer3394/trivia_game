$(document).ready(function() {

    // Declare variables
    var timer = 20
    // var question;
    // var answerOne;
    // var answerTwo;
    // var answerThree;
    // var answerFour;

    var trivia = {
        one: {
            question: "What was the official name for Android 6.0?",
            answerOne: "Marshmallow",
            answerTwo: "Nougat",
            answerThree: "Macaroon",
            answerFour: "Gingerbread",
            hint: "6.0 was the version that started with the letter M",
            fact: "Every version of Android up to 10.0 was a desert name and in alphabetical order, starting with 1.5 Cupcake in 2009."
        },
        two: {
            question: "Which personal computer was introduced with a TV commercial during Super Bowl XVIII?",
            answerOne: "IBM PC",
            answerTwo: "Commodore 64",
            answerThree: "Apple Macintosh",
            answerFour: "Atari ST",
            hint: "Its Apple",
            fact: "The original Macintosh sold for $2,495 in 1984. It had a 7.8 MHz processor made by Motorola and 128 kb of RAM."
        },
        three: {
            question: "Which was the first in the Nexus line of Android phones?",
            answerOne: "LG Nexus 5",
            answerTwo: "Samsung Galaxy Nexus",
            answerThree: "Huawei Nexus 6P",
            answerFour: "HTC Nexus One",
            hint: "Don't overthink this one",
            fact: "There were 14 devices during the Nexus program including phones, tablets and media players. It was a collaboration between Google and device manufacturers to create devices that ran Google's version of stock Android."
        },
        four: {
            question: "",
            answerOne: "",
            answerTwo: "",
            answerThree: "",
            answerFour: "",
            hint: "",
            fact: ""
        },
        five: {
            question: "",
            answerOne: "",
            answerTwo: "",
            answerThree: "",
            answerFour: "",
            hint: "",
            fact: ""
        },
    };

    function firstQuestion() {

        $("#help").show();
        $("#question").text(trivia.one.question);
        $("#answer1").text(trivia.one.answerOne);
        $("#answer2").text(trivia.one.answerTwo);
        $("#answer3").text(trivia.one.answerThree);
        $("#answer4").text(trivia.one.answerFour);
        $("#help").on("click", function() {
            $("#hint").text(trivia.one.hint);
        });
        $("#answer1").on("click", function() {
            $("#hint").hide();
            secondQuestion();
        });
    }

    function secondQuestion() {

        $("#question").text(trivia.two.question);
        $("#answer1").text(trivia.two.answerOne);
        $("#answer2").text(trivia.two.answerTwo);
        $("#answer3").text(trivia.two.answerThree);
        $("#answer4").text(trivia.two.answerFour);
        $("#help").on("click", function() {
            $("#hint").show();
            $("#hint").text(trivia.two.hint);
        });
        $("#answer3").on("click", function() {
            $("#hint").hide();
            thirdQuestion();
        });
    }
    function thirdQuestion() {

        $("#question").text(trivia.three.question);
        $("#answer1").text(trivia.three.answerOne);
        $("#answer2").text(trivia.three.answerTwo);
        $("#answer3").text(trivia.three.answerThree);
        $("#answer4").text(trivia.three.answerFour);
        $("#help").on("click", function() {
            $("#hint").show();
            $("#hint").text(trivia.three.hint);
        });
        $("#answer4").on("click", function() {
            $("#hint").hide();
            forthQuestion();
        });
    }
    function forthQuestion() {

        $("#question").text(trivia.four.question);
        $("#answer1").text(trivia.four.answerOne);
        $("#answer2").text(trivia.four.answerTwo);
        $("#answer3").text(trivia.four.answerThree);
        $("#answer4").text(trivia.four.answerFour);
        $("#help").on("click", function() {
            $("#hint").show();
            $("#hint").text(trivia.four.hint);
        });
        $("#answer1").on("click", function() {
            $("#hint").hide();
            fifthQuestion();
        });
    }
    function fifthQuestion() {

        $("#question").text(trivia.five.question);
        $("#answer1").text(trivia.five.answerOne);
        $("#answer2").text(trivia.five.answerTwo);
        $("#answer3").text(trivia.five.answerThree);
        $("#answer4").text(trivia.five.answerFour);
        $("#help").on("click", function() {
            $("#hint").show();
            $("#hint").text(trivia.five.hint);
        });
        $("#answer1").on("click", function() {
            $("#hint").hide();
            thirdQuestion();
        });
    }

    $("#help").hide();
        
    $("#start").on("click", function() {
        $("#greeting").hide();
        $("#start").hide();
        firstQuestion();
    })

});