const themeButton = document.getElementById("themeToggle");

themeButton.addEventListener("click", () => {

    if(document.body.getAttribute("data-theme") === "dark"){

        document.body.removeAttribute("data-theme");

        themeButton.innerHTML = "🌙";

    }else{

        document.body.setAttribute("data-theme","dark");

        themeButton.innerHTML = "☀️";

    }

});