//   history tab

document.getElementById("history-tab").addEventListener("click", () => {
    const historyTab = getTheId("history-tab")
    const donationTab = getTheId("donation-tab")
  
    addColors(historyTab, "bg-primary-color")
    removeColors(donationTab, "bg-primary-color")
  
    const donationSection = getTheId("donation-section")
    addClass(donationSection, "hidden")
  
    const historySection = getTheId("history-section")
    removeClass(historySection, "hidden")
  });
