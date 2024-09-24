
// add event listener for donation button

const balanceAmount = document.getElementById('main-balance');
const donationSections = document.getElementsByClassName("donation-section");

for (let singleDonationSection of donationSections) {
    const donateBtn = singleDonationSection.querySelector(".donate-btn");
    const donationAmountSpan = singleDonationSection.querySelector("span");

    const donationField = singleDonationSection.querySelector(".donate-text");

    const inputField = singleDonationSection.querySelector('input');

    donateBtn.addEventListener('click', function () {
        // updating the section donation
        const amount = Number(inputField.value);
        
        if (isNaN(amount) || amount <= 0 || amount > parseFloat(balanceAmount.innerText)) {
            inputField.value = null;
            alert('Invalid Donation Amount');
            document.getElementById("my_modal_5").close();
            return;
        }
        // if (isNaN(amount) || amount == 0) {
        //     inputField.value = null;
        //     return;
        // }

        const sectionDonation = Number(donationAmountSpan.innerText);
        const updateAmount = sectionDonation + amount;
        donationAmountSpan.innerText = updateAmount.toFixed(2);
        // updating Main Balance
        const currentBalance = Number(balanceAmount.innerText);
        const updateBalance = currentBalance - amount;
        balanceAmount.innerText = updateBalance.toFixed(2);
        inputField.value = null;
        document.getElementById("my_modal_5").showModal();
        // document.getElementById("my_modal_5").preventDefault();

        // history tab items
        const historyItem = document.createElement("div");
        historyItem.className = "border-2 border-secondary rounded-2xl p-8";

        historyItem.innerHTML = `
    <p class="text-xl font-bold text-primary-txt"> ${amount.toFixed(2)} Taka is Donated for ${donationField.innerText}</p>
    <p class="font-light">Date: ${new Date().toString()}</p>
        
  
    
    `;

        const historyContainer = document.getElementById("history-list");

        historyContainer.insertBefore(historyItem, historyContainer.firstChild);
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
// const historyItem = document.createElement("div");
// historyItem.className = "border-2 border-secondary rounded-2xl p-8";

// historyItem.innerHTML = `
//     <p class="text-xs">Donation: $${amount.toFixed(2)}</p>
//     <p class="text-xs">${new Date().toLocaleDateString()}</p>
  
    
//     `;

// const historyContainer = document.getElementById("history-list");

// historyContainer.insertBefore(historyItem, historyContainer.firstChild);