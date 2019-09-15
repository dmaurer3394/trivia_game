$(document).ready(function () {

    var correctArray = ["assets/gifs/correct/c1.gif", "assets/gifs/correct/c2.gif", "assets/gifs/correct/c3.gif", "assets/gifs/correct/c4.gif", "assets/gifs/correct/c5.gif", "assets/gifs/correct/c6.gif", "assets/gifs/correct/c7.gif", "assets/gifs/correct/c8.gif", "assets/gifs/correct/c9.gif", "assets/gifs/correct/c10.gif"];
    var wrongArray = ["assets/gifs/wrong/w1.gif", "assets/gifs/wrong/w2.gif", "assets/gifs/wrong/w3.gif", "assets/gifs/wrong/w4.gif", "assets/gifs/wrong/w5.gif", "assets/gifs/wrong/w6.gif", "assets/gifs/wrong/w7.gif", "assets/gifs/wrong/w8.gif", "assets/gifs/wrong/w9.gif", "assets/gifs/wrong/w10.gif"];
    var qTimer = 20;
    var intervalId;
    var shortTimer = 8;
    var shortInterval;
    var correct = 0;
    var wrong = 0;
    var missed = 10;
    var sequence = 0;
    var currentAnswer = "";

    var trivia = [{
        question: "What was the official name for Android 6.0?",
        answers: ["Marshmallow", "Nougat", "Macaroon", "Gingerbread"],
        correctAnswer: 0,
        hint: "6.0 was the version that started with the letter M.",
        fact: "Every version of Android up to 10.0 was a desert name and in alphabetical order, starting with 1.5 Cupcake in 2009."
    }, {
        question: "Which personal computer was introduced with a TV commercial during Super Bowl XVIII?",
        answers: ["IBM PC", "Commodore 64", "Apple Macintosh", "Atari ST"],
        correctAnswer: 2,
        hint: "It helped form the most valuble company in the world.",
        fact: "The original Macintosh sold for $2,495 in 1984. It had a 7.8 MHz processor made by Motorola and 128 kb of RAM."
    }, {
        question: "Which was the first in the Nexus line of Android phones?",
        answers: ["LG Nexus 5", "Samsung Galaxy Nexus", "Huawei Nexus 6P", "HTC Nexus One"],
        correctAnswer: 3,
        hint: "Don't overthink this one.",
        fact: "There were 14 devices during the Nexus program including phones, tablets and media players. It was a collaboration between Google and device manufacturers to create devices that ran Google's version of stock Android."
    }, {
        question: "How much did the first 1 gb hard drive weigh?",
        answers: ["18 lbs", "64 lbs", "150 lbs", "525 lbs"],
        correctAnswer: 1,
        hint: "It weighed more than a car battery, but less than a modern refrigerator.",
        fact: "The hard drive in question was the IBM 3380. It had a capacity of 1.26 gb and cost around $50,000"
    }, {
        question: "Mozilla's Firefox browser originally released as with what name?",
        answers: ["Mozilla Red Panda", "Mozilla Phoenix", "Mozilla Firefly", "Mozilla Hyena"],
        correctAnswer: 1,
        hint: "FIREfox",
        fact: "Mozilla origninally wanted to use the name Phoenix to illistrate the browser 'rising out of the ashes' of Netscape Navigator, which is where the original source code came from. The name was later changed to Firefox after a trademark dispute."
    }, {
        question: "What was the first game controller with vibration feedback?",
        answers: ["Nintendo 64 controller", "Sony Duelshock Two", "Xbox Elite", "Sega Dreamcast controller"],
        correctAnswer: 0,
        hint: "Do a barrel roll!",
        fact: "Nintendo released the Rumble Pak alongside Star Fox 64 in April 1997. It was powered by two AAA batteries and designed as an add-on that attached to the gamepad's memory card slot."
    }, {
        question: "What was the first high-definition home video format available to consumers?",
        answers: ["DVD", "LaserDisk", "HD-DVD", "D-VHS"],
        correctAnswer: 3,
        hint: "Earlier than you probably thought.",
        fact: "D-VHS tapes were capable of showing movies in resolutions including 1920x1080 and 1280x720, and D-VHS VCRs could record from 480p to 1080i while being backwards compatible with standard VHS and S-VHS tapes."
    }, {
        question: "In 2010, the United States Air Force used more than a thousand of which game console to build a supercomputer?",
        answers: ["Playstation 2", "Nintendo Wii", "Playstation 3", "Xbox 360"],
        correctAnswer: 2,
        hint: "It's one of the Sony consoles",
        fact: "It was the 33 largest supercomputer in the world at the time and contained 1,760 Playstation 3s. It was used for radar enhancement, processing satellite imagerym and researching AI."
    }, {
        question: "What was the first version of Apple's mobile operating system to have the App Store?",
        answers: ["iPhone OS 1", "iOS 4", "iPhone OS 3", "iPhone OS 2"],
        correctAnswer: 3,
        hint: "This version became available on July 11, 2008 and released on the iPhone 3G",
        fact: "The App Store originally released with 500 applications in 2008. As of 2017, there are over 2.1 million applications and counting."
    }, {
        question: "What is the name of the landscape picture that is set as the default wallpaper on Windows XP?",
        answers: ["Majesty", "Bliss", "Splenor", "Happiness"],
        correctAnswer: 1,
        hint: "Ignorance is ...",
        fact: "The photo was captured in Sonoma County, California by National Geographic photographer Charles O'Rear in 1996. It was sold as a stock photo to image licensing agency Corbis, then sold to Microsoft in 2000."
    }];

    function writeQuestion() {
        if (sequence < 10) {

            currentAnswer = trivia[sequence].answers[trivia[sequence].correctAnswer];

            $("#question").text(trivia[sequence].question);

            var timerSpaceDiv = $("<div>").addClass("clearable").html("<br/>");
            $("#question").append(timerSpaceDiv)

            var timerSpan = $("<span>").attr("id", "count-down").addClass("clearable").text("Seconds left: " + qTimer);
            $(timerSpaceDiv).append(timerSpan)

            for (i = 0; i < 4; i++) {
                var choice = $("<p>").attr("id", "number" + i).addClass("choice").text(trivia[sequence].answers[i]);
                $("#answers").append(choice);
            }

            var helpButton = $("<button>").attr("id", "hint-button").addClass("btn btn-success btn-lg").text("Hint");
            $("#help").append(helpButton);

            $("#hint-button").on("click", function () {
                $(this).prop('disabled', true);
                var helpDiv = $("<div>").addClass("clearable").html("<br/>")
                pHint = $("<p>").attr("id", "hint-text").text(trivia[sequence].hint);
                $("#main").append(helpDiv);
                $(helpDiv).append(pHint);
            });

            $(document.body).unbind().on("click", ".choice", function () {
                var userChoice = $(this).text();

                if (userChoice === currentAnswer) {
                    correct++;
                    correctSlide();
                }
                else {
                    wrong++;
                    wrongSlide();
                };
            })
        }
        else {
            endSlide();
        }
    }

    function correctSlide() {
        $(".clearable").empty();
        resetTimer();
        $("#after-answer").text("You're right!")

        var i = Math.floor(Math.random() * 10)
        $("#gif").html("<img src='" + correctArray[i] + "'>")
        var beforeDiv = $("<div>").html("<br/>");
        var afterDiv = $("<div>").html("<br/>");
        $("#gif").prepend(beforeDiv);
        $("#gif").append(afterDiv);

        $("#fact").text(trivia[sequence].fact);

        runShortTimer();
        sequence++;
    }

    function wrongSlide() {
        $(".clearable").empty();
        resetTimer();
        $("#after-answer").text("Sorry, the correct answer was " + currentAnswer);

        var i = Math.floor(Math.random() * 10);
        $("#gif").html("<img src='" + wrongArray[i] + "'>");
        var beforeDiv = $("<div>").html("<br/>");
        var afterDiv = $("<div>").html("<br/>");
        $("#gif").prepend(beforeDiv);
        $("#gif").append(afterDiv);

        $("#fact").text(trivia[sequence].fact);

        runShortTimer();
        sequence++;
    }

    function endSlide() {
        missed = 10 - correct - wrong;

        if (correct === 10) {
            $("#gif").html("<img src=assets/gifs/all-10-right.gif>");
            $("#rights").text("You got them all right!");
            $("#wrongs").text("You're too good.")
        }
        else if (wrong === 10) {
            $("#gif").html("<img src=assets/gifs/all-10-wrong.gif>");
            $("#rights").text("You got none of them right? Seriously?");
            $("#wrongs").text("Just try again and use Google this time. I won't tell.")
        }
        else if (correct + wrong != 10) {
            $("#gif").html("<img src=assets/gifs/end.gif>");
            $("#extra").text("You didn't answer " + missed + " of the questions.")
            $("#rights").text("You got " + correct + " right!")
            $("#wrongs").text("And you got " + wrong + " wrong.")
        }
        else {
            $("#gif").html("<img src=assets/gifs/end.gif>");
            $("#rights").text("You got " + correct + " right!");
            $("#wrongs").text("And you got " + wrong + " wrong.");
        }

        var restartDiv = $("<div>").html("<br/>");
        var restartButton = $("<button>").attr("id", "restart-button").addClass("clearable").text("Play Again?");
        $("#wrongs").append(restartDiv);
        $(restartDiv).append(restartButton);

        $(document.body).on("click", "#restart-button", function () {
            restartGame();
        })
    }

    function runTimer() {
        clearInterval(intervalId);
        intervalId = setInterval(qDecrement, 1000);
    }

    function stopTimer() {
        clearInterval(intervalId);
    }
    
    function qDecrement() {
        qTimer--;
        
        $("#count-down").text("Seconds left: " + qTimer);
        
        if (qTimer === 0) {
            $(".clearable").empty();
            stopTimer();
            resetTimer();
            wrongSlide();
        }
    }
    
    function runShortTimer () {
        clearInterval(shortInterval);
        shortInterval = setInterval(shortDecrement, 1000);
    }

    function stopShortTimer() {
        clearInterval(shortInterval);
    }

    function shortDecrement() {
        shortTimer--;

        if (shortTimer === 0) {
            $(".clearable").empty();
            stopShortTimer();
            resetTimer();
            runTimer();
            writeQuestion();
        }
    }
    
    function resetTimer() {
        qTimer = 20;
        shortTimer = 8;
    }

    function restartGame() {
        sequence = 0;
        correct = 0;
        wrong = 0;
        $(".clearable").empty();
        resetTimer();
        runTimer();
        writeQuestion();
    }

    $("#start").on("click", function () {
        $("#greeting").hide();
        $("#start").hide();
        runTimer();
        writeQuestion();
    })

});