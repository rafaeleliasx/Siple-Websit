'use strict'
const swithcher = document.querySelector('.btn');

swithcher.addEventListener('click',function() {
  document.body.classList.toggle('dark-theme')
  
  var className = document.body.className;
  if(className == "light-theme") {
    this.textContent = "Escuro";
  }
  else {
    this.textContent = "Claro";
  }

});