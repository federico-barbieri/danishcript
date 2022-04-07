// grab all the spans 

let sleep = document.querySelector('.sleep');

let sweet = document.querySelector('.sweet');

let day = document.querySelector('.day');

let write = document.querySelector('.write');

let drive = document.querySelector('.drive');

let call = document.querySelector('.call');

let come = document.querySelector('.come');


// event listeners to change their inner HTML 

sleep.addEventListener('click', () =>{

    if (sleep.innerHTML == "Sleep well"){
        sleep.innerHTML = "Sov godt";
    } else{
        sleep.innerHTML = "Sleep well";
    }
})

sweet.addEventListener('click', () =>{
    if (sweet.innerHTML == "Sweet dreams"){
        sweet.innerHTML = "Drøm sod";
    } else{
        sweet.innerHTML = "Sweet dreams";
    }
})

day.addEventListener('click', () =>{
    if (day.innerHTML == "Have a nice day"){
        day.innerHTML = "Hav en god dag";
    } else{
        day.innerHTML = "Have a nice day";
    }
})

write.addEventListener('click', () =>{
    if (write.innerHTML == "Write soon"){
        write.innerHTML = "Skriv snart";
    } else{
        write.innerHTML = "Write soon";
    }
})

drive.addEventListener('click', () =>{
    if (drive.innerHTML == "Drive carefully"){
        drive.innerHTML = "Kør forsigtigt";
    } else{
        drive.innerHTML = "Drive carefully";
    }
})

call.addEventListener('click', () =>{
    if (call.innerHTML == "Call me"){
        call.innerHTML = "Ring til mig";
    } else{
        call.innerHTML = "Call me";
    }
})

come.addEventListener('click', () =>{
    if (come.innerHTML == "Come in"){
        come.innerHTML = "Kom indenfor";
    } else{
        come.innerHTML = "Come in";
    }
})