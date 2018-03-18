var betTotal;
var verouiller = false;
var jeton = 100;
var gainMax = 0;
var tableauMises = [];
var tableauValeur = [];
var tabChiffres = [0,32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,23,10,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26];
var jouer = true;

function ajoutBet(obj, param, valeurMise) {
    var champ = document.getElementById('champ');
    var pari = document.getElementById('Pari');
    var gain = document.getElementById('Gain');
    if (champ.value <= jeton && champ.value) {
        if (!verouiller) {
            if (obj.selected == true) {
                if (tableauMises.length == 0) {
                    obj.removeAttribute('style');
                } else {
                    obj.removeAttribute('style');
                    obj.selected = false;

                    pari.value = eval(pari.value + '-' + champ.value);
                    var id = tableauMises.indexOf(valeurMise);
                    tableauMises.splice(id, eval(id+"+1"));
                    tableauValeur.splice(id, eval(id+"+1"));
                    jeton = eval(jeton + '+' + champ.value);
                    displayJeton();
                    gain.value = eval(gain.value + '-' + champ.value + '*' + param);
                }
            }else {
                pari.value = eval(pari.value + '+' + champ.value);
                //calculer();
                tableauMises.push(valeurMise);
                tableauValeur.push(champ.value);
                jeton = jeton - champ.value;
                displayJeton();
                gain.value = eval(gain.value + '+' + champ.value + '*' + param);
                //obj.class = obj.class + " selected";
                obj.style = "background-color: blue;";
                obj.selected = true;
            }
            //var css = 'background-color: blue;';
            //this.setAttribute('style', css);
        }
    } else if(!champ.value){
        alert("Veuillez rentrez une mise");
    } else {
        alert("Vous n'avez pas assez de jetons");
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
    var rotateroulette = document.getElementById('ballcontainer');
    var buttonplay = document.getElementById('startbutton');
    var valuegain = document.getElementById('Gain');
    if (valuegain.value == "") {
        alert('Entrez votre mise');
    }else {
        if (!jouer) {
            document.getElementById('champ').value = "";
            document.getElementById('Pari').value = "";
            document.getElementById('Gain').value = "";
            rotateroulette.removeAttribute('style');
            var css = 'transform: rotate(0 deg);';
            rotateroulette.setAttribute('style', css);
            jouer = true;
            buttonplay.innerHTML = 'PLAY';

        } else {
            rotateroulette.removeAttribute('style');        
            var deg = Math.floor(Math.random() * 36);
            var deg2 = deg*9.7 + 360;
            var res = tabChiffres[deg];
            document.getElementById('resultat').value = res;
            
            var css = '-webkit-transform: rotate(' + deg2 + 'deg);';
            
            rotateroulette.setAttribute(
                'style', css
            );
            jouer = false;
            buttonplay.innerHTML = 'RESET BALL';
        }
        calculGain(res);
    }
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
            return 43;
            // est noir
        } else {
            return 42;
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

    function calculGain(number) {
        var gagner = false;
		if (isZero(number)){
			for (var i = 0; i <= tableauMises.length; i++) {
				if (isZero(tableauMises[i])) {
					jeton = jeton + 36 * tableauValeur[i];
				}
			}
		}
		else {
			for (var i = 0; i <= tableauMises.length; i++) {
				if (tableauMises[i] == isRed(number)) {
					jeton = jeton + 2 * tableauValeur[i];
				}
				else if (tableauMises[i] == douzaine(number)) {
					jeton = jeton + 3 * tableauValeur[i];
				}
				else if (tableauMises[i] == number && tableauMises[i]) {
					jeton = jeton + 36 * tableauValeur[i];
				}
                else if (tableauMises[i] == isEven(number)){
                    jeton = jeton + 2 * tableauValeur[i];
                }
                else if (tableauMises[i] == moitie(number)){
                    jeton = jeton + 2 * tableauValeur[i];
                }
            }
		}
        displayJeton();
        tableauMises = [];
        tableauValeur = [];

    }
    

