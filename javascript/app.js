//Navbars Toggle 
document.querySelector('.ham').addEventListener('click',() =>{
    document.querySelector('.menu').classList.toggle('show');
});

document.querySelectorAll('.links').forEach((key)=>{
    key.addEventListener('click',()=>{
        document.querySelector('.menu').classList.remove('show');
    })
})