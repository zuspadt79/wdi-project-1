console.log("fuuuu...");

window.addEventListener("DOMContentLoaded", function(){

  var squareCombinations =  [ [0, 10, 11, 21], [1, 12, 22, 11], [2, 13, 23, 12], [3, 14, 24, 13], 
                              [4, 15, 25, 14], [5, 16, 26, 15], [6, 17, 27, 16], [7, 18, 28, 17], 
                              [8, 19, 29, 18], [9, 20, 30, 19], [21, 32, 42, 31], [22, 33, 43, 32], 
                              [23, 34, 44, 33], [24, 35, 45, 34], [25, 36, 46, 35], [26, 37, 47, 36], 
                              [27, 38, 48, 37], [28, 39, 49, 38], [29, 40, 50, 39], [30, 41, 51, 40],
                              [42, 53, 63, 52], [43, 54, 64, 53], [44, 55, 65, 54], [45, 56, 66, 55], 
                              [46, 57, 67, 56], [47, 58, 68, 57], [48, 59, 69, 58], [49, 60, 70, 59], 
                              [50, 61, 71, 60], [51, 62, 72, 61], [63, 74, 84, 73], [64, 75, 85, 74], 
                              [65, 76, 86, 75], [66, 77, 87, 76], [67, 78, 88, 77], [68, 79, 89, 78], 
                              [69, 80, 90, 79], [70, 81, 91, 80], [71, 82, 92, 81], [72, 83, 93, 82],
                              [84, 95, 105, 94], [85, 96, 106, 95], [86, 97, 107, 96], [87, 98, 108, 97], 
                              [88, 99, 109, 98], [89, 100, 110, 99], [90, 101, 111, 100], [91, 102, 112, 101], 
                              [92, 103, 113, 102], [93, 104, 114, 103], [105, 116, 126, 115], [106, 117, 127, 116], 
                              [107, 118, 128, 117], [108, 119, 129, 118], [109, 120, 130, 119], [110, 121, 131, 120], 
                              [111, 122, 132, 121], [112, 123, 133, 122], [113, 124, 134, 123], [114, 125, 135, 124],
                              [147, 136, 126, 137], [127, 138, 148, 137], [128, 139, 149, 138], [129, 140, 150, 139], 
                              [130, 141, 151, 140], [131, 142, 152, 141], [132, 143, 153, 142], [133, 144, 154, 143], 
                              [134, 145, 155, 144], [135, 146, 156, 145], [147, 158, 168, 157], [148, 159, 169, 158], 
                              [149, 160, 170, 159], [150, 161, 171, 160], [151, 162, 172, 161], [152, 163, 173, 162], 
                              [153, 164, 174, 163], [154, 165, 175, 164], [155, 166, 176, 165], [156, 167, 177, 166],
                              [168, 179, 189, 178], [169, 180, 190, 179], [170, 181, 191, 180], [171, 182, 192, 181], 
                              [172, 183, 193, 182], [173, 184, 194, 183], [174, 185, 195, 184], [175, 186, 196, 185], 
                              [176, 187, 197, 186], [177, 188, 198, 187], [189, 200, 210, 199], [190, 201, 211, 200], 
                              [191, 202, 212, 201], [192, 203, 213, 202], [193, 204, 214, 203], [194, 205, 215, 204], 
                              [195, 206, 216, 205], [196, 207, 217, 206], [197, 208, 218, 207], [198, 209, 219, 208]
                              ];

  var clickedDiv = [];
  var completeSquares = [];

  var changeBackground = function(){
    $('body').css({'background': 'green'})
  };

  // Setting up square combinations (don't do this, it's silly)
//     for(i = 0; i < 199; i++){

//       x = 0;
//       x = x + i;
//       y = x + 11;
//       z = x + 21;
//       w = x + 10;

//       tempArray = [w,x,y,z];
//       squareCombinations.push(tempArray);
console.log(squareCombinations);
//     }

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
        findMatch();

        // console.log(clickedDiv);
      });


  //check if arrays match
  // var counter = 0;

  // for (var i = 0; i < squareCombinations.length; i++) {
  //   for (var j = 0; j < squareCombinations[i].length; j++) {
  //     if(clickedDiv.includes(squareCombinations[i][j])){
  //       changeBackground();
  //       clickedDiv.shift();
  //     }
  //   }
  // }


  // Array.prototype.diff = function(arr2) {
  //     var ret = [];
  //     for(var i in this) {   
  //         if(arr2.indexOf( this[i] ) > -1){
  //             ret.push( this[i] );
  //         }
  //     }
  //     return ret;
  // };

 function findMatch(){
     for (var i = 0; i < squareCombinations.length; i++) {
       for (var j = 0; j < squareCombinations[i].length; j++) {
         var counter = 0;
         for(var k = 0; k < clickedDiv.length; k++) {
           if (clickedDiv.indexOf(squareCombinations[i][j]) >= 0) {
             counter++;
             if(counter> 3) changeBackground();
             
            
           
           }
         }
       }
     }

   };


//completeSquares.push(indexOf(squareCombinations[i]));

// once we find a match in squareCombinations, push that nested array to completeSquares








}); //end