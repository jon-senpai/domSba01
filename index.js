document.body.style.backgroundColor = "#4682b4";
document.addEventListener("DOMContentLoaded", function () {
    function handleButtonClick(button) {
        if (button.classList.contains('rightAnswer')) {
            alert("Correct!");
            
            document.getElementById('question1').textContent = 'Correct! The Bulls won the NBA FINALS in 1997.';
        } else {
            alert("Incorrect");
          
            document.getElementById('question1').textContent = 'Incorrect! The Bulls won the NBA FINALS in 1997.';
        }
    }

  
    const mjButtons = document.querySelectorAll('.mj button');
    mjButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            handleButtonClick(button);
        });

        const parentDiv = button.parentNode; 
        const nextSiblingButton = button.nextElementSibling; 
        const previousSiblingButton = button.previousElementSibling; 

        console.log("Parent Div:", parentDiv);
        console.log("Next Sibling Button:", nextSiblingButton);
        console.log("Previous Sibling Button:", previousSiblingButton);
    });

    const lebronButtons = document.querySelectorAll('.lebron button');
    lebronButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            handleButtonClick(button);
        });
    });

    const logoButtons = document.querySelectorAll('.logo button');
    logoButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            handleButtonClick(button);
        });
    });

   
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'This is a random paragraph I legit just dont know what to put here but I met the requirement? right? lol';
    
 
    document.body.appendChild(newParagraph);
});
