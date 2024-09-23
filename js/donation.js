// donation tab

document.getElementById("donation-tab").addEventListener("click", () => {
    const historyTab = getTheId("history-tab")
    const donationTab = getTheId("donation-tab")
  
  
    removeColors(historyTab, "bg-primary-color")
    addColors(donationTab, "bg-primary-color")
  
    const donationSection = getTheId("donation-section")
    removeClass(donationSection,"hidden")
  
    const historySection = getTheId("history-section")
    addClass(historySection, "hidden")
  });
  
  document.getElementById("blog-btn").addEventListener("click", () => {
    window.location.href = "blog.html";
  });