
/* Se crea dinámicamente el elemento con clase .row que contiene el tweet */
$(document).ready(function(){
	$('.form').on('submit', function(event){
		event.preventDefault();
		var tweet = $('.tweet').val();
		$('.board').prepend(
			'<article class="row">'
			+'<button type="button" class="close eliminar" aria-label="Close" title="Eliminar Tweet"><span aria-hidden="true">&times;</span></button>'
            +'<div class="panel panel-tweet">'
              +'<div class="panel-body">'
                +'<div class="media">'
                 +'<a class="media-left" href="#">'
                 +'<img alt="Profile Avatar" class="media-object img-circle" src="http://placehold.it/64x64">'
                  +'</a>'
                  +'<div class="media-body">'
                   +'<h4 class="media-heading"><span class="black">Eva Deborah</span> <small>@indigo_violeta</small></h4>'
					+tweet
					+'<ul class="nav nav-pills nav-pills-custom">'
                      +'<li><a href="#" class="responder" title="Responder"><span class="glyphicon glyphicon-comment"></span></a></li>'
                      +'<li><a href="#" class="retwittear" title="Retwittear"><span class="glyphicon glyphicon-retweet"></span></a></li>'
                      +'<li><a href="#" title="Me Gusta" class="me-gusta"><span class="glyphicon glyphicon-heart like-it"> 0 </span></a></li>'
                      +'<li><a href="#" title ="Enviar DM" class="dm"><span class="glyphicon glyphicon-envelope"></span></a></li>'
                    +'</ul>'
                  +'</div>'
                +'</div>'
              +'</div>'
            +'</div>'   
          +'</article>');
		$('.tweet').val('');
		$('.tweet').focus();
	});

	/* Se elimina el tweet cuando se cliquea sobre elemento con clase .eliminar */
	$('.board').on('click','.eliminar', function(event){
		event.stopPropagation();
		$(this).parent().fadeOut(800);
	});

	/* Se activa clase .likeable cuando se cliquea sobre el ícono de corazón con clase .like-it */
	$('.board').on('click', '.like-it', function(){
		$(this).addClass('likeable');
	});

	/* Aumenta contador cada vez que se cliquea sobre ícono de corazón con clase .like-it */
	$('.board').on('click', '.like-it', function(){
		var count = parseInt($(this).text())+1;
        $(this).html('<span>'+' '+count+'</span>');    
	});	


});
