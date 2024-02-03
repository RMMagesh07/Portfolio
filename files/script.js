
var typed = new Typed(".text", {
    strings: ["Programming" , "Ui/Ux Designing" , "Web Development","App Development","Innovation","Problem Solving"],
    typeSpeed:80,
    backSpeed:80,
    backDelay:1000,
    loop:true
});


const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})

