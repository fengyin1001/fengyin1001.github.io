// Secret Lab Entrance

let secretClick = 0;
let timer = null;

document.addEventListener("DOMContentLoaded", function () {

    const logo = document.getElementById("secret-logo");

    if (!logo) {
        console.log("secret logo not found");
        return;
    }


    logo.addEventListener("click", function (e) {

        e.preventDefault();

        secretClick++;

        clearTimeout(timer);

        timer = setTimeout(() => {
            secretClick = 0;
        }, 2000);


        if (secretClick === 5) {

            secretClick = 0;

            let password = prompt(
                "🔐 Secret Laboratory\n请输入访问密码:"
            );


            if (password === "Fengyin") {

                window.location.href =
                "/lab/";

            } else {

                alert("❌ Access Denied");

            }

        }

    });

});