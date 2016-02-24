$(document).ready(function(){ 
	// console.log('ready'); //this causes a non noticable delay in our example
	// var input = document.querySelector('input'); this and the next line are the same
	var $input = $('input');
	var $button = $('button');
	var $list = $('.list ul');
	var $warning = $('#warning');

	// instead of button.addEventlistner....
	// $button.click(function(){})//This is the same as the next line
	$button.on('click', function(event){
		event.preventDefault();

		// instead of var newTodo = createElement('li')
		// var newTodo = $('<li> +   $input.value + </li>');
		// or 
		if( $input.val() !== ''){

			$warning.text('');

			var newTodo = $('<li></li>').html($input.val() + "<span class= 'delete'> x </span>");
			$list.append(newTodo);
			$input.val('');
		} else{
			$warning.text('text box can not be empty');
			  }
	}); //end of button click

	$list.on('click', '.delete', function(event){ //the delete is ...to make sure only this selector (class of delete) nly elements with class of delete will trigger the code

		console.log('clicked x');
		// console.log(this);// returns that specific span-- whatever is triggering the event
		$(this).hide();// we can even specify how long it should 
		// we are gonna use it to target the parent of the item we clicked on 
		$(this).parent()
			.addClass('strike')
			.delay(1000)
			.hide(700); //this items parent will be crossed out
		/*we dont need the class of hie because jquery has a hide function*/


	});// end list click

}); //end of document.ready

 // list.addEventListener('click', function(event){
 // 		//console.log('clicked');-- Juts Cheking

 // 		//target is where  actually the event occurs in this case is x
 // 		//current Target is whatever is listening for the event in this case the listl
 // 		var item = event.target;
 // 		//lets make sure only x is clickable
 // 		if ( item.className === 'delete' ){
 // 			console.log('to be deleted');
 // 			//if you want to manipulate css directly with javascript -
 // 			// item.parentElement.style = 'text-decoration: line-through';
 // 			//but whe want to adding and removing classes
 // 			item.parentElement.className = 'strike';
 // 			//to make sure te previous class is not deleted and a space to make sure there are two  names
 // 			item.className	+= ' hide';
 // 			setTimeout(function(){
 // 				//if you wanna have and undo functionality then how baout just using the hide class instead
 // 				item.parentElement.remove();
 // 			}, 2000 )
 // 		}
 // });