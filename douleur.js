var Maladie = undefined;
var Douleur = prompt('Quelle est votre problème?');
if ( Douleur === 'abdomen'){
	Maladie = 'Appendicite, battez vous pour mourir';
} else if (Douleur === 'gorge') {
var gorge = prompt('Avez vous de la fièvre?');
	if (gorge === 'oui') {
		Maladie = 'un Rhume, on se fait de la thune';
	} else {
		Maladie = 'Mal de gorge, Rip les sessions OS chant';
    }
} else if (Douleur === 'aucun') {
var toux = prompt('toussez vous?');
	if (toux === 'oui') {
	var fievre = prompt('Avez vous de la fièvre?');
		if (fievre === 'oui') {
			Maladie = 'Vous avez chopé Rhume';
        } else {
			Maladie = 'quel dommage un Refroidissement';
        }
    } else {
		Maladie = 'Rien!Consultation inutile, BAKA!!!';
    }
}

alert(Maladie);
