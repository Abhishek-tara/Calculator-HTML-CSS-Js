let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".btn");
let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear");

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        let value = e.target.dataset.num;
        screen.value += value;
    })
});

equal.addEventListener('click', function (e) {
    if (screen.value === "") {
        screen.value = "Enter value";
    } else {
        let ansr = eval(screen.value);
        screen.value = ansr;
    }
});

clear.addEventListener('click', function (e) {
    screen.value = "";
});