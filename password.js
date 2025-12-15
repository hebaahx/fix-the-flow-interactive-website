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
const form = document.querySelector('.password-form')


// Stap 2 - Event listener toevoegen op submit
form.addEventListener('submit', function(e){
 e.preventDefault() // voorkomt dat formulier direct verzendt


// Stap 3 - Inputwaarden ophalen
const newPassword = document.querySelector('#new-password').value
const repeatPassword = document.querySelector('#new-password-repeat').value

//  Foutmeldingen selecteren
const newPasswordError = document.querySelector('#new-password-error')
const repeatPasswordError = document.querySelector('#repeat-password-error')

// Wachtwoord moet voelden aan: minimaal 8 tekens, 1 cijfer, 1 speciaal teken
const passwordRegex =  /^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;

// Stap 3a - Check new password
if(!passwordRegex.test(newPassword)) {
   newPasswordError.textContent = "Password must be at least 8 characters, include a number and a special character.";
   return; // stop submit
}
else {
   newPasswordError.textContent = ""; // geen fout
}

// Stap 3b - Check of passwords overeenkomen

if(newPassword !== repeatPassword) {
  repeatPasswordError.textContent = "Passwords do not match.";
  return; // stop submit
}

else {
  repeatPasswordError.textContent = ""; // geen fout
}

//Als alles klopt :)
alert("Password changed successfully!");
  form.submit()

})

