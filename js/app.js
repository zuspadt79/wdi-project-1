window.addEventListener("DOMContentLoaded", function(){

  var counter = 0;
  // var squareCombinations =  [[0, 10, 11, 21], [1, 12, 22, 11], [2, 13, 23, 12], [3, 14, 24, 13], 
  // [4, 15, 25, 14], [5, 16, 26, 15], [6, 17, 27, 16], [7, 18, 28, 17], 
  // [8, 19, 29, 18], [9, 20, 30, 19], [21, 32, 42, 31], [22, 33, 43, 32], 
  // [23, 34, 44, 33], [24, 35, 45, 34], [25, 36, 46, 35], [26, 37, 47, 36], 
  // [27, 38, 48, 37], [28, 39, 49, 38], [29, 40, 50, 39], [30, 41, 51, 40],
  // [42, 53, 63, 52], [43, 54, 64, 53], [44, 55, 65, 54], [45, 56, 66, 55], 
  // [46, 57, 67, 56], [47, 58, 68, 57], [48, 59, 69, 58], [49, 60, 70, 59], 
  // [50, 61, 71, 60], [51, 62, 72, 61], [63, 74, 84, 73], [64, 75, 85, 74], 
  // [65, 76, 86, 75], [66, 77, 87, 76], [67, 78, 88, 77], [68, 79, 89, 78], 
  // [69, 80, 90, 79], [70, 81, 91, 80], [71, 82, 92, 81], [72, 83, 93, 82],
  // [84, 95, 105, 94], [85, 96, 106, 95], [86, 97, 107, 96], [87, 98, 108, 97], 
  // [88, 99, 109, 98], [89, 100, 110, 99], [90, 101, 111, 100], [91, 102, 112, 101], 
  // [92, 103, 113, 102], [93, 104, 114, 103], [105, 116, 126, 115], [106, 117, 127, 116], 
  // [107, 118, 128, 117], [108, 119, 129, 118], [109, 120, 130, 119], [110, 121, 131, 120], 
  // [111, 122, 132, 121], [112, 123, 133, 122], [113, 124, 134, 123], [114, 125, 135, 124],
  // [147, 136, 126, 137], [127, 138, 148, 137], [128, 139, 149, 138], [129, 140, 150, 139], 
  // [130, 141, 151, 140], [131, 142, 152, 141], [132, 143, 153, 142], [133, 144, 154, 143], 
  // [134, 145, 155, 144], [135, 146, 156, 145], [147, 158, 168, 157], [148, 159, 169, 158], 
  // [149, 160, 170, 159], [150, 161, 171, 160], [151, 162, 172, 161], [152, 163, 173, 162], 
  // [153, 164, 174, 163], [154, 165, 175, 164], [155, 166, 176, 165], [156, 167, 177, 166],
  // [168, 179, 189, 178], [169, 180, 190, 179], [170, 181, 191, 180], [171, 182, 192, 181], 
  // [172, 183, 193, 182], [173, 184, 194, 183], [174, 185, 195, 184], [175, 186, 196, 185], 
  // [176, 187, 197, 186], [177, 188, 198, 187], [189, 200, 210, 199], [190, 201, 211, 200], 
  // [191, 202, 212, 201], [192, 203, 213, 202], [193, 204, 214, 203], [194, 205, 215, 204], 
  // [195, 206, 216, 205], [196, 207, 217, 206], [197, 208, 218, 207], [198, 209, 219, 208]
  // ];

  var squareCombinations = buildSquareCombinations()

  function buildSquareCombinations(){
    var combinations = [];
    for (var i = 0; i < 198; i++) {
      combinations.push([i, i+10, i+11, i+21])
    }
    return combinations;
  }

  var clickedDiv       = []; // records value of what was clicked
  var completeSquares  = []; // push commpleted values here?
  var playerOneSquares = [];
  var playerTwoSquares = [];
  var spliceArray      = []

  for (var n = 0; n < 11; n++){ 
    for (var i = 0; i < 10; i++){
      $('#container').append('<div class="lines horizontal"></div>');
    }

    if (n === 10){
      break;
    }  

    for (var i = 0; i < 11; i++){
      $('#container').append('<div class="lines vertical"></div>');
    }
  }

  // assigning a value to each child
  $('#container').children().each(function(index){
    var value = (index + $(this).text() );
    $(this).attr('data-value', value);
  });

  // making lines clickable
  $('.lines').on("click", function(){

    $(this).addClass('clicked');

    var clicked = $(".clicked");

    if (counter  % 2 === 0) {
      $(this).addClass('playerOne')
    } else {
      $(this).addClass('playerTwo')
    }

    var clickedLines = clicked.map(function(i, clickedDiv){
      return $(clickedDiv).data("value");
    });

    clickedLines = [].slice.call(clickedLines)

    $.each(squareCombinations, function(i, winArray){
      var counter = 0;
      $.each(winArray, function(j, value){
        if (!!~clickedLines.indexOf(value)) {
          counter++;
          if (counter === 4) {
            squareCombinations[i] = [null, null, null, null];
            return console.log("Box Checked");
          }
        }
      }); 
    });
 
    counter++;
  });

});