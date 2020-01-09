var $total = -1
var pontos = -1
var correta = 0;
var errada = 0;
var mail = "";
var cont = 1;
var flag = 1;
var perguntasTotal = "false"
var a, b, c, d, e, f, g, h, i, j = "false"
var pontos = 0
/************************************************ */
console.log($("[id*='ctl00_hnlPerfil']", window.parent.document).html());
var user = $("[id*='ctl00_hnlPerfil']", window.parent.document).html();
/****************TESTES************************* */
/*cont = 0 vai ser a primeira questão*/
function Cont() {
	cont++;
	return cont;
}
function Flag() {
	flag++;
	return flag;
}
$(document).ready(function () {
	$('.btn3').click(function () {
		document.getElementById('pagA').style.display = 'none';
		document.getElementById('pag0').style.display = 'block';
	});
	$('.absolute').click(function () {
		$("body").css({ "position": "absolute" });
	});
	//get total of questions
	var $questionNumber = $('h2').length;
	console.log($questionNumber);
	//caching final score
	var $totalScore = 0;

	$('li').click(function () {
		//caching variables
		var $parent = $(this).parent();
		var $span = $(this).find('.fa');

		//deactivate options on click
		$parent.find('li').off("click");

		//check for .correct class
		//if yes
		if ($(this).hasClass('correct')) {/* Função perguntas certas e erradas */
			//add .correctAnswer class
			$(this).addClass('correctAnswer');
			//find next span and change icon
			$span.removeClass('fa fa-square-o').addClass('fa fa-check-square-o');
			//reduce opacity of siblings
			$(this).siblings().addClass('fade');
			//show answer
			var $answerReveal = $parent.next('.answerReveal').show();
			var $toShowCorrect = $answerReveal.find('.quizzAnswerC');
			var $toShowFalse = $answerReveal.find('.quizzAnswerF');
			$toShowCorrect.show();
			$toShowFalse.remove();
			//add 1 to total score
			$totalScore += 1;
			//console.log($totalScore);
			var cabAcertou = "acertou"
			/********************/
			correta += 1;
			/************ */
			var soundID = "bonus";
			function loadSound() {
				createjs.Sound.registerSound("bonus.mp3", soundID);
			}
			/*loadSound();*/

			function playSound() {
				createjs.Sound.play(soundID);
			}
			/*playSound();*/
			var certa = correta - 1;
			if (correta > certa && cont == 1) {
				a = " Acertou a 1° ";
				pontos += 10
				document.getElementById("pontos").style.display = 'block';
				document.getElementById("pontos").innerHTML = "Você ganhou " + pontos + " pontos!"
				playSound();
				alert("Você ganhou " + pontos + " pontos!")

			}
			if (correta > certa && cont == 2) {
				b = " Acertou a 2° ";
				pontos += 10
				document.getElementById("pontos1").style.display = 'block';
				document.getElementById("pontos1").innerHTML = "Você ganhou " + pontos + " pontos!"
				playSound();
				alert("Você ganhou " + pontos + " pontos!")

			}
			if (correta > certa && cont == 3) {
				c = " Acertou a 3° ";
				pontos += 10
				document.getElementById("pontos2").style.display = 'block';
				document.getElementById("pontos2").innerHTML = "Você ganhou " + pontos + " pontos!"
				playSound();
				alert("Você ganhou " + pontos + " pontos!")
			}
			if (correta > certa && cont == 4) {
				d = " Acertou a 4° ";
				pontos += 10
				document.getElementById("pontos3").style.display = 'block';
				document.getElementById("pontos3").innerHTML = "Você ganhou " + pontos + " pontos!"
				playSound();
				alert("Você ganhou " + pontos + " pontos!")
			}
			if (correta > certa && cont == 5) {
				e = " Acertou a 5° ";
				pontos += 10
				document.getElementById("pontos4").style.display = 'block';
				document.getElementById("pontos4").innerHTML = "Você ganhou " + pontos + " pontos!"
				playSound();
				alert("Você ganhou " + pontos + " pontos!")
			}
			if (correta > certa && cont == 6) {
				f = " Acertou a 6° ";
				pontos += 10
				document.getElementById("pontos5").style.display = 'block';
				document.getElementById("pontos5").innerHTML = "Você ganhou " + pontos + " pontos!"
				playSound();
				alert("Você ganhou " + pontos + " pontos!")
			}
			if (correta > certa && cont == 7) {
				g = " Acertou a 7° ";
				pontos += 10
				document.getElementById("pontos6").style.display = 'block';
				document.getElementById("pontos6").innerHTML = "Você ganhou " + pontos + " pontos!"
				playSound();
				alert("Você ganhou " + pontos + " pontos!")
			}
			if (correta > certa && cont == 8) {
				h = " Acertou a 8° ";
				pontos += 10
				document.getElementById("pontos7").style.display = 'block';
				document.getElementById("pontos7").innerHTML = "Você ganhou " + pontos + " pontos!"
				playSound();
				alert("Você ganhou " + pontos + " pontos!")
			}
			if (correta > certa && cont == 9) {
				i = " Acertou a 9° ";
				pontos += 10
				document.getElementById("pontos8").style.display = 'block';
				document.getElementById("pontos8").innerHTML = "Você ganhou " + pontos + " pontos!"
				playSound();
				alert("Você ganhou " + pontos + " pontos!")
			}
			if (correta > certa && cont == 10) {
				j = " Acertou a 10° ";
				pontos += 10
				document.getElementById("pontos9").style.display = 'block';
				document.getElementById("pontos9").innerHTML = "Você ganhou " + pontos + " pontos!"
				playSound();
				alert("Você ganhou " + pontos + " pontos!")
			}// final do if 
			/********************************************************************************** */
		} else {
			//add .wrongAnswer class
			$(this).addClass('wrongAnswer').addClass('fade');
			//change icon
			$span.removeClass('fa fa-square-o').addClass('fa fa-check-square-o');
			//reduce opacity of its siblings
			$(this).siblings().addClass('fade');
			//show wrong Message
			var $answerReveal = $parent.next('.answerReveal').show();
			var $toShowCorrect = $answerReveal.find('.quizzAnswerC');
			var $toShowFalse = $answerReveal.find('.quizzAnswerF');
			$toShowCorrect.remove();
			$toShowFalse.show();
			//locate correct answer and highlight
			$parent.find('.correct').addClass('correctAnswer');

			errada += 1;
			var erro = errada - 1;
			if (erro < errada && flag == 1) {
				a = " Errou a 1° "
			}
			if (erro < errada && flag == 2) {
				b = " Errou a 2° "
			}
			if (erro < errada && flag == 3) {
				c = " Errou a 3° "
			}
			if (erro < errada && flag == 4) {
				d = " Errou a 4° "
			}
			if (erro < errada && flag == 5) {
				e = " Errou a 5° "
			}
			if (erro < errada && flag == 6) {
				f = " Errou a 6° "
			}
			if (erro < errada && flag == 7) {
				g = " Errou a 7° "
			}
			if (erro < errada && flag == 8) {
				h = " Errou a 8° "
			}
			if (erro < errada && flag == 9) {
				i = " Errou a 9° "
			}
			if (erro < errada && flag == 10) {
				j = " Errou a 10° "
				
			}

		};// Final do else
	});//final da função perguntas certas e erradas

	//print Results
	function printResult() {
		var resultText = '<p style="color: #800000; font-size:larger;">';
		if ($totalScore === $questionNumber) {
			resultText += 'Você acertou ' + $totalScore + ' de um total de  ' + $questionNumber + ' perguntas ! </p>';
			$('.resultContainer').append(resultText);
			$('#halfText').append('<p style="color: #00008B">parabens Voçe conhece muito sobre risco</p>');
		} else if ($totalScore >= 5 && $totalScore < $questionNumber) {
			resultText += 'Você acertou ' + $totalScore + ' de um total de ' + $questionNumber + ' perguntas! </p>';
			$('.resultContainer').append(resultText);
			$('#halfText').append('<p style="color: #00008B">Parabéns continue melhorando!</p>')
		} else if ($totalScore < 5) {
			resultText += 'Você acertou ' + $totalScore + ' de um total de ' + $questionNumber + ' perguntas! </p>';
			$('.resultContainer').append(resultText);
			$('#halfText').append('<p style="color: #00008B">Tente refazer os testes com mais calma.</p>');
		}
	};//Final da função result - resultado final 

  /*/setTimeout(function () {
			document.getElementById('pag9').style.display = 'none';
			/*document.getElementById('final').style.display = 'block';
		}, 100000);*/

	/*setTimeout(function(){ 
				var div = $("finalResult");
				div.animate({height: '300px', opacity: '0.4'}, "slow");
				div.animate({width: '300px', opacity: '0.8'}, "slow");
				div.animate({height: '100px', opacity: '0.4'}, "slow");
				div.animate({width: '100px', opacity: '0.8'}, "slow");
	}, 30009);*/

	//final score

	$('.absolute').click(function () {
		setTimeout(function () {
			document.getElementById('pag9').style.display = 'none';
		}, 4000);
	/************************************ */
		setTimeout(function () {
			document.getElementById('final').style.display = 'block';
		}, 1000);
});

	$('.absolute').last().click(function () {
		//prevent further clicks on this
		$(this).off('click');
		//show result after last li is clicked
		var $height = $('.finalResult').height();
		printResult();
		$('.finalResult').show();
		/*$('html, body').animate({
			scrollTop: $(document).height() - $height
		},
			15000);*/
	
		function email() {
			perguntasTotal = a + "-" + b + "-" + c + "-" + d + "-" + e + "-" + f + "-" + g + "-" + h + "-" + i + "-" + j + "";
			perguntasTotal;
			pontos = parseInt($totalScore);
			mail = " Usuário " +user+ "";
			/*" acertou  " + correta + " pergunta(s), " + "e  errou  " +errada+ " pergunta(s)" + "- Total de pontos = " + pontos + " !" + "- Total de perguntas certas e erradas são: " + perguntasTotal;*/
		}//final da função email 
		email();
		var templateParams = {
			"user": user,
			"errada": errada,
			"certa": correta,
			"mail": mail,
		};
		emailjs.send('gmail', 'vander', templateParams)
			.then(function (response) {
				alert('SUCCESS!', response.status, response.text);
			}, function (error) {
				console.log('FAILED...', error);
		});
	});// fim da função click
}); //end dom ready - fim do dom 




