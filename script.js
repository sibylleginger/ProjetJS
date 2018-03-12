var betTotal;
var verouiller = false;
var jeton = 100;
var gainMax = 0;

function ajoutBet() {
    var champ = document.getElementById('champ');
    var pari = document.getElementById('Pari');
    if (champ.value <= jeton) {
        if (!verouiller) {
            pari.value = pari.value + '+' + champ.value;
            calculer();
            jeton = jeton - champ.value;
            displayJeton();
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

    function isZero(number) {
        if (number = 0) {
            return 1;
        } else {
            return 0;
        }
    }

    function isRed(number) {
        if (!isZero(number)) {
            if (number = 2 || number = 4 || number = 6 || number = 8 || number = 10 || number = 11 || number = 13 || number = 15 || number = 17 || number = 20 || number = 22 || number = 24 || number = 26 || || number = 28 || number = 29 || || number = 31 || number = 33 || number = 36) {
                return 0;
                // est noir
            } else {
                return 1;
                // est rouge
            }
        }
    }

    function isEven(number) {
        if (!isZero(number)) {
            if (number % 2 == 0) {
                return 0;
            } else {
                return 1;
            }
        }
    }

    function moitie2(number) {
        if (!isZero(number)) {
            if (number > 0 && number < 19) {
                return 0;
            } else {
                return 1;
            }
        }
    }

    function douzaine(number) {
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

    function gain(number) {
		//TODO
    }
