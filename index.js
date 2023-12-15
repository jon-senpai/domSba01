document.body.style.backgroundColor = "#4682b4";
document.addEventListener("DOMContentLoaded", function () {
    function handleButtonClick(button) {
        if (button.classList.contains('rightAnswer')) {
            alert("Correct!");
            // Update the text content of the h2 element
            document.getElementById('question1').textContent = 'Correct! The Bulls won the NBA FINALS in 1997.';
        } else {
            alert("Incorrect");
            // Update the text content of the h2 element
            document.getElementById('question1').textContent = 'Incorrect! The Bulls won the NBA FINALS in 1997.';
        }
    }

    // Event listeners for the first set of buttons ('mj')
    const mjButtons = document.querySelectorAll('.mj button');
    mjButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            handleButtonClick(button);
        });

        // Use parent-child-sibling relationship to navigate
        const parentDiv = button.parentNode; // Get the parent div
        const nextSiblingButton = button.nextElementSibling; // Get the next sibling button
        const previousSiblingButton = button.previousElementSibling; // Get the previous sibling button

        console.log("Parent Div:", parentDiv);
        console.log("Next Sibling Button:", nextSiblingButton);
        console.log("Previous Sibling Button:", previousSiblingButton);
    });

    // Event listeners for the second set of buttons ('lebron')
    const lebronButtons = document.querySelectorAll('.lebron button');
    lebronButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            handleButtonClick(button);
        });
    });

    // Event listeners for the third set of buttons ('logo')
    const logoButtons = document.querySelectorAll('.logo button');
    logoButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            handleButtonClick(button);
        });
    });

    // Create a new paragraph element using createElement
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'This is a new paragraph added using createElement.';
    
    // Append the new paragraph to the body
    document.body.appendChild(newParagraph);
});
