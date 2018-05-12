// when the ballRollButton is clicked, run the handleBallRollClick function!
$("#ball-roll-btn").click(function() {
  // when this function is run, add the 'ball-roll' class to the box
  $("#box").addClass("ball-roll");
});

// when the box is done animating, run the handleAnimationEnd function!
$("#box").on("animationend", function() {
  // when this function is run, remove all classes from the box
  $("#box").attr("class", "");
});
