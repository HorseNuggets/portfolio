const css = document.getElementById("css");

function loadStyle() {
    const button = document.getElementById("style-toggle");

    if (localStorage.getItem("style") === "light") {
        css.href = "./styles/light.css";

        if (button) {
            button.innerText = "Dark Theme";
        }
    } else {
        css.href = "./styles/dark.css";

        if (button) {
            button.innerText = "Light Theme";
        }
    }
}

loadStyle();

function toggleStyle() {
    if (localStorage.getItem("style") === "light") {
        localStorage.setItem("style", "dark");
    } else {
        localStorage.setItem("style", "light");
    }

    loadStyle();
}