// stap 1 - document.querySelector
// zoek en selecteer de button die je wilt veranderen
const viewPassword =
document.querySelector('.toggle-btn')

// stap 2 - addEventListener
// wachten tot er op wordt geklikt
viewPassword.addEventListener('click', function() {

// stap 3 - selecteer inputveld en svg
const passwordField = document.querySelector('#current-password')
const icon = viewPassword.querySelector('img')

//check of het veld nu password is
if(passwordField.type == 'password') { // als het veld password is
    //maak tekst zichtbaar
    passwordField.type = 'text'
    //verander svg naar oog met streepje er doorheen
    icon.src = 'assets/hideeye.svg' 
}
//als het niet zo is
else {
    //maak tekst weer verborgen
    passwordField.type = 'password'
    //verander svg naar open oog
    icon.src = 'assets/vieweye.svg'
}

}
)

