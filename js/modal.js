function showModal() {
  document.getElementById("donation-modal").classList.add("flex");
  document.getElementById("donation-modal").classList.remove("hidden");
}

document.getElementById("closeBtn").addEventListener("click", function () {
  document.getElementById("donation-modal").classList.add("hidden");
});
