const dateOfBirth = document.querySelector("#dateOfBirth");
const luckyNumber = document.querySelector("#luckyNumber");
const checkButton = document.querySelector("#checkButton");
const outputBox = document.querySelector("#outputBox");

function calculateSum(dob) {
    dob = dateOfBirth.value.replaceAll("-", "");
    let sum = 0;
    for (i = 0; i < dob.length; i++) {
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}

function compareValues(sum) {
  if (sum % luckyNumber.value === 0) {
    outputBox.innerText = "This is lucky!"
} else {
    outputBox.innerText = "This is not lucky!"
  }
}

checkButton.addEventListener("click", function checkBirthdayIsLucky() {
  const dob = dateOfBirth.value;
  if (dob && luckyNumber.value) {
      const sum = calculateSum(dob);
      compareValues(sum);
  } else {
    outputBox.innerText = "Please enter both the fields!"
  }
});
