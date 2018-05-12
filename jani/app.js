// when the ballRollButton is clicked, run the handleBallRollClick function!
$("#ball-roll-btn").click(function() {
  // when this function is run, add the 'ball-roll' class to the box
  $("#box").addClass("ball-roll");
});

$("#ball-squish-btn").click(function() {
  $("#box").addClass("squish");
});

$("#ball-bounce-btn").click(function() {
  $("#box").addClass("ball-jump");
});

$("#ball-slink-btn").click(function() {
  $("#box").addClass("slink");
});

$("#ball-struggle-btn").click(function() {
  $("#box").addClass("struggle");
});

$("#ball-groll-btn").click(function() {
  $("#box").addClass("groll");
});

// when the box is done animating, run the handleAnimationEnd function!
$("#box").on("animationend", function() {
  // when this function is run, remove all classes from the box
  $("#box").attr("class", "");
});


