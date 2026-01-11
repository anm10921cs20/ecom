window.addEventListener('load', () => {
    const loaderContainer = document.querySelector('.loader');
  
    console.log(loaderContainer);
    
    loaderContainer.classList.add('loader-hidden')
})



const currentYear = document.getElementById('curent-year');
var date = new Date().getFullYear();
currentYear.textContent = date;

