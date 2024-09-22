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
    }
  });
