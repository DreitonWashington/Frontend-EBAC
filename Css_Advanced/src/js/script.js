function upCard (element){
    element.addEventListener("mouseover", function(event){
        if( element != document.querySelectorAll("div.vitrine__item")){
            element.classList.remove("hocd")
            element.classList.add("hcup")
        }
    })
}
function dwCard (element){
    element.addEventListener("mouseout", function(event){
        if(element != document.querySelectorAll("div.vitrine__item")){
            element.classList.remove("hcup")
            element.classList.add("hocd")
        }
    })
}

elemento = document.querySelectorAll('div.vitrine__item')[0];
elemento2 = document.querySelectorAll('div.vitrine__item')[1];
elemento3 = document.querySelectorAll('div.vitrine__item')[2];
elemento4 = document.querySelectorAll('div.vitrine__item')[3];
upCard(elemento)
upCard(elemento2)
upCard(elemento3)
upCard(elemento4)
dwCard(elemento)
dwCard(elemento2)
dwCard(elemento3)
dwCard(elemento4)

/**/

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll('h1')[0].classList.add("fadeLeft")
            document.querySelectorAll('h1')[1].classList.add("fadeLeft")
            document.querySelectorAll('h1')[2].classList.add("fadeLeft")
        }else{
            document.querySelectorAll('h1')[0].classList.remove("fadeLeft")
            document.querySelectorAll('h1')[1].classList.remove("fadeLeft")
            document.querySelectorAll('h1')[2].classList.remove("fadeLeft")
        }
    })
})
observer.observe(document.querySelector(".container"))