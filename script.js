document.addEventListener("DOMContentLoaded", function() {
    const noteInput = document.getElementById("note-input");
    const addButton = document.getElementById("add-button");
    const notesList = document.getElementById("notes-list");

    addButton.addEventListener("click", function() {
        const noteText = noteInput.value;
        if (noteText.trim() !== "") {
            const noteItem = document.createElement("div");
            noteItem.textContent = noteText;
            
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.classList.add("delete-button");
            deleteButton.addEventListener("click", function() {
                notesList.removeChild(noteItem);
            });

            noteItem.appendChild(deleteButton);
            notesList.appendChild(noteItem);
            noteInput.value = "";
        }
    });
});


let countdownInterval;

function startCountdown() {
    const targetDateInput = document.getElementById("target-date");
    const targetDate = new Date(targetDateInput.value).getTime();

    countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance <= 0) {
            clearInterval(countdownInterval);
            document.getElementById("countdown").innerHTML = "Time's Up!";
            // Add your alarm logic here (e.g., play a sound or display a message)
        } else {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
    }, 1000);
}

function displayTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = hours + ":" + minutes + ":" + seconds;
    
    document.getElementById("current-time").innerHTML = timeString;
}

// Update the time every second
setInterval(displayTime, 1000);

// Display the initial time
displayTime();