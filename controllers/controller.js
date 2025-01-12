function getUserInput() {
  const username = document.getElementById("nameInput").value;
  if (username.length < 2) {
    alert("Please enter at least two characters");
    return;
  } else {
    const soulAge = calculateAge(username.length);
    displayResult(username, soulAge);
  }
}

function calculateAge(length) {
  return Math.floor(Math.random() * 10) * ((length - 1) % 9) + 1;
}

function displayResult(username, soulAge) {
  const inputContainer = document.getElementById("inputContainer");
  inputContainer.innerHTML = `
    <div>
      <h2>Hello, ${username}!</h2>
      <p>Your soul age is: <strong>${soulAge}</strong></p>
      <button onclick="goBack()">Previous</button>
    </div>
  `;
}

function goBack() {
  const inputContainer = document.getElementById("inputContainer");
  inputContainer.innerHTML = `
    <input type="text" id="nameInput" placeholder="Enter your name">
    <button id="submit" onclick="getUserInput()">Submit</button>
  `;
}
