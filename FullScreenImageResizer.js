// Full screen image resizer
// GNU GPL V3
// by Étienne Ozeray
// --------------------------
// USAGE:
// Put this file in your website folder ;
// Call it after calling jquery in your <head>: <script type="text/javascript" src="scripts/FullScreenImageResizer.js"></script> ;
// Set your image(s) in position: fixed ;
// Call the function like this: $('.myImage').fullScreenImageResizer();


(function ( $ ) {

  $.fn.fullScreenImageResizer = function() {

    // Get window width an height
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();

    // Get images width an height
    var imageWidth = this.width();
    var imageHeight = this.height();

    // Landscape case
    if (imageWidth >= imageHeight){
      // Scale image width to window width
      if (windowWidth > windowHeight){
        this.width(windowWidth);
        this.height('auto');
        imageHeightNew = this.height();
        // center image vertically
        var distanceFromTop = -((imageHeightNew - windowHeight)/2);
        this.css({
          'top': distanceFromTop,
          'left': 0,
        })
        // Dynamically scale image height to window height when window height become greater than image height
        if (distanceFromTop > 0){
          this.height(windowHeight);
          this.width('auto')
          imageWidthNew = this.width();
          this.css({
            'top': '0px',
            'left': -((imageWidthNew - windowWidth)/2),
          })
        }
      // Scale image height to window height when window height is greater than image width
      } else if (windowWidth < windowHeight){
        this.height(windowHeight);
        this.width('auto')
        imageWidthNew = this.width();
        var distanceFromLeft = -((imageWidthNew - windowWidth)/2);
        this.css({
          'top': '0px',
          'left': distanceFromLeft,
        })
        // Dynamically scale image width to window width when window width become greater than image height
        if (distanceFromLeft > 0){
          this.width(windowWidth);
          this.height('auto');
          imageHeightNew = image.height();
          this.css({
            'top': distanceFromTop,
            'left': 0,
          })
        }
      }
    }
  // Portrait case
  if (imageWidth < imageHeight){
    // TO DO!
  }

  };

}( jQuery ));
