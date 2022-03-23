//Para validar o campo de mensagem
document.getElementById('mensagem').addEventListener('focusout', function(event){
    if(this.value == ''){
        document.querySelector('.invalid').innerHTML = "Verifique o preenchimento"
        document.getElementsByTagName('button')[1].style.visibility = 'hidden'
        this.classList.add('erro');
    }else{
        document.querySelector('.invalid').innerHTML = "";
        document.getElementsByTagName('button')[1].style.visibility = 'visible'
        this.classList.remove('erro');
    }
})

//Validar os inputs
function validaCamps(element){
    element.addEventListener('focusout', function(event){
        event.preventDefault();

        if(this.value == ''){
            document.querySelector('.invalid').innerHTML = "Verifique o preenchimento"
            document.getElementsByTagName('button')[1].style.visibility = 'hidden'
            this.classList.add('erro');
        }else{
            document.querySelector('.invalid').innerHTML = "";
            document.getElementsByTagName('button')[1].style.visibility = 'visible'
            this.classList.remove('erro');
        }
    })
}


function validaEmail(elemento){
    elemento.addEventListener('focusout', function(event){
        event.preventDefault();

        const emailValido = /^[a-z0-9 || .]+@+[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;

        if(this.value.match(emailValido)){
            document.querySelector('.invalid').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro'); 
        }else{
            document.querySelector('.invalid').innerHTML = "Verifique o preenchimento do Email";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }
    })
}

let campObg = document.querySelectorAll('input.obrigatorio');
let campoEmail = document.querySelectorAll('input.email');
for(let foco of campObg){
    validaCamps(foco);
}
for(let foco of campoEmail){
    validaEmail(foco);
}

/*Carousel*/
var myCarousel = document.querySelector('#carouselfachada')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 10000,
  wrap: true
})