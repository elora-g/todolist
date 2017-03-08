'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/

var allTaskCheckbox = document.querySelectorAll('.tasks li:not(:first-child) input');
console.log(allTaskCheckbox);

var firstCheckbox = document.querySelector('.tasks li:first-child input');
console.log(firstCheckbox);

var button = document.getElementById('valid-tasks');
console.log(button);

var checkedCheckBoxesSelector = 'checked-box';

/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/

function onClickCkeckbox(){
			console.log('coucou');
			this.parentElement.classList.toggle('selected');
	}

function onClickCheckboxUpdateNb(){
	//ecrire un selecteur qui va recuperer toute les checkbox cochées mais pas masquées
	//appeler document.querySelector pour récupérer toutes les checkbox dans cet état
	//récupérer la longueur de la liste de ces éléments. C'est ce nombre qu'on veux afficher.
}

function onClickFirstCheckbox(){
	console.log('coucou');
	if(firstCheckbox.checked === true){ // Cas 1 : Si la first checkbox est cochée : 
		console.log('cochée');
		// si la checkbox n'est pas cochée ==> trigger un click (pour la cocher)
		for(var i=0 ; i<allTaskCheckbox.length; i++){
			if(allTaskCheckbox[i].checked === false){
				console.log(allTaskCheckbox[i]);
				allTaskCheckbox[i].click();
			}
		}
	}
	else{ //Cas 2 : si la first checkbox est décochée 
	 	console.log('décochée');
	 	// si la checkbox est cochée ==> trigger un click (pour la décocher)
	 	for(var i=0 ; i<allTaskCheckbox.length; i++){
			if(allTaskCheckbox[i].checked === true){
				allTaskCheckbox[i].click();
			}
		}
	}
}

/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/



for(var i=0 ; i<allTaskCheckbox.length; i++){
	console.log(allTaskCheckbox[i]);
	allTaskCheckbox[i].addEventListener('click', onClickCkeckbox);
}

firstCheckbox.addEventListener('click', onClickFirstCheckbox);
//ajouter le second handler sur toutes les checkbox.

button.addEventListener('click', function(){ // Quand je clique sur le bouton : 
	console.log('bouton cliqué');
	// Récupère les checkboxs dont les tâches sont barrées
	var cpt = 0;
	for(var i=0 ; i<allTaskCheckbox.length; i++){
		if(allTaskCheckbox[i].checked === true){
			console.log('checkbox sélectionnée');
			// Masque la checkbox et le texte  (classe li.hide) 
			allTaskCheckbox[i].parentElement.classList.add('hide');
			cpt++;
		}
	}
	console.log(cpt);
	// Si aucune tâche n'est barrée, affiche un message d'erreur
	if(cpt === 0){
			window.alert("Vous devez sélectionner au moins une tâche !");
	}
});
 

/*
quand on clique sur le bouton "valider" toutes les checkboxs sélectionnées sont cachées ==> li.hide (css)
si on clique sur le bouton valider alors qu'aucune tâche n'est barrée ==> message d'erreur


Afficher dans un paragraphe le nombre de taches terminées (celles qui sont barrées)

[BONUS] Créer un bouton permettant de créer une nouvelle tache apparaissant au-dessus des autres taches


Premier code pour cocher/décocher toutes les checkboxs : 

function onClickFirstCheckbox(){
	console.log('coucou');
	if(firstCheckbox.checked === true){ // Cas 1 : Si la first checkbox est cochée : 
		console.log('cochée');
		// ==> parcourir les autres checkbox une à une et si la checkbox est décochée, coche la checkbox et ajoute la class selected, sinon ne fait rien
		for(var i=0 ; i<allTaskCheckbox.length; i++){
			if(allTaskCheckbox[i].checked === false){
				console.log(allTaskCheckbox[i]);
				allTaskCheckbox[i].checked = true;
				allTaskCheckbox[i].parentElement.classList.add('selected');
			};
		};
	}
	else{ //Cas 2 : si la first checkbox est décochée 
	 	console.log('décochée');
	 	// ==> parcourir les autres checkboxs une à une et si la checkbox est cochée, décoche la checkbox enlève la class selected, sinon ne fait rien
	 	for(var i=0 ; i<allTaskCheckbox.length; i++){
			if(allTaskCheckbox[i].checked === true){
				allTaskCheckbox[i].checked = false;
				allTaskCheckbox[i].parentElement.classList.remove('selected');
			};
		};
	};
}



 */