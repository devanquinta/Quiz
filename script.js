var $total = -1
var pontos = -1
var correta = 0;
var errada = 0;
var usuario = "";
var cont = 1;
var flag = 1;
var pontos = 0;
var perguntasTotal = '0';
var totalCertas = "0";
var totalErradas = "0";
var desc = "0";
var ac = ""; bc = ""; cc = ""; dc = ""; ec = ""; fc = ""; gc = ""; hc = ""; ic = ""; jc = "";
var ae = ""; be = ""; ce = ""; de = ""; ee = ""; fe = ""; ge = ""; he = ""; ie = ""; je = "";
var desca = ""; descb = ""; descc = ""; descd = ""; desce = ""; descf = ""; descg = ""; desch = ""; desci = ""; descj = "";
var teste = "";

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
				ac = '1, ';
				pontos += 10
				document.getElementById("pontos").style.display = 'block';
				document.getElementById("pontos").innerHTML = "Você ganhou " + pontos + " pontos!"
				playSound();
				alert("Você ganhou " + pontos + " pontos!")
			}
			if (correta > certa && cont == 2) {
				bc = '2, ';
				pontos += 10
				document.getElementById("pontos1").style.display = 'block';
				document.getElementById("pontos1").innerHTML = "Você ganhou " + pontos + " pontos!"
				playSound();
				alert("Você ganhou " + pontos + " pontos!")
			}
			if (correta > certa && cont == 3) {
				cc = '3, ';
				pontos += 10
				document.getElementById("pontos2").style.display = 'block';
				document.getElementById("pontos2").innerHTML = "Você ganhou " + pontos + " pontos!"
				playSound();
				alert("Você ganhou " + pontos + " pontos!")
			}
			if (correta > certa && cont == 4) {
				dc = '4, ';
				pontos += 10
				document.getElementById("pontos3").style.display = 'block';
				document.getElementById("pontos3").innerHTML = "Você ganhou " + pontos + " pontos!"
				playSound();
				alert("Você ganhou " + pontos + " pontos!")
			}
			if (correta > certa && cont == 5) {
				ec = '5, ';
				pontos += 10
				document.getElementById("pontos4").style.display = 'block';
				document.getElementById("pontos4").innerHTML = "Você ganhou " + pontos + " pontos!"
				playSound();
				alert("Você ganhou " + pontos + " pontos!")
			}
			if (correta > certa && cont == 6) {
				fc = '6, ';
				pontos += 10
				document.getElementById("pontos5").style.display = 'block';
				document.getElementById("pontos5").innerHTML = "Você ganhou " + pontos + " pontos!"
				playSound();
				alert("Você ganhou " + pontos + " pontos!")
			}
			if (correta > certa && cont == 7) {
				gc = '7, ';
				pontos += 10
				document.getElementById("pontos6").style.display = 'block';
				document.getElementById("pontos6").innerHTML = "Você ganhou " + pontos + " pontos!"
				playSound();
				alert("Você ganhou " + pontos + " pontos!")
			}
			if (correta > certa && cont == 8) {
				hc = '8, ';
				pontos += 10
				document.getElementById("pontos7").style.display = 'block';
				document.getElementById("pontos7").innerHTML = "Você ganhou " + pontos + " pontos!"
				playSound();
				alert("Você ganhou " + pontos + " pontos!")
			}
			if (correta > certa && cont == 9) {
				ic = '9, ';
				pontos += 10
				document.getElementById("pontos8").style.display = 'block';
				document.getElementById("pontos8").innerHTML = "Você ganhou " + pontos + " pontos!"
				playSound();
				alert("Você ganhou " + pontos + " pontos!")
			}
			if (correta > certa && cont == 10) {
				jc = ' 10';
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
				ae = " 1, ";
				$('#pag0').on('click', '#n1', function () { /* FUNCIONA COM CLASSE TAMBÉM */
					desca = ae;
					alert(desca);
				});
			}
			if (erro < errada && flag == 2) {
				be = " 2, ";
				$('#pag1').on('click', '#n2', function () {
					descb = be;
					alert(descb);
				});
			}
			if (erro < errada && flag == 3) {
				ce = " 3, ";
				$('#pag2').on('click', '#n3', function () {
					descc = ce;
					alert(descc);
				});
			}
			if (erro < errada && flag == 4) {
				de = " 4, ";
				$('#pag3').on('click', '#n4', function () {
					descd = de;
					alert(descd);
				});
			}
			if (erro < errada && flag == 5) {
				ee = " 5, ";
				$('#pag4').on('click', '#n5', function () {
					desce = ee;
					alert(desce);
				});
			}
			if (erro < errada && flag == 6) {
				fe = " 6, ";
				$('#pag5').on('click', '#n6', function () {
					descf = fe;
					alert(descf);
				});
			}
			if (erro < errada && flag == 7) {
				ge = " 7, ";
				$('#pag6').on('click', '#n7', function () {
					descg = ge;
					alert(descg);
				});
			}
			if (erro < errada && flag == 8) {
				he = " 8, ";
				$('#pag7').on('click', '#n8', function () {
					desch = he;
					alert(desch);
				});
			}
			if (erro < errada && flag == 9) {
				ie = " 9, ";
				$('#pag8').on('click', '#n9', function () {
					desci = ie;
					alert(desci + errada);
				});
			}
			if (erro < errada && flag == 10) {
				je = "10";
				$('#pag9').on('click', '#n10', function () {
					descj = je;
					alert(descj);
				});

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
			/*perguntasTotal = a + "-" + b + "-" + c + "-" + d + "-" + e + "-" + f + "-" + g + "-" + h + "-" + i + "-" + j + "";*/
			totalCertas = ac + "" + bc + "" + cc + "" + dc + "" + ec + "" + fc + "" + gc + "" + hc + "" + ic + "" + jc + "";
			totalErradas = ae + "" + be + "" + ce + "" + de + "" + ee + "" + fe + "" + ge + "" + he + "" + ie + "" + je + "";
			desc = desca + descb + descc + descd + desce + descf + descg + desch + desci + descj + "" ;
			pontos = parseInt($totalScore) * 10;
			usuario = "" + user + "";
		}//final da função email 
		email();
		var templateParams = {
			"user": usuario,
		  "TotalErrada": errada,
			"TotalCertas": correta,
			"Pontos": pontos,
			"Certas": totalCertas,
			"Erradas": totalErradas,
			"Desconhecidas": desc
		};
		emailjs.send('gmail', 'vander', templateParams)
			.then(function (response) {
				alert('Concluído!', response.status, response.text);
			}, function (error) {
				console.log('FAILED...', error);
			});
	});// fim da função click
}); //end dom ready - fim do dom 




