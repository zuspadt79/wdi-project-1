window.addEventListener("DOMContentLoaded", function(){

 $(document).ready(function() {
  var width  = 10;  

  for(var x = 0; x < 10; x++) {
   for(var y = 0; y < 10; y++) {
     var $unit = $("<div class='box'>" +
      "<div class='top'></div>" +
      "<div class='right'></div>" +
      "<div class='bottom'></div>" +
      "<div class='left'></div>" +
      "</div>");
     $unit.appendTo('#container');
   }
  }

   var $boxes = $(".box");

   for (var i = 0; i < $boxes.length; i++) {
    if (i < width) {
      $($boxes[i]).find(".top").css("background", "black");
    }
    
    if ((i+1) % width === 0) {
      $($boxes[i]).find(".right").css("background", "black");
    }

    if (i % width === 0) {
      $($boxes[i]).find(".left").css("background", "black");
    }

    if (i > ((width*width)-(width+1))) {
      $($boxes[i]).find(".bottom").css("background", "black");
    }
   }

   $('.box div').on('click', function() {
      $(this).css("background", "black");
    });
 })





}); //end



