$(document).ready(function(){


	$('form').on('submit', function(event){
		event.preventDefault();

		var toAdd = $('input[name=search]').val();
		$('input[name=search]').val('');
		
		$('#todolist').append('<div class="list"><input type="checkbox" class="selected">'+ toAdd + '</div>');
	compteur();
	});
 	$('#todolist').on('click', '.selected', function(){
		$(this).parent('.list').toggleClass('barret');
			compteur();
	});
	$('#all').click(function(){
		$('.list').show();
			compteur();
	});
	$('#active').click(function(){
		$('.list').show();
		$('.barret').hide ();
			compteur();
	});
	$('#complet').click(function(){
		$('.list').hide();
		$('.barret').show();
			compteur();

	});
	$('#effacer').click(function(){
		$('.barret').remove();
		$('.list').show();
			compteur();
	});



});

function compteur(){
	var compte = $('.list:not(.barret)').length;
	if(compte>1){
		$('h2').text(compte+ " " + "Elements restants");
	}
	else{
		$('h2').text(compte+ " " + "Element restant");
	}
}