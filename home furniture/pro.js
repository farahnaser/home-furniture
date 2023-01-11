let btn =document.getElementById('btn');
btn.onmouseover =function(){
document.body.style.background="black";
}

let search = document.getElementById('search-box');
search.onfocus =function(){
    search.style.border='2px solid #f6bdd1';
}

search.onblur =function(){
    search.style.border='noune';
}

window.onload=function () {
    alert('Welcome to the page');
    alert.style.background="black";
    
}