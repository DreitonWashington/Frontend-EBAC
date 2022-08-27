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

/* Ajuste de tela */

/*--------------------------------------------------------------------------*/
function displayWindowSize(){
    // Get width of the window excluding scrollbars
    var w = document.documentElement.clientWidth;
    return w;
}

// Attaching the event listener function to window's resize event
window.addEventListener("resize", displayWindowSize);
window.onresize = function ob (){
    fresh()
}

// Calling the function for the first time
displayWindowSize();
windowWidth = displayWindowSize()
/*-------------------------------------------------------------------------*/
function fresh(){
displayWindowSize();
window.addEventListener("resize", displayWindowSize);
windowWidth = displayWindowSize()

    if(windowWidth  == 320 || windowWidth == 375 || windowWidth == 360 || windowWidth == 426){
        /* add primeira parte do titulo */
        let size = document.querySelector('.titleChangeOnResize') 
        document.querySelector('.titleChangeOnResize').remove()
        for(let i = 1 ; i < size.length ; i++){
            document.querySelector('.titleChangeOnResize').remove()
            document.querySelectorAll('.titleChangeOnResize1').remove()
            document.querySelectorAll('.titleChangeOnResize2').remove()
        }
        const pTitulo1 = document.createElement('p')
        pTitulo1.classList.add("titleChangeOnResize1")
        pTitulo1.classList.add("md")
        const textpTitulo1 = document.createTextNode("Make your dreams")
        pTitulo1.appendChild(textpTitulo1)
    
        /* add segunda parte do titulo*/
        const pTitulo2 = document.createElement('p')
        pTitulo2.classList.add("titleChangeOnResize2")
        const textpTitulo2 = document.createTextNode("become games")
        pTitulo2.appendChild(textpTitulo2)
    
        const bannerP = document.querySelector('.banner')
        bannerP.appendChild(pTitulo1)
        bannerP.appendChild(pTitulo2)
    }else{
        let size = document.querySelectorAll('.titleChangeOnResize')
        const o = size.length 
        for(let i = 0 ; i < o ; i++){
            document.querySelector('.titleChangeOnResize').remove()
            
            
        }
        const bannerP = document.querySelector('.banner__image')
        const pTituloNormal = document.createElement('p')
        pTituloNormal.classList.add('titleChangeOnResize')
        const textpTituloNormal = document.createTextNode("Make your dreams become games")
        pTituloNormal.appendChild(textpTituloNormal)
        bannerP.appendChild(pTituloNormal)
        document.querySelector('.titleChangeOnResize1').remove()
        document.querySelector('.titleChangeOnResize2').remove()
    
    }
}
let u = document.documentElement.clientWidth;
if(u == 320 || u ==375 || u == 360 || u == 426 ){
    fresh()
}

/* Fim ajuste de tela */
    
