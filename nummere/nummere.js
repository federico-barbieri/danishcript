// making an object with the numbers from 0 to 100

  let numbers = {
    null: 0,
    en: 1,
    to: 2,
    tre: 3,
    fire: 4,
    fem: 5,
    seks: 6,
    syv: 7,
    otte: 8,
    ni: 9,
    ti: 10,
    elleve: 11,
    tolv: 12,
    tretten: 13,
    fjorten: 14,
    femten: 15,
    seksten: 16,
    sytten: 17,
    atten: 18,
    nitten: 19,
    tyve: 20,
    enogtyve: 21,
    toogtyve: 22,
    treogtyve: 23,
    fireogtyve: 24,
    femogtyve: 25,
    seksogtyve: 26,
    syvogtyve: 27,
    otteogtyve: 28,
    niogtyve: 29,
    tredive: 30,
    enogtredive: 31,
    toogtredive: 32,
    treogtredive: 33,
    fireogtredive: 34,
    femogtredive: 35,
    seksogtredive: 36,
    syvogtredive: 37,
    otteogtredive: 38,
    niogtredive: 39,
    fyrre: 40
  }

  // generate a random number 

  let randomNumber = () => {
      return Math.floor(Math.random() * Object.keys(numbers).length);
  }

  // store the random number in a variable 

  let storeNumber = randomNumber();

  // show the stored number in the html

  let displayedNumber = document.querySelector('.random-number');

  displayedNumber.innerHTML = storeNumber;


  // create a function to start everything again after each word

  function nextNumber(){
        randomNumber();
        storeNumber = randomNumber();
        displayedNumber.innerHTML = storeNumber;
        displayedNumber.style.border = "1px solid white";
        userInput.value = "";
  }


  // check if the value of the input matches the number 

  let userInput = document.querySelector('.number-input');

  let submitBtn = document.querySelector('.submit-btn');

  
  submitBtn.addEventListener('click', (e) => {

    e.preventDefault();

    if(userInput.value.toLowerCase().trim('') === Object.keys(numbers)[storeNumber]){

        displayedNumber.style.border = "2px solid green";
        
        setTimeout(nextNumber, 900);
        
    } else{
        displayedNumber.style.border = "2px solid red";
        
        setTimeout(nextNumber, 900);
    }

  })

  

