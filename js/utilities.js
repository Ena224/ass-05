document
  .getElementById("submit-donation-1")
  .addEventListener("click", function () {
    handleDonation(
      "donatation-amount-1",
      "total-donate-amount-1",
      "donation-title-1"
    );
  });

document
  .getElementById("submit-donation-2")
  .addEventListener("click", function () {
    handleDonation(
      "donatation-amount-2",
      "total-donate-amount-2",
      "donation-title-2"
    );
  });

document
  .getElementById("submit-donation-3")
  .addEventListener("click", function () {
    handleDonation(
      "donatation-amount-3",
      "total-donate-amount-3",
      "donation-title-3"
    );
  });

document
  .getElementById("show-donation-form")
  .addEventListener("click", function () {
    showSectionById("add-donation-form");
    toggleActiveButton("show-donation-form", "show-history-form");
  });
document
  .getElementById("show-history-form")
  .addEventListener("click", function () {
    showSectionById("add-history-form");
    toggleActiveButton("show-history-form", "show-donation-form");
  });
