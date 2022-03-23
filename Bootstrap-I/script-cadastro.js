//Validar Campos

function validaCamposCadastro(element){
    element.addEventListener('focusout', function(event){
        event.preventDefault();

        if(this.value == ""){
            document.querySelector('.invalid').innerHTML = "Verifique o preenchimento";
            this.classList.add('erro');
        }else{
            document.querySelector('.invalid').innerHTML = "";
            this.classList.remove('erro');
        }
    })
}

let vlCampsCad = document.querySelectorAll('input.obrigatorio')
for(let emFoco of vlCampsCad){
    validaCamposCadastro(emFoco);
}
//

//Validar Campo Email

function validaCampEmail(element){
    element.addEventListener('focusout', function(event){
        event.preventDefault();

        const vEmail = /^[a-z0-9 || .]+@+[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
        if(this.value.match(vEmail)){
            document.querySelector('.invalid').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro'); 
        }else{
            document.querySelector('.invalid').innerHTML = "Verifique o preenchimento"
            this.classList.add('erro')
            this.parentNode.classList.add('erro')
            return false;
        }
    })
}

let vlCampEma = document.querySelectorAll('input.email')
for(let emFoco of vlCampEma){
    validaCampEmail(emFoco);
}

//

//Validar Cep

function validaCep(element){
    element.addEventListener('focusout', function(event){
        event.preventDefault();

        
        if(this.value.match(/[0-9]{5}-[0-9]{3}/)){
            document.querySelector('.invalid').innerHTML = "";
            this.classList.remove('erro');
        }else{
            document.querySelector('.invalid').innerHTML = "Preencha conforme o padrão do CEP 00000-000";
            this.classList.add('erro');
        }
    })
}

let vlCep = document.querySelectorAll('input.cep')
for(let emFoco of vlCep){
    validaCep(emFoco);
}

//

/*Validar Info*/


    document.getElementById('informacao').addEventListener('focusout',function(event){

        if(this.value == ''){
            document.querySelector('.invalid').innerHTML = "Verifique o preenchimento";
            this.classList.add('erro');
        }else{
            document.querySelector('.invalid').innerHTML = '';
            this.classList.remove('erro')
        }
    })

//

//Validar telefone

function validarCampTelefone(element){
    element.addEventListener('focusout', function(event){
        event.preventDefault();

    const numero = /[0-9]{2}[0-9]{9}/
    if(this.value.match(numero)){
        document.querySelector('.invalid').innerHTML = '';
        this.classList.remove('erro');
    }else{
        document.querySelector('.invalid').innerHTML = "Verifique o preenchimento";
        this.classList.add('erro');
    }
    })
}

let vlCampTele = document.querySelectorAll('input.telef')
for(let emFoco of vlCampTele){
    validarCampTelefone(emFoco)
}