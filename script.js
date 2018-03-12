var betTotal;
var verouiller = false;
var jeton = 100;
var gainMax = 0;

function ajoutBet() {
	var champ = document.getElementById('champ');
	var pari = document.getElementById('Pari');
	if(champ.value <= jeton){
		if(!verouiller){
			pari.value = pari.value + '+' + champ.value;
			calculer();
			jeton = jeton - champ.value;
			displayJeton();
		}
	}else{
		pari.value = "Erreur sale pauvre";
	}
}

function bloquerBet(){
	verouiller = true;
}

function debloquerBet(){
	verouiller = false;
}

function calculer() {
	var ec = document.getElementById('Pari');
	ec.value = eval(ec.value);
	answer = ec.value;
}

function displayJeton(){
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