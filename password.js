//  Password change  //


// Stap 1 - document.querySelector, Alle buttons selecteren
const toggleButtons = document.querySelectorAll('.toggle-btn')

// Stap 2 - voor elke buton een event listener toevoegen
toggleButtons.forEach(function(viewPassword) {
  viewPassword.addEventListener('click', function() {  

// Stap 3 - Selecteer het inputveld via data input attribuut
const inputId = viewPassword.getAttribute('data-input')
const passwordField = document.querySelector('#' + inputId) //zo selecteer ik de inputvelden

// Selecteer het svg (img) in de button
const icon = viewPassword.querySelector('img')

//Check of het veld nu password is
if(passwordField.type == 'password') { // als het veld password is
    //Maak tekst zichtbaar
    passwordField.type = 'text'
    //Verander svg naar oog met streepje er doorheen
    icon.src = 'assets/hideeye.svg' 
}
//Als het niet zo is
else {
    //Maak tekst weer verborgen
    passwordField.type = 'password'
    //Verander svg naar open oog
    icon.src = 'assets/vieweye.svg'
}

})
})


//  Password security check  //


// Stap 1 - Formulier selecteren


// Stap 2 - Event listener toevoegen op submit


// Stap 3 - Inputwaarden ophalen

//  Foutmeldingen selecteren

// Wachtwoord moet voelden aan: minimaal 8 tekens, 1 cijfer, 1 speciaal teken

// Stap 3a - Check new password

// Stap 3b - Check of passwords overeenkomen