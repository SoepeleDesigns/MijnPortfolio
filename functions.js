/*
    Opdracht:       Mijn Portfolio Website maken
    Auteur:         Boris Vasic
    Aanmaakdatum:   17-1-2020 10:55
    Bestandsnaam:   functions.js 
*/

/* Verzorgt ervoor dat de link om terug naar de Opleidingen informatie niet te zien en klikbaar is */
document.getElementById("TerugNaarOpleidingInformatieLink").style.display = "none";

/* Array cijfers: Het gemiddelde van mijn vakken, Het gaat op chronologische volgorde, Modelleren heb ik dus een 8.1 Gemiddeld */
var cijfers = ["Gemiddeld 8,1", "Gemiddeld 7,1", "Gemiddeld 7", "Gemiddeld 7,9", "Gemiddeld 6,7", "Gemiddeld 9", "Gemiddeld 8,4", "Gemiddeld 8,5", "Gemiddeld 8", "Gemiddeld 5,8", "Gemiddeld 7"];

/* Array vakken: Het aantal Vakken waarvoor ik tot nu toe een cijfer voor heb van Periode 1 en 2, Sommige cijfers voor de vakken moeten nog komen of moeten gewijzigd worden */
var vakken = ["Modelleren", "Digitale Vaardigheden", "Computertekenen", "HardwareAO", "HTMLCSS", "Javascript", "Usability", "Nederlands", "Engels", "Rekenen", "Loopbaan en Burgerschap"];

/* Functie mijnGemiddelde zorgt ervoor dat de informatie van de opleiding verborgen is, en het laten zien van mijn Cijfers voor de vakken, die gegenereert wordt als een h1 element die wordt opgemaakt in CSS voor de locaties. */
function mijnGemiddelde(cijfer)
{
    document.getElementById("OmschrijvingOpleidingen").style.display = "none";
    document.getElementById("OpleidingTitel").style.display = "none";
    document.getElementById("KW1C").style.display = "none";
    document.getElementById("Helicon").style.display = "none";
    document.getElementById("ErvaringKW1C").style.display = "none";
    document.getElementById("ErvaringHelicon").style.display = "none";
    
/* Link wordt gelaten zien op de Opleiding Pagina, als u er op klikt wordt alles weer gereset met de code, en kunt u nogmaals de cijfers zien als u dat wilt door op de button "Mijn cijfers" te klikken */
    document.getElementById("TerugNaarOpleidingInformatieLink").style.display = "block";
    if (cijfer === undefined)
        {
            cijfer = 0;
            var tekst = "";
            var vak = "";
            /* Als de cijfer kleiner is dan de lengte van de Array cijfers, zal de cijfer optellen */
            while (cijfer < cijfers.length)
                {
                    /* de  h1 element tekst wordt gegenereert van wat de Array cijfers en vakken inhoudt, die steeds opgeteld wordt totdat het groter is dan cijfers.length */
                    tekst = cijfers[cijfer]
                    document.getElementById("cijfer"+cijfer).innerHTML = tekst;
                     vak = vakken[cijfer]
                    document.getElementById("vak"+cijfer).innerHTML = vak;
                    cijfer++;
                }
        }
}
