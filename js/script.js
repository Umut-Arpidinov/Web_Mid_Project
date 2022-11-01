const hamburger = document.querySelector(".hamburger")
const magicButton = document.getElementById("magic")
const magicImage = document.getElementById("secondImage")


hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
});

document.querySelectorAll(".nav-link").forEach(
    n => n.addEventListener("click",()=>{hamburger.classList.remove("active")
    navMenu.classList.remove("active")}))




let ph = [ "img/smile.png","img/smile2.png","img/smile3.png","img/seconddd.png"];
let co = 0;

magicButton.onclick = function(){
    let im = document.getElementById("secondImage");
    im.setAttribute("src",`${ph[co]}`);
    co++;
    if(co>3){
        co = 0;
    }
}

const cat_result = document.getElementById("cat_result")
const cat_btn = document.getElementById("cat_btn")

cat_btn.addEventListener('click',getRandomCat)
   
function getRandomCat(){
    fetch('https://aws.random.cat/meow')
		.then(res => res.json())
		.then(data => {
			cat_result.innerHTML = `<img src=${data.file} alt="cat" />`
		});
}