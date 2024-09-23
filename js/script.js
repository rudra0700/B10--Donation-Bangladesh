
// cart 1
document.getElementById("cart-one-btn").addEventListener("click", () => {
  const inputFieldValue = getInputValue("amount-field");

  if(isNaN(inputFieldValue) || document.getElementById("amount-field").value === '' || inputFieldValue <= 0){
   return  showAlert("Invalid Donation Amount")
  }

  const noakhaliDonationAmount = getInnerTextValue("noakhali-donation-amount")

  const totalDonationAmount = inputFieldValue + noakhaliDonationAmount;
  updateInnerText("noakhali-donation-amount", totalDonationAmount)

  const availableBalance = getInnerTextValue("available-balance");

  if(inputFieldValue > availableBalance){
    return showAlert("you do not have sufficient balance to donate")
  }

  const newAvailableBalance = updateBalance(availableBalance, inputFieldValue);
  updateInnerText("available-balance", newAvailableBalance)

  const historySection = getTheId("history-section")
  const div = createElement("div")
  addColors(div, "border-2", "rounded-lg", "p-5", "space-y-2")
  div.innerHTML = `
  <h4 class="font-bold">${inputFieldValue} Taka is Donated for famine-2024 at Noakhali, Bangladesh</h4>
  <p class="text-sm">${new Date()}</p>
  `;
  historySection.appendChild(div);
  updateInputValue("amount-field", "")

});

// cart 2

document.getElementById("cart-two-btn").addEventListener("click", () => {
  const inputFieldValue = getInputValue("feni-amount-field")

  if(isNaN(inputFieldValue) || document.getElementById("feni-amount-field").value === '' || inputFieldValue <= 0){
    return  showAlert("Invalid Donation Amount")
 
   }

  const feniDonationAmount = getInnerTextValue("feni-donation-amount")

  const totalDonationAmount = inputFieldValue + feniDonationAmount;
    updateInnerText("feni-donation-amount", totalDonationAmount)

    const availableBalance = getInnerTextValue("available-balance");

  if(inputFieldValue > availableBalance){
    return showAlert("you do not have sufficient balance to donate")
  }

  const newAvailableBalance = updateBalance(availableBalance, inputFieldValue);
  updateInnerText("available-balance", newAvailableBalance)

  const historySection = getTheId("history-section")
  const div = createElement("div")
  addColors(div, "border-2", "rounded-lg", "p-5", "space-y-2")
  div.innerHTML = `
  <h4 class="font-bold">${inputFieldValue} Taka is Donated for flood relief at feni, Bangladesh</h4>
 <p class="text-sm">${new Date()}</p>
  `;
  historySection.appendChild(div);
  updateInputValue("feni-amount-field", "")
});

// cart 3

document.getElementById("cart-three-btn").addEventListener("click", () => {
  const inputFieldValue = getInputValue("quota-amount-field")

  if(isNaN(inputFieldValue) || document.getElementById("quota-amount-field").value === '' || inputFieldValue <= 0){
    return  showAlert("Invalid Donation Amount")
   }

  const quotaDonationAmount = getInnerTextValue("quota-donation-amount")

  const totalDonationAmount = inputFieldValue + quotaDonationAmount;
    updateInnerText("quota-donation-amount", totalDonationAmount)

    const availableBalance = getInnerTextValue("available-balance");

  if(inputFieldValue > availableBalance){
    return showAlert("you do not have sufficient balance to donate")
  }

  const newAvailableBalance = updateBalance(availableBalance, inputFieldValue);
  updateInnerText("available-balance", newAvailableBalance)

  const historySection = getTheId("history-section")
  const div = createElement("div")
  addColors(div, "border-2", "rounded-lg", "p-5", "space-y-2")
  div.innerHTML = `
    <h4 class="font-bold">${inputFieldValue} Taka is Donated for injured in the Quota Movement, Bangladesh</h4>
    <p class="text-sm">${new Date()}</p>
    `;
  historySection.appendChild(div);
  updateInputValue("quota-amount-field", "");
});

// history tab




