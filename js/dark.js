function darkMode() {
    var rows = document.querySelectorAll('body');
    rows.forEach(item => item.classList.toggle("dark-mode"));

    var cards = document.querySelectorAll('.card');
    cards.forEach(item => item.classList.toggle("dark-card"));

    var search = document.querySelectorAll('.search-bar');
    search.forEach(item => item.classList.toggle("dark-search-bar"));

    nav = document.getElementsByClassName('navbar');
    nav[0].classList.toggle('dark-nav');
    
    document.getElementsByClassName('my-float')[0].style.transform = 'rotate(180deg)';


    if (document.querySelector('.theme').id === 'light') {
        document.getElementById("404").src = "./img/404-light.png";
        document.getElementById("logo").src = "./img/underground_logo_light.png";
        document.getElementsByClassName('float')[0].style.backgroundColor = 'white';
        document.getElementsByClassName('float')[0].style.color = 'black';
        document.querySelector('.theme').id = 'dark';
    } else {
        document.querySelector('.theme').id = 'light';
        document.getElementById("404").src = "./img/404.png";
        document.getElementsByClassName('float')[0].style.backgroundColor = '#2C2C2C';
        document.getElementsByClassName('float')[0].style.color = 'white';
        document.getElementById("logo").src = "./img/underground_logo.png";
    }
    
}