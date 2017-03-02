//when document loads hide all dots
$(document).ready(function() {
  $('#wrapper').children().addClass("inactive");

//when button clicked 
$('button').click(function() {
  //roll the dice
  $('#wrapper').transition({
    rotateX: "+=360deg",
    rotateY: "+=360deg"
  });

  //get random number from 1-6 and display proper div
  var num = Math.floor(Math.random() * (7 - 1) + 1);
  console.log(num);
  switch (num) {
    case 1:
      $("#one").siblings().addClass("inactive");
      $("#one").removeClass("inactive");
      break;
    case 2:
      $("#two").siblings().addClass("inactive");
      $("#two").removeClass("inactive");
      break;
    case 3:
      $("#three").siblings().addClass("inactive");
      $("#three").removeClass("inactive");
      break;
    case 4:
      $("#four").siblings().addClass("inactive");
      $("#four").removeClass("inactive");
      break;
    case 5:
      $("#fifth").siblings().addClass("inactive");
      $("#fifth").removeClass("inactive");
      break;
    case 6:
      $("#six").siblings().addClass("inactive");
      $("#six").removeClass("inactive");
      break;
  };
});

});

