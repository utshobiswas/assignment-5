
// add event listener for donation button

const balanceAmount = document.getElementById('main-balance');
const donationSections = document.getElementsByClassName("donation-section");

for (let singleDonationSection of donationSections) {
    const donateBtn = singleDonationSection.querySelector(".donate-btn");
    const donationAmountSpan = singleDonationSection.querySelector("span");

    const inputField = singleDonationSection.querySelector('input');

    donateBtn.addEventListener('click', function () {
        // updating the section donation
        const amount = Number(inputField.value);
        if (isNaN(amount) || amount > 5000 || amount <= 0) {
            inputField.value = null;
            alert('Invalid Donation Amount');
            return;
        }
        // if (isNaN(amount) || amount == 0) {
        //     inputField.value = null;
        //     return;
        // }
        const sectionDonation = Number(donationAmountSpan.innerText);
        const updateAmount = sectionDonation + amount;
        donationAmountSpan.innerText = updateAmount;

        // updating Main Balance
        const currentBalance = Number(balanceAmount.innerText);
        const updateBalance = currentBalance - amount;
        balanceAmount.innerText = updateBalance;
        inputField.value = null;
    })


}









// history button tab functionality

const historyTab = document.getElementById('history-tab');
const donationTab = document.getElementById("donation-tab");
historyTab.addEventListener("click", function () {
    historyTab.classList.add(
        "bg-primary",
        "text-primary-txt",
        "border-none"
    );

    donationTab.classList.remove(
        "bg-primary",
        "text-primary-txt",
        "border-none"
    );
    donationTab.classList.add("border-2");

    document.getElementById('donation-cards').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
});

donationTab.addEventListener('click', function () {
    donationTab.classList.add(
        "bg-primary",
        "text-primary-txt",
        "border-none"
    );
    historyTab.classList.remove(
        "bg-primary",
        "text-primary-txt",
        "border-none"
    );

    document.getElementById('donation-cards').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');
});



// history tab items
const historyItem = document.createElement("div");
historyItem.className = "border-2 border-secondary rounded-2xl p-8";

historyItem.innerHTML = `
    <p></p>
    <p class="">${new Date().toLocaleDateString()}</p>
    // needed to add more field
    
    `;

const historyContainer = document.getElementById("history-list");

historyContainer.insertBefore(historyItem, historyContainer.firstChild);