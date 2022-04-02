jQuery(function($){
    $('.owl-carousel').owlCarousel();
})

//config produtos

// $('.featured-item a').addClass('btn btn-dark stretch-link');
// $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>')

$('.featured-item h4').dblclick(function(){
    $(this).css({
        'color':'#f00',
       'background-color':'#ff0',
       'font-weight':'100'
    })
})

/*$('.featured-item').mouseenter(function(){
    console.log($(this).find('h4').text());
})

$('.featured-item').mouseleave(function(){
    console.log($(this).find('h6').text())
})*/

// $('.featured-item').hover(function(){
//     console.log($(this).find('h4').text())
// },
//     function(){
//         console.log($(this).find('h4').text() + '-' +  $(this).find('h6').text())
//     }
// )

/*Manipulação de eventos*/
$('.featured-item a').on('click', function(event){

    event.preventDefault();
    alert('Produto esgotado');
})
        