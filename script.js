function imgSlider(e) {
    document.querySelector(".heading").src = e;
}

const btn = document.querySelectorAll(".btn");
const display = document.querySelector(".number");

btn.forEach((button) => {
    button.addEventListener("click", () => {
        display.innerHTML = "0" + button.value;
    })
});

var t1 = gsap.timeline({});
t1.from(".logo", 1, {
    y: 200, 
    opacity: 0,
});
t1.from("nav ul li", 1, {
    y: 200, 
    stagger: 0.2,
    opacity: 0,
})
t1.from(".elmt", 1, {
    y: 500, 
    stagger: 0.2,
    opacity: 0,
})