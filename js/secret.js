document.addEventListener("DOMContentLoaded", function () {

    const logo = document.getElementById("secret-logo");

    if (!logo) return;

    let clickCount = 0;

    logo.addEventListener("click", function (e) {

        e.preventDefault();

        clickCount++;

        if (clickCount === 5) {

            const password = prompt("Enter secret password:");

            if (password === "Fengyin") {

                window.location.href = "/lab/";

            } else {

                alert("Wrong password");

            }

            clickCount = 0;
        }

    });

});