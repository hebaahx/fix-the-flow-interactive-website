
Ontwerp en maak een interactieve website voor een opdrachtgever.

De instructie vind je in: [INSTRUCTIONS.md](https://github.com/fdnd-task/fix-the-flow-interactive-website/blob/main/docs/INSTRUCTIONS.md)

# Titel
Password Visibility Toggle – Interacties met JavaScript

## Beschrijving
Deze pagina is onderdeel van de Change Password functionaliteit van mijn webapplicatie.
De gebruiker kan drie wachtwoordvelden invullen: huidig wachtwoord, nieuw wachtwoord en herhaal nieuw wachtwoord.

Met JavaScript heb ik een show/hide password functie gebouwd.
Door op een icoon te klikken kan de gebruiker kiezen of het wachtwoord zichtbaar is of verborgen blijft. Dit voorkomt typfouten en geeft meer controle.

#### User Story
* As a student, I want to toggle the visibility of content so that I can choose when I can see or hide certain information.

#### Wat je met dit project kan: 
* Wachtwoorden zichtbaar maken
* Wachtwoorden verbergen
* Directe visuele feedback krijgen via een icoon
* Veilig controleren wat je hebt getypt
  
<!-- Voeg een mooie poster visual toe 📸 -->
#### Hier is een link naar mijn live link op github: 
https://hebaahx.github.io/fix-the-flow-interactive-website/password.html

## Kenmerken
#### HTML
Semantische structuur met <form>, <label> en <input>
Drie inputvelden met type="password"
Toggle-button/icoon naast elk wachtwoordveld
Labels gekoppeld met for="" → toegankelijkheid

#### CSS
Styleguide gebruikt voor consistente look & feel
Duidelijke layout voor formulieren
Icoon verandert mee bij tonen/verbergen (via classes)

#### JavaScript Interactie
Belangrijkste technieken die ik heb toegepast:
- document.querySelector()
Ik gebruik document.querySelector() om de toggle-button en het inputveld op te zoeken.
https://github.com/hebaahx/fix-the-flow-interactive-website/blob/0f1945e7582a259ceec3acbf3d902457f3ba58a8/password.js#L1-L4
-addEventListener()
Hier laat ik de button luisteren naar een klik, zodat de functie wordt uitgevoerd:
https://github.com/hebaahx/fix-the-flow-interactive-website/blob/0f1945e7582a259ceec3acbf3d902457f3ba58a8/password.js#L6-L8
-Functions
Hier voeg ik de functie show and hide.
Hier toggle ik het type van het inputveld:
https://github.com/hebaahx/fix-the-flow-interactive-website/blob/0f1945e7582a259ceec3acbf3d902457f3ba58a8/password.js#L13-L16
-classList.toggle()
Met classList.toggle() verander ik de styling van de button, bijvoorbeeld om het icoon te wisselen (werkt nog niet optimaal).
https://github.com/hebaahx/fix-the-flow-interactive-website/blob/0f1945e7582a259ceec3acbf3d902457f3ba58a8/password.js#L17

## Bronnen
https://www.javascripttutorial.net/javascript-dom/javascript-toggle-password-visibility/
https://codepen.io/roelmagdaleno/pen/eYjzraV
https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).

