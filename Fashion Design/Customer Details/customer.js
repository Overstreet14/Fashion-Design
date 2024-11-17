document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementsById("customerForm");
    const displayDetails = document.getElementById("displayDetails");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const fullName = document.documentElementById("fullName").value.trim();
        const email = document.documentElementById("email").value.trim();
        const phone = document.documentElementById("phone").value.trim();
        const fabric = document.documentElementById("fabric").value;
        const style = document.documentElementById("style").value.trim();
        const color = document.documentElementById("color").value;
        const chest = document.documentElementById("chest").value;
        const waist = document.documentElementById("waist").value;
        const hips = document.documentElementById("hips").value;
        const sleeve = document.documentElementById("sleeve").value;
        const inseam = document.documentElementById("inseam").value;

        document.getElementById("displayName").textContent = fullName;
        document.getElementById("displayEmail").textContent = email;
        document.getElementById("displayPhone").textContent = phone;
        document.getElementById("displayFabric").textContent = fabric;
        document.getElementById("displayStyle").textContent = style;
        document.getElementById("displayColor").style.backgroundColor = color;
        document.getElementById("displayChest").textContent = chest;
        document.getElementById("displayWaist").textContent = waist;
        document.getElementById("displayHips").textContent = hips;
        document.getElementById("displaySleeve").textContent = sleeve;
        document.getElementById("displayInseam").textContent = inseam;

        form.style.display ="none";
        displayDetails.style.display ="block";
    });
});