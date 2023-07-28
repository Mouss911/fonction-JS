// EXERCICE 1 :

function afficherResultat() {
    // Saisi des valeurs
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
  
    // Variable du produit
    var produit = num1 * num2;
  
    // Resultat
    var Texte = num1 + " multiplié par " + num2 + " est égal à : " + produit;
    document.getElementById("text").innerHTML = Texte;
}
var clikbouton = document.getElementById("Resultat");
clikbouton.addEventListener("click", afficherResultat);


// EXERCICE 2 :

// Saisi d'un nombre par l'utilisateur
var n = parseInt(prompt("Entrer un nombre SVP : "));
var modulo = n % 4;
document.write(`Si l'on divise  ${n}  par 4, le reste est de :  ${modulo}`);

 
  
  
  
  