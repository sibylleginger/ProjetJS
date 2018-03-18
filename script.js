var betTotal;
var verouiller = false;
var jeton = 100;
var gainMax = 0;
var tableauMises = [];
var tabChiffres = [0,32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,23,10,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26];
var jouer = true;

function ajoutBet(param, valeurMise) {
    var champ = document.getElementById('champ');
    var pari = document.getElementById('Pari');
    var gain = document.getElementById('Gain');
    if (champ.value <= jeton && champ.value) {
        if (!verouiller) {
            pari.value = pari.value + '+' + champ.value;
            calculer();
	        tableauMises.push(valeurMise);
            jeton = jeton - champ.value;
            displayJeton();
	        gain.value = pari.value * param;
        }
    } else if(!champ.value){
        pari.value = "Veuillez rentrez une valeur gros con";
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
}); // NE PAS TOUCHER

function play() {
    if(verouiller){
        var rotateroulette = document.getElementById('ballcontainer');
        var buttonplay = document.getElementById('startbutton');
        if (jouer == false) {
            rotateroulette.removeAttribute('style');
            var css = 'transform: rotate(0 deg);';
            rotateroulette.setAttribute('style', css);
            jouer = true;
            buttonplay.innerHTML = 'PLAY';
        } else {
            rotateroulette.removeAttribute('style');        
            var deg = Math.floor(Math.random() * 36);
            var deg2 = deg*9.7 + 360
            var res = tabChiffres[deg];
            document.getElementById('resultat').value = res;
            var css = '-webkit-transform: rotate(' + deg2 + 'deg);';
            rotateroulette.setAttribute(
            'style', css
            );
            jouer = false;
            buttonplay.innerHTML = 'RESET BALL';
        }
	calculGain(deg);
    }
    /*var update = document.getElementById('wheel');
    update.load("Roulette.html#wheel");*/   
}

function rotate(ball) {
    
}

function isZero(number) {
	// booléen vérifiant si number est 0
    if (number == 0) {
        return true;
    } else {
        return false;
    }
}

function isRed(number) {
	// vérifie la couleur de number
    if (!isZero(number)) {
        if ((number == 2) || (number == 4) || (number == 6) || (number == 8) || (number == 10) || (number == 11) || (number == 13) || (number == 15) || (number == 17) || (number == 20) || (number == 22) || (number == 24) || (number == 26) || (number == 28) || (number == 29) || (number == 31) || (number == 33) || (number == 36)) {
            return 42;
            // est noir
        } else {
            return 43;
            // est rouge
        }
    }
}

    function isEven(number) {
		// vérifie si number est impair ou pair
        if (!isZero(number)) {
            if (number % 2 == 0) {
                return 41;
            } else {
                return 44;
            }
        }
    }

    function moitie(number) {
		// vérifie la moitié de number
        if (!isZero(number)) {
            if (number > 0 && number < 19) {
                return 40;
            } else {
                return 45;
            }
        }
    }

    function douzaine(number) {
		// retourne la douzaine de number
        if (!isZero(number)) {
            if (number % 3 == 1) {
                return 37;
            } else if (number % 3 == 2) {
                return 38;
            } else {
                return 39;
            }
        }
    }

    function gain(number) {
		if (isZero(number)){
			for (var i = 0; i <= tableauMises.length; i++) {
				if (isZero(tableauMises[i])) {
					jeton = jeton + 36 * tableauValeur[i];
				}
			}
		}
		else {
			for (var i = 0; i <= tableauMises.length; i++) {
				if (tableauMises[i] == isRed(number) || tableauMises[i] == isEven(number) || tableauMises[i] == moitie(number)) {
					jeton = jeton + 2 * tableauValeur[i];
				}
				else if (tableauMises[i] == douzaine(number)) {
					jeton = jeton + 3 * tableauValeur[i];
				}
				else if (tableauMises[i] == number && tableauMises[i]) {
					jeton = jeton + 36 * tableauValeur[i];
				}
            }
		}
    tableauMises = [];
    tableauValeur = [];
    }
    

