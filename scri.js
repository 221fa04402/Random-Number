function generateRandomNumber() {
    const minValue = parseInt(document.getElementById('minValue').value);
    const maxValue = parseInt(document.getElementById('maxValue').value);
    if (isNaN(minValue) || isNaN(maxValue) || minValue > maxValue) {
        alert("Please enter valid numbers with min <= max");
        return;
    }
    const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    document.getElementById('randomNumber').textContent = randomNumber;
}