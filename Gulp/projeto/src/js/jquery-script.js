jQuery(function($){
    $('.owl-carousel').owlCarousel();
})
//Manipulação de eventos
$('.featured-item a').on('click', function(event){

    event.preventDefault();
    alert('Produto esgotado');
})

// /*
//  * Ouvinte de eventos .nav-modal-open 
//  */

$('.nav-modal-open').on('click', function(event){

    event.preventDefault();

    let elemento = $(this).attr('rel')

    $('.modal-body').html($('#' + elemento).html())
    $('.modal-header h5.modal-title').html($(this).text())

    let myModal = new bootstrap.Modal($('#modelId'))

    myModal.show(),
    

    // $('.modal-footer button:nth(1)').hide()
    //Validação do Campo CPF
    $('input#cpf').focusout(function(){

        const cpfValido = /[0-9]+.+[0-9]+.+[0-9]+-+[0-9]{2}/i;
        $('#cpf').mask('000.000.000-00');
        if($(this).val().match(cpfValido)){
            $('.invalid').text('')
            ,$('input#cpf').css('border-color','#dce0e5')
            ,$('.invalid').removeClass('err')
        }else{
            $('.invalid').text('Formato invalido, tente no formato xxx.xxx.xxx-xx')
            ,$('input#cpf').css('border-color','#F00')
            ,$('.invalid').addClass('err')
            ,$('.invalid').css({
                color: "#F00"
            })
        } 
    }),

    //Validação do Campo Nome
    $(document).ready(function(){
        $('input#nome').focusout(function(){
            
            if($(this).val() == ''){
                $('.invalid').text('Invalido').css({
                    color: "#F00", 
                })
                ,$('input#nome').css('border-color','#F00')
                ,$('.invalid').addClass('err')
            }else{
                $('.invalid').text('')
                ,$('input#nome').css('border-color','#dce0e5')
                ,$('.invalid').removeClass('err')
            }
        }),
        //Validação do Campo Email
        $('input#email-contato').focusout(function(){
            
            const emailValido = /^[a-z0-9 || .]+@+[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;

            if($(this).val().match(emailValido)){
                $('.invalid').text('')
                ,$('.invalid').removeClass('err')
                ,$('input#email-contato').css('border-color','#dce0e5')
            }else{
                $('.invalid').text('Email Invalido')
                ,$('input#email-contato').css('border-color','#F00')
                ,$('.invalid').css({
                    color: '#F00'
                })
                ,$('.invalid').addClass('err')
            }
        })
    })
})