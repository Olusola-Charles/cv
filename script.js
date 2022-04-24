const navbar = document.querySelector('.navbar')
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');
const progress = document.querySelector('.progress-bar-wrapper');
const progressBarPercents = document.querySelectorAll('#percent')
const arr = []
for(let per of progressBarPercents) {
    arr.push(per.innerText)
}

const navbarOffsetTop = navbar.offsetTop

window.addEventListener("scroll", ()=>{
    mainFn();
})

mainFn = ()=>{
if(window.pageYOffset + 50 >= navbarOffsetTop){
    navbar.classList.add('sticky')
} else{
    navbar.classList.remove('sticky')
}

sections.forEach((section, i)=>{
    if(window.pageYOffset >= section.offsetTop){
        navLinks.forEach((navLink)=>{
            navLink.classList.remove('change')
        })
        navLinks[i].classList.add('change')  
   }
});
if(window.pageYOffset + window.innerHeight >= progress.offsetTop){
    document.querySelectorAll(".progress-percent").forEach((el, i)=>{ 
            el.style.width = `${arr[i]}%`;
            el.previousElementSibling.firstElementChild.innerText = arr[i]
    })
}
}

mainFn();

window.addEventListener('resize', ()=>{
    window.location.reload();
})