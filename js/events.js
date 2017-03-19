
function getIt() {
  $('p').on('click', function(){
    alert("Hey")
  })
}

function frameIt() {
  $('img').on('load',function(){
    $('img').addClass("tasty")
  })
}

function pressIt() {
  $('input').on('keydown', function(k){
    if (k.which === 71){
      alert("you typed g")
    }
  })
}

function submitIt() {
  $('form').on('submit', function() {
    alert("Your form is going to be submitted now.")
  })
}


// call functions here
$(document).ready(function(){
  getIt()
  frameIt()
  pressIt()
  submitIt()
});
