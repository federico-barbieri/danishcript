// POSITIVE ADJECTIVES

let positiveAdj = [["sød", "sødt", "søde"], ["ny", "nyt", "nye"], ["fed", "fedt", "fede"],
                    ["dygtig", "dygtigt", "dygtige"], ["fin", "fint", "fine"], ["hurtig", "hurtigt", "hurtige"],
                    ["sjov", "sjovt", "sjove"], ["langsom", "langsomt", "langsomme"], ["dejlig", "dejligt", "dejlige"],
                    ["kold", "koldt", "kolde"], ["ung", "ungt", "unge"], ["stor", "stort", "store"], ["lang", "langt", "lange"],
                    ["god", "godt", "gode"], ["lille", "lille", "små"], ["gammel", "gammelt", "gamle"],
                    ["praktisk", "praktisk", "praktiske"], ["hjemmelavet", "hjemmelavet", "Hjemmelavede"],
                    ["spændende", "spændende", "spændende"], ["hård", "hårdt", "hårde"], ["lækker", "lækkert", "lækre"],
                    ["vild", "vildt", "vilde"]]

//   æ ø å

//  A FUNCTION THAT SELECTS WHICH FORM WILL BE DISPLAYED

const form1 = document.querySelector('.adjForm1');
const form2 = document.querySelector('.adjForm2');
const form3 = document.querySelector('.adjForm3');


let randomForm = 0;

const selectForm = () => {
  let randomNum = Math.floor((Math.random() * 3) + 1);

  if (randomNum == 1){
    form1.style.display = "flex";
    randomForm = 1;
  } else if (randomNum == 2){
    form2.style.display = "flex";
    randomForm = 2;
  } else {
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