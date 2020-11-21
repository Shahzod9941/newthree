// hidding navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-55px";
  }
  prevScrollpos = currentScrollPos;
}

// opening and closing sidebar
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}





// дата до которого мы считаем
var countDownDate = new Date("Dec 15, 2020 20:00:00").getTime();

// обновить счётчик каждый 1 секунд
var x = setInterval(function() {

    // Возьмём сегоднечную дату
    var now = new Date().getTime();
    
    //найдёт дистансию с сегоднечного числа до считаемого
    var distance = countDownDate - now;
    
    // Калькулятор времени для день часы, минута, и секунда
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
    // Выводить резултать в элемент с id="demo"
    document.getElementById("super-time").innerHTML = /*days + "d " +*/ hours + " : "
    + minutes + " : " + seconds;
    
    // Если день до которого должен был считать закончилось выводить timeout
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("super-time").innerHTML = "EXPIRED";
    }
}, 1000);


let colors = ["0 0 30px black", "0 0 30px white"];
let index = 0;

const superSale = document.getElementById('super');

setInterval(function changeColor() {
  superSale.style.setProperty('box-shadow', colors[index++]);
  index %= colors.length;
}, 1000);
