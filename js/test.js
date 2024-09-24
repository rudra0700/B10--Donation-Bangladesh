const cardsContainer = document.getElementById("cards-container");
const cards = cardsContainer.querySelectorAll(".card");




for (const card of cards) {
  const cartBtn = card.querySelector(".cart-btn");
  cartBtn.addEventListener("click", () =>{
    
    const donationInputValue = Number(card.querySelector(".donation-amount").value);
    const totalDonationValue = Number(card.querySelector(".total-donation").innerText);
    const availableBalance = Number(document.getElementById("available-balance").innerText);

    if(isNaN(donationInputValue) || donationInputValue <= 0 || card.querySelector(".donation-amount").value == ''){
      return alert("Invalid donation amount")
    }

    if(donationInputValue > availableBalance){
      alert("you do not have sufficient balance to donate");
      return
    }

    const totalDonationAmount = donationInputValue + totalDonationValue;
    card.querySelector(".total-donation").innerText = totalDonationAmount.toFixed(2);
    
    
    const newAvailableBalance  = updateBalance(availableBalance, donationInputValue);
    document.getElementById("available-balance").innerText = newAvailableBalance;
    
    card.querySelector(".donation-amount").value = ''

    const cardTitle = card.querySelector("h4").innerText;

    addHistory(donationInputValue, cardTitle)

  })
}


//   history tab

document.getElementById("history-tab").addEventListener("click", () => {
  const historyTab = document.getElementById("history-tab")
  const donationTab = document.getElementById("donation-tab")

  historyTab.classList.add("bg-primary-color");
  donationTab.classList.remove("bg-primary-color")

  const cardSection = document.getElementById("donation-section");
  cardSection.classList.add("hidden")

  const historySection = document.getElementById("history-section");
  historySection.classList.remove("hidden")
});

// donation tab

document.getElementById("donation-tab").addEventListener("click", () => {
  const historyTab = document.getElementById("history-tab")
  const donationTab = document.getElementById("donation-tab")

  donationTab.classList.add("bg-primary-color");
  historyTab.classList.remove("bg-primary-color")

  const cardSection = document.getElementById("donation-section");
  cardSection.classList.remove("hidden")

  const historySection = document.getElementById("history-section");
  historySection.classList.add("hidden")
});

document.getElementById("blog-btn").addEventListener("click", () => {
  window.location.href = "blog.html";
});








