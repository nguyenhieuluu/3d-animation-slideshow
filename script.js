
const card = document.querySelector(".card");
const container = document.querySelector(".container");
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");
var purchaseButton = false;

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});


//Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  title.style.transform = "translateZ(120px)";
  sneaker.style.transform = "translateZ(100px) rotateZ(-25deg)";
  description.style.transform = "translateZ(120px)";
  sizes.style.transform = "translateZ(120px)";
  purchase.style.transform = "translateZ(75px)";
});


//Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  title.style.transform = "translateZ(0px)";
  sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});


//Purchase Button Entered
function printMessage(){
    document.querySelector("#display-message").innerHTML = "This item has been added to your cart!"; 
}


function next(){
    document.querySelector("#slider-gallery").scrollLeft += 300;
}

function previous(){
    document.querySelector("#slider-gallery").scrollLeft -= 300;
}




