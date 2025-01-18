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

function getUniqueNameAndImage(soulAge) {
  const uniqueName = {
    1: "Baby Vibes",
    2: "Sippy Cup",
    3: "Snack Fiend",
    4: "Awkward Adventurer",
    5: "The Teacher",
    6: "The Healer",
    7: "The Visionary",
    8: "The Protector",
    9: "The Leader",
  };

  const uniqueImage = {
    1: "../images/baby vibes.png",
    2: "../images/sippy cup.png",
    3: "../images/snack fiend.png",
    4: "../images/awkward adventurer.png",
    5: "../images/the teacher.png",
    6: "../images/the healer.png",
    7: "../images/the visionary.png",
    8: "../images/the protector.png",
    9: "../images/the leader.png",
  };

  return {
    name: uniqueName[soulAge],
    image: uniqueImage[soulAge],
  };
}

function displayResult(username, soulAge) {
  const result = getUniqueNameAndImage(soulAge % 10);
  const inputContainer = document.getElementById("inputContainer");
  inputContainer.innerHTML = `
    <div>
      <h2>Hello, ${username}!</h2>
      <p>Your soul age is: <strong>${soulAge}</strong></p>
      <h3>Your soul type: ${result.name}</h3>
      <img id = "soulImage" src="${result.image}">
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
