const redSquare = document.querySelector("#redSquare");
console.log(redSquare);

redSquare.style.height = "100px";
redSquare.style.width = "100px";
redSquare.style.backgroundColor = "red";

// Oppgave 1: Lag en grønn firkant.
// // Lag en div i HTML og gi en den ID
// // Lag en variabel som henter div-elementet til JS
// // Gi variabelen styling properties

const greenSquare = document.querySelector("#greenSquare");
console.log(greenSquare);

greenSquare.classList.add("greenContainer");

//
//

const cardContainer = document.querySelector("#cardContainer");
console.log(cardContainer);

const cardHeading = document.createElement("h1");
console.log(cardHeading);

cardHeading.textContent = "Hei på deg!";

cardContainer.appendChild(cardHeading);

// Oppgave 2: Hent et og lag et HTML element
// // Lag et div-element i HTML og gi det en ID
// // Lag en variabel som henter div-elementet til JS
// // Lag en variabel som lager et h1-element i JS