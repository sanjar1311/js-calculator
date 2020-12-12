var elForm = document.querySelector('.js-form');
var elInput1 = document.querySelector('.js-input1');
var elInput3 = document.querySelector('.js-input3');
var elOutput = document.querySelector('.js-output');

var elAddition = document.querySelector('.addition')
var elSubtraction = document.querySelector('.subtraction')
var elMultiplication = document.querySelector('.multiplication')
var elDivision = document.querySelector('.division')


elForm.addEventListener('submit', function(evt) {
  evt.preventDefault();

  var elUserNumber1 = Number(elInput1.value);
  var elUserNumber3 = Number(elInput3.value);
  var result;

  elAddition.addEventListener('click', function(){
    result = elUserNumber1 + elUserNumber3;
    elOutput.textContent = `Result is: ${result}`;
  });
  elSubtraction.addEventListener('click', function() {
    result = elUserNumber1 - elUserNumber3;
     elOutput.textContent = `Result is: ${result}`;
  });
  elMultiplication.addEventListener('click', function() {
    result = elUserNumber1 * elUserNumber3;
     elOutput.textContent = `Result is: ${result}`;
  });
  elDivision.addEventListener('click', function() {
    result = elUserNumber1 / elUserNumber3;
     elOutput.textContent = `Result is: ${result}`;
  });

});