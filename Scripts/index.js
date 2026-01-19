// Function to change the mood
function changeMood(mood) {
    const moodDisplay = document.getElementById('mood-display');
    const body = document.body;

    if (!mood) {
        console.error("Mood is undefined");
        return;
    }

    // Set text based on mood
    moodDisplay.innerText = `Current Mood: ${mood}`;

    // Change background color based on mood
    if (mood === 'Happy') {
        body.style.backgroundColor = '#FFD700'; // Gold
    } else if (mood === 'Sad') {
        body.style.backgroundColor = '#708090'; // SlateGrey
    } else {
        body.style.backgroundColor = '#FFFFFF'; // White
    }
}

// Event Listener for button click
document.getElementById('mood-btn').addEventListener('click', function() {
    changeMood('Happy');
});