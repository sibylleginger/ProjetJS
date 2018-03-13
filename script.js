var betTotal;
var verouiller = false;
var jeton = 100;
var gainMax = 0;
var tableauMises = [];

function ajoutBet(param, valeurMise) {
    var champ = document.getElementById('champ');
    var pari = document.getElementById('Pari');
    var gain = document.getElementById('Gain');
    if (champ.value <= jeton) {
        if (!verouiller) {
            pari.value = pari.value + '+' + champ.value;
            calculer();
	        tableauMises.push(valeurMise);
            jeton = jeton - champ.value;
            displayJeton();
	        gain.value = pari.value * param;
        }
    } else {
        pari.value = "Erreur sale pauvre";
    }
}

function bloquerBet() {
    verouiller = true;
}

function debloquerBet() {
    verouiller = false;
}

function calculer() {
    var ec = document.getElementById('Pari');
    ec.value = eval(ec.value);
    answer = ec.value;
}

function displayJeton() {
    var ec = document.getElementById('nbJeton');
    //debugger;
    ec.textContent = jeton;
}

document.addEventListener("DOMContentLoaded", function(event) {
    displayJeton();
});

function play() {
    var playball = document.getElementById('ballcontainer');
    for (var i = 0; i <= 36; i++) {
        playball.style.transform = rotate(9);
    }
}

function isZero(number) {
	// booléen vérifiant si number est 0
    if (number = 0) {
        return 1;
    } else {
        return 0;
    }
}

function isRed(number) {
	// booléen vérifiant si la couleur de number est rouge
    if (!isZero(number)) {
        if ((number == 2) || (number == 4) || (number == 6) || (number == 8) || (number == 10) || (number == 11) || (number == 13) || (number == 15) || (number == 17) || (number == 20) || (number == 22) || (number == 24) || (number == 26) || (number == 28) || (number == 29) || (number == 31) || (number == 33) || (number == 36)) {
            return 0;
            // est noir
        } else {
            return 1;
            // est rouge
        }
    }
}

    function isEven(number) {
		// booléen vérifiant si number est impair
        if (!isZero(number)) {
            if (number % 2 == 0) {
                return 0;
            } else {
                return 1;
            }
        }
    }

    function moitie2(number) {
		// booléen vérifiant si number est dans la seconde moitié
        if (!isZero(number)) {
            if (number > 0 && number < 19) {
                return 0;
            } else {
                return 1;
            }
        }
    }

    function douzaine(number) {
		// returne la douzaine-1 de number
        if (!isZero(number)) {
            if (number % 3 == 1) {
                return 0;
            } else if (number % 3 == 2) {
                return 1;
            } else {
                return 2;
            }
        }
    }
    
    function result() {
		number = Math.floor(Math.random() * 36);
		// Censé tirer une valeur entre 0 et 36 (pas testé)
		gain(number);
	}

    function gain(number) {
		if (isZero(number)) {
			// TODO  parcours du tableau de mise en ignorant les number!=0
		}
		else {
			/* TODO parcours du tableau de mise et si tab[i]=number retourner la valeur misée * 36
			 *		si tab[i] affiche un bouton spécial (ex: pair), testé fonction(number)==fonction(tab[i])
			 * 		si c'est true, retourner la valeur misée * x
			*/
		}
    }
