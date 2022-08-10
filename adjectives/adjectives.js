// POSITIVE ADJECTIVES

let positiveAdj = [["sød", "sødt", "søde"], ["ny", "nyt", "nye"], ["fed", "fedt", "fede"],
                    ["dygtig", "dygtigt", "dygtige"], ["fin", "fint", "fine"], ["hurtig", "hurtigt", "hurtige"],
                    ["sjov", "sjovt", "sjove"], ["langsom", "langsomt", "langsomme"], ["dejlig", "dejligt", "dejlige"],
                    ["kold", "koldt", "kolde"], ["ung", "ungt", "unge"], ["stor", "stort", "store"], ["lang", "langt", "lange"],
                    ["god", "godt", "gode"], ["lille", "lille", "små"], ["gammel", "gammelt", "gamle"],
                    ["praktisk", "praktisk", "praktiske"], ["hjemmelavet", "hjemmelavet", "Hjemmelavede"],
                    ["spændende", "spændende", "spændende"], ["hård", "hårdt", "hårde"], ["lækker", "lækkert", "lækre"],
                    ["vild", "vildt", "vilde"]]

//   weird letters æ ø å

//  A FUNCTION THAT SELECTS WHICH FORM WILL BE DISPLAYED

const form1 = document.querySelector('.adjForm1');
const form2 = document.querySelector('.adjForm2');
const form3 = document.querySelector('.adjForm3');


let randomForm = 0;

const selectForm = () => {
  let randomNum = Math.floor((Math.random() * 3) + 1);

  if (randomNum == 1){
    form1.style.display = "flex";
    form2.style.display = "none";
    form3.style.display = "none";
    randomForm = 1;
  } else if (randomNum == 2){
    form1.style.display = "none";
    form2.style.display = "flex";
    form3.style.display = "none";
    randomForm = 2;
  } else {
    form1.style.display = "none";
    form2.style.display = "none";
    form3.style.display = "flex";
    randomForm = 3;
  }
  }


// A FUNCTION THAT RETURNS ONE OF THE ARRAYS FROM THE POSITIVEADJ ARRAY

const positiveArray = () => {
    return Math.floor(Math.random() * positiveAdj.length);
  }

  
// A FUNCTION THAT PLACES EACH ELEMENT OF THE ARRAY IN ONE OF THE INPUTS OF THE FORM IN THE HTML

// all possible positions

const form1pos1 = document.querySelector('.form1pos1');
const form1pos2 = document.querySelector('.form1pos2');
const form1pos3 = document.querySelector('.form1pos3');

const form2pos1 = document.querySelector('.form2pos1');
const form2pos2 = document.querySelector('.form2pos2');
const form2pos3 = document.querySelector('.form2pos3');

const form3pos1 = document.querySelector('.form3pos1');
const form3pos2 = document.querySelector('.form3pos2');
const form3pos3 = document.querySelector('.form3pos3');


// depending on the form, there is one spot that needs to remain empty
// so the user can insert the missing word and practice.

let selectedArray;

const placeElementsInForm = () => {
  selectForm();
  selectedArray = positiveAdj[positiveArray()];

  if(randomForm == 1){
    form1pos1.innerHTML = selectedArray[0];
    form1pos2.innerHTML = selectedArray[1];
  } else if (randomForm == 2){
    form2pos1.innerHTML = selectedArray[0];
    form2pos3.innerHTML = selectedArray[2];
  } else {
    form3pos2.innerHTML = selectedArray[1];
    form3pos3.innerHTML = selectedArray[2];
  }

}

placeElementsInForm();


// grab user inputs value 

let inputForm1 = document.querySelector(".form1pos3");

let inputForm2 = document.querySelector(".form2pos2");

let inputForm3 = document.querySelector(".form3pos1");


// a function to show the next array of adjectives 
// This is the end, but it's here so it is read before the 
// event listener

function newAdjectives(){

  // this function picks a random number to choose which form 
  // will be displayed. It also adds the adjectives to the labels
  // of the form 
  placeElementsInForm();
  
  
  // erase the previous value of the input
  // and turn the border bottom white again 
  inputForm1.value = "";
  inputForm1.style.borderBottom = "1px solid white";
  inputForm2.value = "";
  inputForm2.style.borderBottom = "1px solid white";
  inputForm3.value = "";
  inputForm3.style.borderBottom = "1px solid white";
  }
//

// target the submit button and match user input with array

let submitBtn1 = document.querySelector('.submit-btn1');
let submitBtn2 = document.querySelector('.submit-btn2');
let submitBtn3 = document.querySelector('.submit-btn3');


// if form 1 is displayed

submitBtn1.addEventListener('click', (e) => {

  e.preventDefault();

  if (randomForm == 1 && inputForm1.value.toLowerCase().trim("") === selectedArray[2]){
    inputForm1.style.borderBottom = "2px solid green";
    
    setTimeout(newAdjectives, 900);

  } else{
    inputForm1.style.borderBottom = "2px solid red";

    setTimeout(newAdjectives, 900);
  }
})


// if form 2 is displayed

submitBtn2.addEventListener('click', (e) => {

  e.preventDefault();

  if (randomForm == 2 && inputForm2.value.toLowerCase().trim("") === selectedArray[1]){
    inputForm2.style.borderBottom = "2px solid green";

    setTimeout(newAdjectives, 900);

  } else{
    inputForm2.style.borderBottom = "2px solid red";
    
    setTimeout(newAdjectives, 900);
  }

})

// if form 3 is displayed

submitBtn3.addEventListener('click', (e) => {

  e.preventDefault();

  if (randomForm == 3 && inputForm3.value.toLowerCase().trim("") === selectedArray[0]){
    inputForm3.style.borderBottom = "2px solid green";

    setTimeout(newAdjectives, 900);

  } else{
    inputForm3.style.borderBottom = "2px solid red";

    setTimeout(newAdjectives, 900);
  }
})
