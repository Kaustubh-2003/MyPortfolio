// alert("ha ho gya connect!")


document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("navbar");
    navbar.classList.add("loaded");

    var right = document.querySelector(".right");
    right.classList.add("loaded");
});

document.getElementById("downloadBtn").addEventListener("click", function() {
    // Replace "path/to/your/resume.pdf" with the actual path to your resume file
    var resumePath = "./images/Kaustubh_Pandey.pdf";
    
    // Create a link element
    var link = document.createElement("a");
    
    // Set the href and download attributes
    link.setAttribute("href", resumePath);
    link.setAttribute("download", "resume.pdf");
    
    // Simulate a click on the link element
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});


document.addEventListener('DOMContentLoaded', function(event){
    // array with texts to type in typewriter
    var dataText = ["full stack developer", "software engineer", "web developer", "coder", "programmer"];
    
    // type one text in the typewriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
        // check if text isn't finished yet
        if (i < (text.length)) {
            // add next character to span
            document.getElementById("typewriter-text").innerHTML = text.substring(0, i+1) + '<span aria-hidden="true"></span>';

            // wait for a while and call this function again for next character
            setTimeout(function() {
                typeWriter(text, i + 1, fnCallback);
            }, 100); // Adjust the typing speed here (in milliseconds)
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
            // call callback after timeout
            setTimeout(fnCallback, 700);
        }
    }

    // start a typewriter animation for a text in the dataText array
    function startTextAnimation(i) {
        if (typeof dataText[i] == 'undefined') {
            setTimeout(function() {
                startTextAnimation(0);
            }, 20); // Adjust the delay before restarting the animation (in milliseconds)
        } else if (i < dataText.length) {
            // text exists! start typewriter animation
            typeWriter(dataText[i], 0, function() {
                // after callback (and whole text has been animated), start next text
                startTextAnimation(i + 1);
            });
        }
    }
    
    // start the text animation
    startTextAnimation(0);
});

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.techbut');
    const specs = document.querySelectorAll('.technica_specs');
    for (let i = 1; i < specs.length; i++) {
        specs[i].style.display = 'none';
    }
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            specs.forEach(spec => {
                spec.style.display = 'none'; // Hide all specs initially
            });
            document.getElementById(index + 1).style.display = 'inline-block'; // Show corresponding specs
        });
    });
});