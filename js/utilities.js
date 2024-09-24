function updateBalance(availableBalance, donationInputValue){
  return availableBalance - donationInputValue
}


function addHistory(donationInputValue, cardTitle){
const historySection = document.getElementById("history-section");
const div = document.createElement("div");
div.classList.add("border-2", "rounded-lg", "p-5", "space-y-2");
div.innerHTML = `
<h4 class="font-bold">${donationInputValue} Taka is ${cardTitle}</h4>
<p class="text-sm">${new Date()}</p>
`;
historySection.appendChild(div)
}
