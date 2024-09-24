console.log('running.............');





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
});