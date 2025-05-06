document.getElementById("akanForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const dobInput = document.getElementById("dob").value;
  const gender = document.getElementById("gender").value;
  const result = document.getElementById("result");

  if (!dobInput || !gender) {
    result.textContent = "Please fill out all fields.";
    return;
  }

  const birthDate = new Date(dobInput);
  const dayIndex = birthDate.getDay();

  const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];
  const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",
  ];

  let akanName;

  if (gender === "male") {
    akanName = maleNames[dayIndex];
  } else if (gender === "female") {
    akanName = femaleNames[dayIndex];
  } else {
    result.textContent = "Invalid gender selected.";
    return;
  }

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  result.innerHTML = `
    You were born on a <strong>${daysOfWeek[dayIndex]}</strong>.<br>
    Your Akan name is <strong>${akanName}</strong>.
  `;
});
