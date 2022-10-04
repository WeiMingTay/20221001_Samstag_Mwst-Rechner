// Variablen bestimmen
const nettoBrut = document.getElementById("nettoToBrutto");
const bruttoNet = document.getElementById("bruttoToNetto");

const mwst19 = document.getElementById("mwst19");
const mwst7 = document.getElementById("mwst7");

let eingabe = document.getElementById("bruttoEingabe");
let ausgabeMwst = document.getElementById("mwst");
let ausgabeGesamt = document.getElementById("ausgabe");

let eingabeWert = document.getElementById("eingabeWert");
let ausgabeWert = document.getElementById("gesamtWert");


// Texte werden angepasst

function bruttoNetto() {
    if (bruttoNet.checked) {
        eingabeWert.innerHTML="Bruttobetrag"
        ausgabeWert.innerHTML="Nettobetrag"
    } else if (nettoBrut.checked) {
        eingabeWert.innerHTML="Nettobetrag"
        ausgabeWert.innerHTML="Bruttobetrag (Endpreis)"
    }
}

// Mwst-Satz wird berechnet

function submit() {
    if (nettoBrut.checked && mwst19.checked) {
        ausgabeGesamt= eingabe.value * 1.19,
        ausgabe.innerHTML=ausgabeGesamt.toFixed(2)+" €",

        ausgabeMwst=eingabe.value*0.19,
        mwst.innerHTML=ausgabeMwst.toFixed(2)+" €"
    } else if (nettoBrut.checked && mwst7.checked) {
        ausgabeGesamt=eingabe.value * 1.07,
        ausgabe.innerHTML=ausgabeGesamt.toFixed(2)+" €"
        
        ausgabeMwst=eingabe.value*0.07,
        mwst.innerHTML=ausgabeMwst.toFixed(2)+" €"
    } else if (bruttoNet.checked && mwst19.checked) {
        ausgabeGesamt=eingabe.value/1.19,
        ausgabe.innerHTML=ausgabeGesamt.toFixed(2)+" €"

        ausgabeMwst=eingabe.value/119*19,
        mwst.innerHTML=ausgabeMwst.toFixed(2)+" €"
    } else if (bruttoNet.checked && mwst7.checked) {
        ausgabeGesamt=eingabe.value/1.07,
        ausgabe.innerHTML=ausgabeGesamt.toFixed(2)+" €",

        ausgabeMwst=eingabe.value/107*7,
        mwst.innerHTML=ausgabeMwst.toFixed(2)+" €"
    }
}