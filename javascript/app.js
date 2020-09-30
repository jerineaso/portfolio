//Navbars Toggle 
document.querySelector('.ham').addEventListener('click',() =>{
    document.querySelector('.menu').classList.toggle('is-active');
});

//Form Submission 
$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbzKCXNOvTR8q2NnJZx_GHczpMkxCOEZ9Q1RuvOs_Q/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})