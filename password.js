// stap 1 - document.querySelector
// zoek en selecteer de button die je wilt veranderen
const viewPassword =
document.querySelector('.toggle-btn')

// stap 2 - addEventListener
// wachten tot er op wordt geklikt
viewPassword.addEventListener('click', toggleviewPassword)

// stap 3 - functie en toggle
// ook voor het inputveld herhalen, zodat die ook mee veranderd
// password zichtbaar maken
function toggleviewPassword() {
    const passwordField = 
    document.querySelector('#current-password')
    passwordField.type = passwordField.type == 'password' ? 'text' : 'password';
    viewPassword.classList.toggle("view")   //voor styling van button
}