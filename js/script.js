document.getElementById("cart-one-btn").addEventListener("click", () => {
  const inputFieldValue = Number(document.getElementById("amount-field").value);
  console.log(inputFieldValue);

  const noakhaliDonationAmount = Number(
    document.getElementById("noakhali-donation-amount").innerText
  );
  const totalDonationAmount = inputFieldValue + noakhaliDonationAmount;
  document.getElementById("noakhali-donation-amount").innerText =
    totalDonationAmount;

  const availableBalance = Number(
    document.getElementById("available-balance").innerText
  );
  const newAvailableBalance = availableBalance - inputFieldValue;
  document.getElementById("available-balance").innerText = newAvailableBalance;

  const historySection = document.getElementById("history-section");
  const div = document.createElement("div");
  div.classList.add("border-2", "rounded-lg", "p-5", "space-y-2");
  div.innerHTML = `
  <h4 class="font-bold">${inputFieldValue} Taka is Donated for famine-2024 at Noakhali, Bangladesh</h4>
  <p class="text-sm">Date : Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time)</p>
  `;
  historySection.appendChild(div);
  document.getElementById("amount-field").value = "";
});

// cart 2

document.getElementById("cart-two-btn").addEventListener("click", () => {
  const inputFieldValue = Number(
    document.getElementById("feni-amount-field").value
  );

  const feniDonationAmount = Number(
    document.getElementById("feni-donation-amount").innerText
  );

  const totalDonationAmount = inputFieldValue + feniDonationAmount;
  document.getElementById("feni-donation-amount").innerText =
    totalDonationAmount;

  const availableBalance = Number(
    document.getElementById("available-balance").innerText
  );

  const newAvailableBalance = availableBalance - inputFieldValue;
  document.getElementById("available-balance").innerText = newAvailableBalance;

  const historySection = document.getElementById("history-section");
  const div = document.createElement("div");
  div.classList.add("border-2", "rounded-lg", "p-5", "space-y-2");
  div.innerHTML = `
  <h4 class="font-bold">${inputFieldValue} Taka is Donated for flood relief at feni, Bangladesh</h4>
  <p class="text-sm">Date : Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time)</p>
  `;
  historySection.appendChild(div);
  document.getElementById("feni-amount-field").value = "";
});

// cart 3

document.getElementById("cart-three-btn").addEventListener("click", () => {
  const inputFieldValue = Number(
    document.getElementById("quota-amount-field").value
  );

  const quotaDonationAmount = Number(
    document.getElementById("quota-donation-amount").innerText
  );

  const totalDonationAmount = inputFieldValue + quotaDonationAmount;
  document.getElementById("quota-donation-amount").innerText =
    totalDonationAmount;

  const availableBalance = Number(
    document.getElementById("available-balance").innerText
  );

  const newAvailableBalance = availableBalance - inputFieldValue;
  document.getElementById("available-balance").innerText = newAvailableBalance;

  const historySection = document.getElementById("history-section");
  const div = document.createElement("div");
  div.classList.add("border-2", "rounded-lg", "p-5", "space-y-2");
  div.innerHTML = `
    <h4 class="font-bold">${inputFieldValue} Taka is Donated for injured in the Quota Movement, Bangladesh</h4>
    <p class="text-sm">Date : Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time)</p>
    `;
  historySection.appendChild(div);
  document.getElementById("quota-amount-field").value = "";
});

document.getElementById("history-tab").addEventListener("click", () => {
  const historyTab = document.getElementById("history-tab");
  const donationTab = document.getElementById("donation-tab");
  historyTab.classList.add("bg-primary-color");
  donationTab.classList.remove("bg-primary-color");

  const donationSection = document.getElementById("donation-section");
  donationSection.classList.add("hidden");

  const historySection = document.getElementById("history-section");
  historySection.classList.remove("hidden");
});

document.getElementById("donation-tab").addEventListener("click", () => {
  const historyTab = document.getElementById("history-tab");
  const donationTab = document.getElementById("donation-tab");
  historyTab.classList.remove("bg-primary-color");
  donationTab.classList.add("bg-primary-color");

  const donationSection = document.getElementById("donation-section");
  donationSection.classList.remove("hidden");

  const historySection = document.getElementById("history-section");
  historySection.classList.add("hidden");
});

document.getElementById("blog-btn").addEventListener("click", () => {
  window.location.href = "blog.html";
});
