document.addEventListener("DOMContentLoaded", function() {
    var textLines = [
        "/* Hi, My name is Kaustubh Pandey, */",
        "/* I am a full-time Computer Science Student & a part-time */",
        "/* Web Developer! */",
        "(*^_^*)ノ",
        "// Welcome to my portfolio website!",
        "٩(◕‿◕｡)۶",
        "// I build interactive websites.",
        "// Isn't this very basic?",
        "ᕙ(`▿´)ᕗ",
        "// Let's change the background color!",
        "✌(◕‿-)✌",
        ".portfolio{",
        "backgrouond-color:#333"
    ];

    var index = 0;
    var textDisplay = document.getElementById("textDisplay");
    var colors = [
        { background: "#f0f0f0", color: "#333" }, // Initial colors
        { background: "#333", color: "#fff" }      // Changed colors
    ];

    function changeColor() {
        var color = colors[index % 2];
        document.body.style.backgroundColor = color.background;
        textDisplay.style.color = color.color;
        index++;
    }

    function typeText(text, i) {
        if (i < text.length) {
            textDisplay.innerHTML += text.charAt(i);
            if (text.charAt(i) === '\n') { // If it's a newline character, add a line break
                textDisplay.innerHTML += "<br>";
            }
            i++;
            setTimeout(function() {
                typeText(text, i);
            }, 100); // Adjust the typing speed here
        } else {
            setTimeout(nextLine, 1000); // Move to the next line after a delay
        }
    }

    function clearText() {
        textDisplay.innerHTML = "";
    }

    function nextLine() {
        index++;
        if (index < textLines.length) {
            textDisplay.innerHTML += "<br>" +"<br>"; // Add a line break before starting the next line
            typeText(textLines[index], 0);
        } else {
            setTimeout(changeColor, 500); // Adjust the delay before color change
            setTimeout(printOops, 2000);
            
        }
    }

    function printOops() {
        textDisplay.innerHTML = "Oops! 🙊🎉🎈<br>";
         // Display the message after 1.2 seconds
         setTimeout(displayMessage, 1200);
    }

    function displayMessage() {
        // clearText();

        textDisplay.innerHTML += "<br> /*Sorry for your eyes ;( <br> Black and white is so boring. Let's do something interesting! 🎨 <br> <br>";
        
        setTimeout(loadOriginalWebsite, 2000); // Load original website after 2 seconds
    }

    function loadOriginalWebsite() {
        // Load your original website here
        window.location.href = "./portfolio/kp/index.html";
    }

    typeText(textLines[index], 0);
});
