// Function to set the greeting text with the name
function setGreetingText(name) {
    const greeting = document.getElementById('greeting');
    const timeGreeting = getTimeOfDayGreeting();
    greeting.innerText = `${timeGreeting}, ${name}!`;
}

// Function to get the Operator's name from localStorage
function getStoredName() {
    const storedName = localStorage.getItem('operator');
    if (storedName) {
        setGreetingText(storedName);
    } else {
        setDefaultGreeting();
    }
}

// Function to get the time of day greeting
function getTimeOfDayGreeting() {
    const date = new Date();
    const hour = date.getHours();

    let greetingText = 'Hello';

    if (hour >= 5 && hour < 12) {
        greetingText = 'Good morning';
    } else if (hour >= 12 && hour < 18) {
        greetingText = 'Good afternoon';
    } else if (hour >= 18 || hour < 5) {
        greetingText = 'Good evening';
    }

    return greetingText;
}

// Function to set the default greeting based on the current time
function setDefaultGreeting() {
    const name = 'Fwiend';
    setGreetingText(name);
}

// Function to handle the click event on the greeting element
function handleGreetingClick() {
    const name = prompt("Enter your name:");
    if (name) {
        localStorage.setItem('operator', name);
        setGreetingText(name);
    }
}

// Add a click event listener to the greeting element
const greeting = document.getElementById('greeting');
greeting.addEventListener('click', handleGreetingClick);

// Set the greeting text with the stored name (if available) or the default greeting based on the current time
getStoredName();


document.getElementById('search-box').focus();

function equalizeColumnHeights() {
    const leftColumn = document.querySelector('.left-column');
    const rightColumn = document.querySelector('.right-column');

    // Reset the heights to their original values before comparing
    leftColumn.style.height = '';
    rightColumn.style.height = '';

    const leftColumnHeight = leftColumn.offsetHeight;
    const rightColumnHeight = rightColumn.offsetHeight;

    if (leftColumnHeight > rightColumnHeight) {
        rightColumn.style.height = `${leftColumnHeight}px`;
    } else {
        leftColumn.style.height = `${rightColumnHeight}px`;
    }
}

// Call the function initially
equalizeColumnHeights();

// Call the function when the window is resized
window.addEventListener('resize', equalizeColumnHeights);
