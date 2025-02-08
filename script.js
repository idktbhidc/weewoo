const messages = [
    "Are you sure?",
    "Really sure??",
    "you might wanna think about this?",
    "Pwetty please...",
    "i'll bake for you btw!",
    "i am sadness.",
    "no more corny jokes for u...",
    "I will even stop being mean to you",
    "Ok fine, I will shut up now...",
    "Just kidding, say y e s"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yespage.html";
}
