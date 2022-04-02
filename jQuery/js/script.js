/*"efeito" parecido com o hover, para quando o usuario colocar o mouse em cima 
do card do produto deixar o botão de compra e o valor do produto visivel
e quando retirar torna a voltar a seu estado inicial, ou seja, escondido. 
Ponto negativo é que tive que usar o mesmo codigo com pequenas alterações para fazer com que todos funcionassem corretamentes*/

//card-1
let cardLink = document.querySelector('#cardLink');

cardLink.addEventListener('mouseover',function(event){
    if(document.querySelector('div.cima') != document.querySelector('div.cima.visible')){
        document.querySelector('div.cima').classList.add('visible')
        document.querySelector('div.cima').classList.remove('hidden')
    }
})
cardLink.addEventListener('mouseout', function(event){
    if(document.querySelector('div.cima') == document.querySelector('div.cima.visible')){
        document.querySelector('div.cima').classList.remove('visible')
        document.querySelector('div.cima').classList.add('hidden')
    }
})
//card-2
cardLink2 = document.querySelector('#cardLink2');

cardLink2.addEventListener('mouseover',function(event){
    if(document.querySelector('div.cima2') == document.querySelector('div.cima2.hidden')){
        document.querySelector('div.cima2').classList.remove('hidden')
        document.querySelector('div.cima2').classList.add('visible')
    }
})
cardLink2.addEventListener('mouseout', function(event){
    if(document.querySelector('div.cima2') == document.querySelector('div.cima2.visible')){
        document.querySelector('div.cima2').classList.remove('visible')
        document.querySelector('div.cima2').classList.add('hidden')
    }
})
//card-3
cardLink3 = document.querySelector('#cardLink3');

cardLink3.addEventListener('mouseover',function(event){
    if(document.querySelector('div.cima3') == document.querySelector('div.cima3.hidden')){
        document.querySelector('div.cima3').classList.remove('hidden')
        document.querySelector('div.cima3').classList.add('visible')
    }
})
cardLink3.addEventListener('mouseout', function(event){
    if(document.querySelector('div.cima3') == document.querySelector('div.cima3.visible')){
        document.querySelector('div.cima3').classList.remove('visible')
        document.querySelector('div.cima3').classList.add('hidden')
    }
})
//card-4
cardLink4 = document.querySelector('#cardLink4');

cardLink4.addEventListener('mouseover',function(event){
    if(document.querySelector('div.cima4') == document.querySelector('div.cima4.hidden')){
        document.querySelector('div.cima4').classList.remove('hidden')
        document.querySelector('div.cima4').classList.add('visible')
    }
})
cardLink4.addEventListener('mouseout', function(event){
    if(document.querySelector('div.cima4') == document.querySelector('div.cima4.visible')){
        document.querySelector('div.cima4').classList.remove('visible')
        document.querySelector('div.cima4').classList.add('hidden')
    }
})
//card-5
cardLink5 = document.querySelector('#cardLink5');

cardLink5.addEventListener('mouseover',function(event){
    if(document.querySelector('div.cima5') == document.querySelector('div.cima5.hidden')){
        document.querySelector('div.cima5').classList.remove('hidden')
        document.querySelector('div.cima5').classList.add('visible')
    }
})
cardLink5.addEventListener('mouseout', function(event){
    if(document.querySelector('div.cima5') == document.querySelector('div.cima5.visible')){
        document.querySelector('div.cima5').classList.remove('visible')
        document.querySelector('div.cima5').classList.add('hidden')
    }
})
//card-6
cardLink6 = document.querySelector('#cardLink6');

cardLink6.addEventListener('mouseover',function(event){
    if(document.querySelector('div.cima6') == document.querySelector('div.cima6.hidden')){
        document.querySelector('div.cima6').classList.remove('hidden')
        document.querySelector('div.cima6').classList.add('visible')
    }
})
cardLink6.addEventListener('mouseout', function(event){
    if(document.querySelector('div.cima6') == document.querySelector('div.cima6.visible')){
        document.querySelector('div.cima6').classList.remove('visible')
        document.querySelector('div.cima6').classList.add('hidden')
    }
})
//card-7
cardLink7 = document.querySelector('#cardLink7');

cardLink7.addEventListener('mouseover',function(event){
    if(document.querySelector('div.cima7') == document.querySelector('div.cima7.hidden')){
        document.querySelector('div.cima7').classList.remove('hidden')
        document.querySelector('div.cima7').classList.add('visible')
    }
})
cardLink7.addEventListener('mouseout', function(event){
    if(document.querySelector('div.cima7') == document.querySelector('div.cima7.visible')){
        document.querySelector('div.cima7').classList.remove('visible')
        document.querySelector('div.cima7').classList.add('hidden')
    }
})
//card-8
cardLink8 = document.querySelector('#cardLink8');

cardLink8.addEventListener('mouseover',function(event){
    if(document.querySelector('div.cima8') == document.querySelector('div.cima8.hidden')){
        document.querySelector('div.cima8').classList.remove('hidden')
        document.querySelector('div.cima8').classList.add('visible')
    }
})
cardLink8.addEventListener('mouseout', function(event){
    if(document.querySelector('div.cima8') == document.querySelector('div.cima8.visible')){
        document.querySelector('div.cima8').classList.remove('visible')
        document.querySelector('div.cima8').classList.add('hidden')
    }
})
//card-9
cardLink9 = document.querySelector('#cardLink9');

cardLink9.addEventListener('mouseover',function(event){
    if(document.querySelector('div.cima9') == document.querySelector('div.cima9.hidden')){
        document.querySelector('div.cima9').classList.remove('hidden')
        document.querySelector('div.cima9').classList.add('visible')
    }
})
cardLink9.addEventListener('mouseout', function(event){
    if(document.querySelector('div.cima9') == document.querySelector('div.cima9.visible')){
        document.querySelector('div.cima9').classList.remove('visible')
        document.querySelector('div.cima9').classList.add('hidden')
    }
})
//fim do "efeito".  

//Codigo do w3school sobre como usar window.matchMedia
function myFunction(muda) {
if (muda.matches) { 
    document.getElementsByClassName('nav-link')[2].innerHTML = "Sobre";
} 
}

var muda = window.matchMedia("(max-width: 1025px)")
myFunction(muda) 
muda.addListener(myFunction)
//fim codigo

// /*Codigo para remover div class='item' para tirar o carousel*/  
// function tiraItemDom(tirar){
//     if(tirar.matches){
//     let j = 8;
//         for(let i=0 ; i<6; i++){
//             document.querySelectorAll('div.item')[j].remove()
//             j--
//         }
        
//     }
// }
// let tirar = window.matchMedia("(max-width: 1025px)")
// tiraItemDom(tirar);
// tirar.addListener(tiraItemDom)
// /*Fim Codigo*/

// //Remover itens do banner
// let mudar = window.matchMedia("(max-width: 769px)")
// if(mudar == mudar){
//     document.querySelectorAll('div.carousel-item')[1].remove();
//     document.querySelectorAll('div.carousel-item')[1].remove();
// }
// //Fim

// let tirarNav = window.matchMedia("(max-width: 769px)")
// if(tirarNav == tirarNav){//tirarNav == tirarNav é só para ter uma condição para entrar no if
//     document.getElementsByClassName('navbar-nav')[0].remove()
// }


