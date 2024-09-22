document
  .getElementById("history-button")
  .addEventListener("click", function () {
    document.getElementById("donation-cards").classList.add("hidden");
    document.getElementById("history-cards").classList.remove("hidden");

    document.getElementById("donation-button").classList.remove("bg-btnGreen");
    document
      .getElementById("donation-button")
      .classList.add("btn-outline", "text-gray-500");
    document.getElementById("history-button").classList.add("bg-btnGreen");
    document
      .getElementById("history-button")
      .classList.remove("btn-outline", "text-gray-500");
  });

  document
  .getElementById("donation-button")
  .addEventListener("click", function () {
    document.getElementById("history-cards").classList.add("hidden");
    document.getElementById("donation-cards").classList.remove("hidden");

    document.getElementById("history-button").classList.remove("bg-btnGreen");
    document
      .getElementById("history-button")
      .classList.add("btn-outline", "text-gray-500");
    document.getElementById("donation-button").classList.add("bg-btnGreen");
    document
      .getElementById("donation-button")
      .classList.remove("btn-outline", "text-gray-500");
  });
