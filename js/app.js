(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

var typed = new Typed(".typing",{
    strings : ["Programmer","Django Developer","Designer","Linux Lover","AI Lover","Pre-Final Year Student","ML Ethusiast"],
    startDelay: 1000,
    typeSpeed : 120,
    backSpeed : 80,
    backDelay : 1000,
    showCursor: false,
    loopCount: Infinity,
    shuffle: true,
    loop : true
})
let mixer = mixitup(".portfolios",{
    selectors: {
        target: ".portfolio-item",
    },
    animation: {
        duration: 600,
    },
});