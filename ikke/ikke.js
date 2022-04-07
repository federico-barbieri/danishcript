// create an array with all the sentences 

let sentences = 
    ["Du kommer fra Tyskland,", "Marie taler ikke dansk,",
    "Du cykler ikke på arbejde,",
    "Du arbejder altid om lørdagen,",
    "Han underviser  i engelsk,",
    "Du er ikke 30 endnu,",
    "Han er single,",
    "Norreport ligger ikke på Østerbro,",
    "Du har ikke fødselsdag på fredag,",
    "Du har tre hunde,", "Hun hedder Zina,",
    "Deres kat er ikke stor,", "Dit hus er ikke gammel,",
    "Din bror kan godt lide is,", "Bananas er ikke gode for dig,",
    "Det regner altid i Danmark,", "Du foretrækker Netflix end gå i biografen,",
    "Din mor er ikke en arkitekt,", "Argentina er ikke nær Danmark,",
    "Der er ikke noget bedre end at drikke en øl på stranden,",
    "Du har flere bøger,", "Hun spiser ikke kød,",
    "Han spiller ikke fodbold,", "Du kan laver mad,",
    "De kigger efter dine børn,", "Børnene sover ikke for meget tid,",
    "Hans far arbejder på weekenden,", "Du kan spille guitaren,"
]


// store the keyword "ikke" in a variable

let ikke = "ikke";


// get a random number to use in the array

const pickSentence = () => {
    let storeIt = Math.floor(Math.random() * sentences.length);
    return storeIt;
  }

// target span and modify it  

const spanToModify = document.querySelector('.sentence-to-modify');

// store the random number 

let chosenNum = pickSentence();

spanToModify.innerHTML = sentences[chosenNum];



// create a function so after clicking on the buttons 
// the whole process starts again

function nextSentence(){
    chosenNum;
    pickSentence();
    chosenNum = pickSentence();
    spanToModify.innerHTML = sentences[chosenNum];
    ikkeBtn.style.border = "none";
    velBtn.style.border = "none";
}

// target ikke and vel buttons 

const ikkeBtn = document.querySelector('.ikke-btn');
const velBtn = document.querySelector('.vel-btn');

// event listeners for the buttons 

ikkeBtn.addEventListener('click', () => {


    // if you click on the ikke btn and you're correct, the border turns green
    // Otherwise, it turns red

    if (sentences[chosenNum].includes(ikke)){
        ikkeBtn.style.border = "1px solid red";
        
        setTimeout(nextSentence, 900);
    } else{
        ikkeBtn.style.border = "1px solid green";
        
        setTimeout(nextSentence, 900);
    }
   
})

velBtn.addEventListener('click', () => {


    // if you click on the vel btn and you're correct, the border turns green
    // Otherwise, it turns red

    if (sentences[chosenNum].includes(ikke)){
        velBtn.style.border = "1px solid green";
        
        setTimeout(nextSentence, 900);
    } else{
        velBtn.style.border = "1px solid red";
        
        setTimeout(nextSentence, 900);
    }   
})

