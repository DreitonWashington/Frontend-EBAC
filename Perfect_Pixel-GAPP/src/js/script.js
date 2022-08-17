let element = document.querySelector("#b1")
let e = document.querySelectorAll("span")[4]
let element2 = document.querySelector("#b2")
let e2 = document.querySelectorAll("span")[5]



function change(element,e){
  element.addEventListener("mouseover", function(event){
    e.classList.remove('sb-icon');
    e.classList.add('sb-icon-hover');
    element.style.color = "black";
  })
  element.addEventListener("mouseout", function(event){
    e.classList.add('sb-icon');
    e.classList.remove('sb-icon-hover');
    element.style.color = "#dc002d";
  })
}

change(element,e)
change(element2,e2)


  const myCarouselElement = document.querySelector('#myCarousel')
  const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 2000,
    wrap: false
  })
  