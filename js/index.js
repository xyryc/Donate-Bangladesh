document
  .getElementById("donate-button-noakhali")
  .addEventListener("click", function () {
    const balance = getTextFieldValueById("balance");
    const donationAmount = getInputFieldValueById("donation-amount-noakhali");
    const cardBalance = getTextFieldValueById("noakhali-total-balance");
    const donationTitle = getTextById("noakhali-donation-title");

    if (
      donationAmount > balance ||
      isNaN(donationAmount) ||
      donationAmount <= 0
    ) {
      alert("Invalid Donation Amount");
      return;
    } else {
      const cardNewBalance = cardBalance + donationAmount;
      setBalance("noakhali-total-balance", cardNewBalance);
      const newBalance = balance - donationAmount;
      setBalance("balance", newBalance);
      showModal();
      setNotification(donationAmount, donationTitle);
    }
  });

document
  .getElementById("donate-button-feni")
  .addEventListener("click", function () {
    const balance = getTextFieldValueById("balance");
    const donationAmount = getInputFieldValueById("donation-amount-feni");
    const cardBalance = getTextFieldValueById("feni-total-balance");
    const donationTitle = getTextById("feni-donation-title");

    if (
      donationAmount > balance ||
      isNaN(donationAmount) ||
      donationAmount <= 0
    ) {
      alert("Invalid Donation Amount");
      return;
    } else {
      const cardNewBalance = cardBalance + donationAmount;
      setBalance("feni-total-balance", cardNewBalance);
      const newBalance = balance - donationAmount;
      setBalance("balance", newBalance);
      showModal();
      setNotification(donationAmount, donationTitle);
    }
  });

document
  .getElementById("donate-button-quota-aid")
  .addEventListener("click", function () {
    const balance = getTextFieldValueById("balance");
    const donationAmount = getInputFieldValueById("donation-amount-quota-aid");
    const cardBalance = getTextFieldValueById("quota-aid-total-balance");
    const donationTitle = getTextById("quota-aid-donation-title");

    if (
      donationAmount > balance ||
      isNaN(donationAmount) ||
      donationAmount <= 0
    ) {
      alert("Invalid Donation Amount");
      return;
    } else {
      const cardNewBalance = cardBalance + donationAmount;
      setBalance("quota-aid-total-balance", cardNewBalance);
      const newBalance = balance - donationAmount;
      setBalance("balance", newBalance);
      showModal();
      setNotification(donationAmount, donationTitle);
    }
  });
