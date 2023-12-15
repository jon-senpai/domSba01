document.addEventListener("DOMContentLoaded", function () {
    // Event listeners for the first set of buttons
    const mjButtons = document.querySelectorAll('.mj button');
    mjButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            if (button.classList.contains('rightAnswer')) {
                alert("Correct!");
            } else {
                alert("Incorrect");
            }
        });
    });

    // Event listeners for the second set of buttons
    const lebronButtons = document.querySelectorAll('.lebron button');
    lebronButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            if (button.classList.contains('rightAnswer')) {
                alert("Correct!");
            } else {
                alert("Incorrect");
            }
        });
    });

    // Event listeners for the third set of buttons
    const logoButtons = document.querySelectorAll('.logo button');
    logoButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            if (button.classList.contains('rightAnswer')) {
                alert("Correct!");
            } else {
                alert("Incorrect");
            }
        });
    });
});
