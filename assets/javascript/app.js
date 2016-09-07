window.onload = function(){
	run();



}

var number = 60;
function run(){
    counter = setInterval(decrement, 1000);
}

function decrement(){
    number--;
    console.log(number);
    $('.Time').html(number);
    if (number === 0){
        stop();
        clearInterval(counter);
        $('.container').empty();
        $('.container').html("<h1>Times Up!</h1>")
    }
}
var correct = 0;
var incorrect = 0;
$(document).ready(function(){
$('#submit').on('click', function(){
	console.log("clicked")
	 stop();
	 clearInterval(counter);
	 for(var i = 0; i < 4; i++){
	 	var question = document.forms[i];
	 	switch(i){
	 		case 0:
	 			if(question[3].checked){
	 				correct++;
	 			}
	 			else{
	 				incorrect++;
	 			}
	 			break;
	 		case 1:
	 			if(question[0].checked){
	 				correct++;
	 			}
	 			else{
	 				incorrect++;
	 			}
	 			break;
	 		case 2:
	 			if(question[0].checked){
	 				correct++;
	 			}
	 			else{
	 				incorrect++;
	 			}
	 			break;
	 		case 3:
	 			if(question[1].checked){
	 				correct++;
	 			}
	 			else{
	 				incorrect++;
	 			}
	 			break;	
	 	}
	 }
	 $('.container').empty();
	 $('.container').html("correct: " + correct + "incorrect: " + incorrect);
	 
})
})

