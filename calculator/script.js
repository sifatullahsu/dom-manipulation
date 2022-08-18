function getId (id){
  return document.getElementById(id);
}

function setText (id, text){
  getId(id).innerText = text;
}

function removeAddClass(id, remove, add){
  getId(id).classList.remove(remove);
  getId(id).classList.add(add);
}

function specialDigit(displayLarge, digit){
  
  if(digit === '.'){
    if(displayLarge == ''){
      displayLarge = 0+digit;
    }
    else {
      const array = displayLarge.split(/[/,*,+,-]/);
      const lastItem = array[array.length - 1];
      
      if(lastItem.includes('.') === true){
        displayLarge = displayLarge;
        console.log('hi');
      } else {
        displayLarge = displayLarge + digit;
      }
    }
  }
  else if(displayLarge.endsWith('+') || displayLarge.endsWith('-') || displayLarge.endsWith('*') || displayLarge.endsWith('/')){
    displayLarge = displayLarge.slice(0, displayLarge.length - 1);
  }
  else if(displayLarge === ''){
    displayLarge = 0;
  }

  

  return displayLarge;
}

function calculation(result){
  if(!result.endsWith('+') && !result.endsWith('-') && !result.endsWith('/') && !result.endsWith('*')){
    let equation = eval(result);
    
    if(equation % 1 == 0){
      equation == equation;
    }
    else{
      equation = equation.toFixed(2);
      console.log(equation);
    }

    setText('display_small', equation);
  }
}


function addDisplay(event){
  removeAddClass('display_large', 'text-xl', 'text-3xl')
  removeAddClass('display_small', 'text-3xl', 'text-xl')
  getId('display_ac').style.display = 'none';


  let getDisplayLarge = getId('display_large').innerText;
  let digit = event.target.value;


  if(getId('calculator-display').hasAttribute('data-equal') == true){
    getId('calculator-display').removeAttribute('data-equal');

    if(digit == '0' || digit == '1' || digit == '2' || digit == '3' || digit == '4' || digit == '5' || digit == '6' || digit == '7' || digit == '8' || digit == '9'){
      getDisplayLarge = '';
    }
    else{
      getDisplayLarge = getId('display_small').innerText;
    }
  }


  // If Operator Digit
  if(digit == '+' || digit == '-' || digit == '*' || digit == '/' || digit == '.'){
    getDisplayLarge = specialDigit(getDisplayLarge, digit);
  }

  let result = '';

  if(digit != '.'){
    result = getDisplayLarge + digit;
  } else{
    result = getDisplayLarge;
  }

  // Set Large Display Text
  setText('display_large', result);

  // Calculation & Set Small Display Text
  calculation(result);
}

document.getElementById('digit_ac').addEventListener('click', function(){
  getId('display_large').innerText = '';
  getId('display_small').innerText = '';
  getId('display_ac').style.display = 'unset';
});

document.getElementById('digit_delete').addEventListener('click', function(){
  const getDisplayLarge = getId('display_large').innerText;
  const remove = getDisplayLarge.slice(0, getDisplayLarge.length - 1);
  
  if(remove.length !== 0){
    setText('display_large', remove);
    calculation(remove);
  }
  else{
    setText('display_large', '');
    setText('display_small', '');
    getId('display_ac').style.display = 'unset';
  }
});

document.getElementById('digit_equel').addEventListener('click', function(){
  removeAddClass('display_large', 'text-3xl', 'text-xl')
  removeAddClass('display_small', 'text-xl', 'text-3xl')

  getId('calculator-display').setAttribute('data-equal', 'true');
});


document.getElementById('digit_1').addEventListener('click', addDisplay);
document.getElementById('digit_2').addEventListener('click', addDisplay);
document.getElementById('digit_3').addEventListener('click', addDisplay);
document.getElementById('digit_4').addEventListener('click', addDisplay);
document.getElementById('digit_5').addEventListener('click', addDisplay);
document.getElementById('digit_6').addEventListener('click', addDisplay);
document.getElementById('digit_7').addEventListener('click', addDisplay);
document.getElementById('digit_8').addEventListener('click', addDisplay);
document.getElementById('digit_9').addEventListener('click', addDisplay);
document.getElementById('digit_0').addEventListener('click', addDisplay);

document.getElementById('digit_plus').addEventListener('click', addDisplay);
document.getElementById('digit_minus').addEventListener('click', addDisplay);
document.getElementById('digit_division').addEventListener('click', addDisplay);
document.getElementById('digit_multiplication').addEventListener('click', addDisplay);

document.getElementById('digit_point').addEventListener('click', addDisplay);