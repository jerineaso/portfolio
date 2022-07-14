//Navbars Toggle 
document.querySelector('.ham').addEventListener('click',() =>{
    document.querySelector('.menu').classList.toggle('show');
});

document.querySelectorAll('.links').forEach((key)=>{
    key.addEventListener('click',()=>{
        document.querySelector('.menu').classList.remove('show');
    })
})

// API for getting countries list
async function getResponse() {
	const response = await fetch(
		'https://countriesnow.space/api/v0.1/countries/capital',
		{
			method: 'GET'
		}
	);
	const data = await response.json(); // Extracting data as a JSON Object from the response
    const current = data.data

    let drops = '';

    current.forEach(country =>{
        console.log(country.name);
        drops += `<option class="opt">${country.name}</option>`
    })

    document.getElementById("country").innerHTML = drops
    
}

getResponse();