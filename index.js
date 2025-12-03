// Selecteer de pop-up en de knop die het opent
const popupMenu = document.getElementById('popupmenu');

// Functie om het menu te openen of te sluiten
function openMenu() {
    popupMenu.classList.toggle('open');
}

// Sluit het menu als je buiten klikt
document.addEventListener('click', function(event) {
    const isClickInside = popupMenu.contains(event.target) || event.target.classList.contains('clickable');

    if (!isClickInside) {
        popupMenu.classList.remove('open');
    }
});