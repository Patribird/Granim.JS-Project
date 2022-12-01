window.onload = function() {
    // Set up onclick handler for Login button
    let loginBtn = document.getElementById("login-button");
    loginBtn.onclick = validateInfo;
}

function validateInfo() {
    let allInfoValid = true;

    clearErrorMessage();
    
    let emailValue = document.getElementById("email").value;
    emailValue = emailValue.trim();
    if (emailValue == "") {
        let errorMessage = document.getElementById("error-message");
        errorMessage.innerHTML = "Invalid Email or Password.";
        allInfoValid = false;
    }

    let passwordValue = document.getElementById("password").value;
    passwordValue = passwordValue.trim();
    if (passwordValue == "") {
        let errorMessage = document.getElementById("error-message");
        errorMessage.innerHTML = "Invalid Email or Password.";
        allInfoValid = false;
    }

    if (allInfoValid) {
        document.getElementById("home-page").submit();
    }
}

/**
 * Clear out error message when function is called
 */
function clearErrorMessage() {
    document.getElementById("error-message").innerHTML = "";
}


// Setting for the canvas background and button
var granimInstance = new Granim({
    element: '#canvas-basic',
    direction: 'diagonal',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#B3FFAB', '#12FFF7'],
                ['#ADD100', '#7B920A'],
                ['#1A2980', '#26D0CE'],
                ['#9D50BB', '#6E48AA'],
                ['#4776E6', '#8E54E9'],
            ],
            transitionSpeed: 1000
        }
    }
});

// Login button
var granimInstance = new Granim({
    element: '#login-canvas',
    direction: 'diagonal',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#B3FFAB', '#12FFF7'],
                ['#ADD100', '#7B920A'],
                ['#1A2980', '#26D0CE'],
                ['#9D50BB', '#6E48AA'],
                ['#4776E6', '#8E54E9'],
            ],
            transitionSpeed: 1000
        }
    }
});