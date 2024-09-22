function getInputFieldValueById(id) {
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);

  return inputNumber;
}

function getTextFieldValueById(id) {
  const textValue = document.getElementById(id).innerText;
  const textNumber = parseFloat(textValue);

  return textNumber;
}

function getTextById(id) {
  const text = document.getElementById(id).innerText;

  return text;
}

function setBalance(id, newBalance) {
  document.getElementById(id).innerText = newBalance;
}

function setNotification(donationAmount, donationTitle) {
  const currentDate = new Date();

  const div = document.createElement("div");
  div.classList.add("space-y-3", "p-8", "border", "rounded-2xl");
  div.innerHTML = `<p class="text-xl font-bold ">${donationAmount} Taka is Donated for ${donationTitle}</p>
          <p class="text-base font-light">Date : ${currentDate}</p>
       `;

  document.getElementById("history-cards").appendChild(div);
}
