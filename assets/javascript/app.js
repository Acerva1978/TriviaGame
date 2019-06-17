window.onload = function() {
    $(".conteiner").show();
    $(".middlebox").hide();
    $(".lastbox").hide();
  };



  $(document).ready(function(){
    
        var number = 60;
		var intervalId;
		var correctCount = 0;
		var wrongCount = 0;
        var unanswered = 0;
        
        function countdownTimer(){
            intervalId = setInterval(decrement, 1000);
    }

    function decrement(){
        number--;

        $(".start").html(" " + number);
        if (number ===1){
            $(".start").html(" " + number);
        }
        else if(number ===0) {
            $(".conteiner").hide();
           $(".middlebox").hide();
            $(".lastbox").show();
            stop();
           
            displaySummary();
        }
    }

    function stop() {
        clearInterval(intervalId);
    }

   


    function displaySummary(){
        $('.results').show();
        unanswered = (6-(correctCount+wrongCount));
        $(".correctAnswers").text("Correct Answers:" + " " + correctCount); 
        $(".wrongAnswers").text("Wrong Answers:" + " " + wrongCount); 
        $(".unAnswers").text("Unanswered:" + " " + unanswered); 
    }


    $("#start").click(function(){
        $(".conteiner").hide();
        $(".middlebox").show();
        $(".lastbox").hide();
        countdownTimer()
       
      });

      $("#done").click(function(){
        $(".conteiner").hide();
        $(".middlebox").hide();
        $(".lastbox").show();
        displaySummary()
      });

      $('input[type=radio]').on ('change', function(){
		correctCount = $('input[value=correct]:checked').length;
		wrongCount = $('input[value=wrong]:checked').length;
		unanswered = (6-(correctCount+wrongCount));
		});


   });





   
