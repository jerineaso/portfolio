//Navbars Toggle 
document.querySelector('.toggle').addEventListener('click',() =>{
    document.querySelector('.menu').classList.toggle('is-active');
});

//Nav-links Mouseover
let links = document.querySelectorAll('.nav-links')
let svgSec = document.querySelectorAll('.svg-section')
for(i=0;i<links.length;i++){
    console.log(i)
    links[i].addEventListener('mouseenter',() =>displaySvg("block"));

    links[i].addEventListener('mouseleave',() =>displaySvg("none"));
}

document.querySelector('.image-svg').addEventListener('mouseenter',() =>displaySvg("block"))
document.querySelector('.image-svg').addEventListener('mouseleave',() =>displaySvg("none"))


function displaySvg(value){
    for(j=0;j<svgSec.length;j++){
        console.log(j)
        svgSec[j].style.display = value
    }
}

