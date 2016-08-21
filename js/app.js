console.log("fuuuu...");

window.addEventListener("DOMContentLoaded", function(){

    var clickedDiv = [];
    var squareCombinations = [];
    var tempArray = [];

  // Setting up square combinations (don't do this, it's silly)
    for(i = 0; i < 199; i++){

      x = 0;
      x = x + i;
      y = x + 11;
      z = x + 21;
      w = x + 10;

      tempArray = [w,x,y,z];
      squareCombinations.push(tempArray);
console.log(squareCombinations[i]);
    }

  // setting up grid
  for (var n = 0; n < 11; n++){ 
    for (var i = 0; i < 10; i++){
      $('#container').append('<div class="lines horizontal"></div>');
    }

    if(n === 10){
      break;
    }  

    for (var i = 0; i < 11; i++){
      $('#container').append('<div class="lines vertical"></div>');
    }
  }

  // assigning a value to each child
  $('#container').children().each(function(index){
          var value = (index + $(this).text() );
          $(this).attr('value', value);

      });
 
  // making lines clickable
  $('.lines').click(function(){
        $(this).css('background', 'black');
        // storing value as an integer to the array
        var valueString = $(this).attr('value');
        clickedDiv.push(parseInt(valueString, 10));

console.log(clickedDiv);
      });


  //check if arrays match
  for (var i = 0; i < clickedDiv.length; i++) {
    if($(clickedDiv).not(squareCombinations).length === 0 && $(squareCombinations).not(clickedDiv).length === 0){
      console.log('fart');
    }
  } 
 

  









}); //end