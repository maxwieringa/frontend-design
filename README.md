# Frontend-design

## Uitleg ontwerp

Ik heb use case 1 gekozen voor deze opdracht. De use case gaat als volgt: "In een verzameling films wil ik een aantal leuke films kunnen bewaren om ze later te bekijken". De microinteractie die ik heb uitgewerkt is dat wanneer je op de knop "toevoegen" klikt dat er een cijfer bij de later bekijken knop komt. Ook veranderd de tekst van "toevoegen" naar "toegevoegd"

## Uitleg code

Om ervoor te zorgen dat er een cijfer komt rechtsboven bij de later bekijken knop heb ik een 'div' gemaakt met een cijfer. Dat cijfer heeft een ID genaamd "little_number" zodat ik het kan makkelijk kan oproepen in css en javascript. Het cijfer krijgt een vormgeving in het css bestand. Ook heb ik de opacity op 0 gezet zodat het niet te zien is. Ik heb in het css bestand dan nog een regel toegevoegd waarbij ik de opacity op 1 heb zodat het wel te zien is en die toggle ik via javascript. De toevoeg knop krijgt in javascript een eventlistener die kijkt wanneer er op de knop geklikt wordt. Zodra iemand erop klikt zal deze de functie "toggleWatchlist" uitvoeren. Deze functie zal de opacity op 1 togglen en de tekst veranderen van "toevoegen" naar toegevoegd".
