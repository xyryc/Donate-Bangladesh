document
  .getElementById("donate-button-noakhali")
  .addEventListener("click", function () {
    const balance = getTextFieldValueById("balance");

    const donationAmount = getInputFieldValueById("donation-amount-noakhali");
    const noakhaliBalance = getTextFieldValueById("noakhali-total-balance");

    if (
      donationAmount > balance ||
      isNaN(donationAmount) ||
      donationAmount <= 0
    ) {
      alert("Invalid Donation Amount");
      return;
    } else {
      const noakhaliNewBalance = noakhaliBalance + donationAmount;

      setBalance("noakhali-total-balance", noakhaliNewBalance);

      const newBalance = balance - donationAmount;
      setBalance("balance", newBalance);

      showModal();

      const currentDate = new Date();

      const div = document.createElement("div");
      div.classList.add("space-y-3", "p-8", "border", "rounded-2xl");
      div.innerHTML = `<p class="text-xl font-bold ">${donationAmount} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
              <p class="text-base font-light">Date : ${currentDate}</p>
           `;

      document.getElementById("history-cards").appendChild(div);
    }
  });
