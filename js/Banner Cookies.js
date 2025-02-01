document.addEventListener("DOMContentLoaded", function () {
    if (!localStorage.getItem("cookieConsent")) {
        document.getElementById("cookieBanner").classList.add("show");
    }
});

function handleCookies(choice) {
    if (choice === "accept") {
        localStorage.setItem("cookieConsent", JSON.stringify({ analytics: true, marketing: true, functional: true }));
    } else {
        localStorage.setItem("cookieConsent", JSON.stringify({ analytics: false, marketing: false, functional: false }));
    }
    closeBanner();
}

function showCustomizeBanner() {
    document.getElementById("cookieBanner").classList.remove("show");
    document.getElementById("customizeBanner").classList.add("show");
}

function saveCustomization() {
    const consentData = {
        analytics: document.getElementById("analytics").checked,
        marketing: document.getElementById("marketing").checked,
        functional: document.getElementById("functional").checked
    };
    localStorage.setItem("cookieConsent", JSON.stringify(consentData));
    closeBanner();
}

function closeCustomizeBanner() {
    document.getElementById("customizeBanner").classList.remove("show");
    document.getElementById("cookieBanner").classList.add("show");
}

function closeBanner() {
    document.getElementById("cookieBanner").classList.remove("show");
    document.getElementById("customizeBanner").classList.remove("show");
}

function showSettings() {
    document.getElementById("customizeBanner").classList.add("show");
}
