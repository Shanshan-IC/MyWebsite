//Function starts when document is ready
$(document).ready(function() {
  //Declare variables
  var pikachu =$("#Pikachu");
  //Declare functions
  function completeHandler() {
    //Add text to title
    $("#titel").append("Het is Pikachu!");
    //Change background color to some form of blue and back, 14 times
    TweenMax.to("body", 0.05,{
      backgroundColor: "#d6f6ff",
      repeat:14,
      yoyo:true
    })
    //Change Pikachu's opacity to 0 and back, 7 times
    TweenMax.to(pikachu, 0.1, {
      opacity: '0',
      repeat: 7,
      yoyo: true
    });
  };
  
  //Animation with 5 instructions to change the size, position and scale of the Pikachu, and to rotate him all at once
  TweenLite.to(pikachu, 1, {
    size: "500px",
    left: "500px",
    top: "100px",
    rotation: "720deg",
    scale: "2px",
    //When the animation is done, the function completeHandler is called
    onComplete: completeHandler
  });
})