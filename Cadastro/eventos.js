function validaCampo(elemento){

elemento.addEventListener('focusout', function(event){

    event.preventDefault(); 

    if(this.value == ""){
        document.querySelector('.mensagem').innerHTML = "Verifique o preenchimento";
        this.classList.add('erro');
        this.parentNode.classList.add('erro');
        return false;
    }else{
        document.querySelector('.mensagem').innerHTML = "";
        this.classList.remove('erro');
        this.parentNode.classList.remove('erro');
    }
}
)};


function validaCampoNumerico(elemento){

    elemento.addEventListener('focusout', function(event){
    
        event.preventDefault(); 

        let numero = this.value.match(/[0-9]{2}[0-9]{3}-[0-9]{3}/) ? this.value.replace(/-/, '') : this.value ;
    
        if(numero.match(/[0-9]*/))   {
            test = document.getElementsByClassName('numerico')[0].value;
            if( test.length == 9 || test.length == 8){
                document.querySelector('.mensagem').innerHTML = "";
                this.classList.remove('erro');
                this.parentNode.classList.remove('erro');
        }else{
            document.querySelector('.mensagem').innerHTML = "Verifique o preenchimento";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }
    }
    }
    )
};

function validaCampoEmail(elemento){
    elemento.addEventListener('focusout', function(event){
        event.preventDefault();

        const emailValido = /^[a-z0-9 || .]+@+[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;

        if(this.value.match(emailValido)){
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro'); 
        }else{
            document.querySelector('.mensagem').innerHTML = "Verifique o preenchimento";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }
    })
}

function validaCampoUf(elemento){
    elemento.addEventListener('focusout', function(event){
        event.preventDefault();

        const number = /[A-Z]{1}/i ;

            if(this.value.match(number)){
            valor = document.getElementsByClassName('uf')[0].value
            if(valor.length != 2 || valor.length == 1 ){
                document.querySelector('.mensagem').innerHTML = "Verifique o preenchimento, deve ser ex: SP";
                this.classList.add('erro');
                this.parentNode.classList.add('erro');
                return false;    
            }else{
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
            }
        } 
    } 
    )
}

let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposNumericos = document.querySelectorAll('input.numerico');
let campoEmail = document.querySelectorAll('input.email');
let campoUf = document.querySelectorAll('input.uf');

for(let emFoco of camposObrigatorios){
    validaCampo(emFoco);
}

for(let emFoco of camposNumericos){
    validaCampoNumerico(emFoco);
}
for(let foco of campoEmail){
    validaCampoEmail(foco);
}
for(let foco of campoUf){
    validaCampoUf(foco);
}