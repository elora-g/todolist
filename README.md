# TODOLIST

## Enoncé

Barrer les taches qui ont été réalisées puis les valider

## Consignes

* Lorsque l'on sélectionne une checkbox, la tache associée se retrouve barrée et en italique
* Lorsqu'on désélectionne une checkbox, la tache associée redevient normale
* Lorsque je sélectionne la checkbox en haut (celle sans tache associée), toutes les checkbox sont sélectionnées
* Lorsque je désélectionne la checkbox en haut, toutes les checkbox sont désélectionnées
* Lorsque je clique sur le bouton "Valider les taches terminées", les taches barrées sont cachées
* Lorsqu'aucune tache n'est barrée, un message d'erreur est affiché
* Afficher dans un paragraphe le nombre de taches terminées (celles qui sont barrées)
* [BONUS] Créer un bouton permettant de créer une nouvelle tache apparaissant au-dessus des autres taches

*NB : Organiser le code en trois parties : les variables, les fonctions et enfin le code principal*

## Chemin à suivre

* Sélection des checkbox
  * Récupérer toutes les checkbox
  * Ajouter aux checkbox un gestionnaire d'événements (le type d'événement associé est "change")
  * Créer la fonction appelée lorsque l'événement est exécuté
    * Ajouter la classe css "selected" sur la tache sélectionnée
    * Attention la classe n'est pas à mettre sur la checkbox mais sur l'élément li !! (ce n'est pas la checkbox qui contient le contenu mais la list)
    * Gérer le cas où on désélectionne la checkbox
* Clic sur le bouton de validation des taches
  * Récupérer le bouton
  * Ajouter au bouton un gestionnaire d'événements
  * Créer la fonction appelée lorsque l'événement est exécuté
    * Ajouter la classe "hide" aux éléments li pour les cacher
    * Ne pas cacher la première checkbox

## Remarques

* Les éléments html possèdent un attribut parentElement qui permettent de récupérer l'élément parent
  * Exemple d'utilisation :
    ```javascript
    var li = document.querySelector('li'); //On récupère le premier élément li
    var ul = li.parentElement; //On récupère son parent qui est ul
    ul.classList.add("maClasse"); //On ajoute la classe "maClasse" à ul
    ```
  * Documentation : 
    * http://www.w3schools.com/jsref/prop_node_parentelement.asp
    * https://developer.mozilla.org/fr/docs/Web/API/Node/parentElement
    * http://devdocs.io/dom/node/parentelement
* L'attribut `checked` d'une checkbox permet de savoir si une checkbox est cochée ou non
  * Exemple d'utilisation :
    ```javascript
    var checkbox = document.querySelector('input[type=checkbox]'); //On récupère la checkbox
    console.log(checkbox.checked); //Renvoie true si la checkbox est sélectionnée sinon renvoie false
    checkbox.checked = false; // Désélectionne une checkbox
    ```
* [RAPPEL] récupérer un ou plusieurs éléments
  * `document.querySelector("selecteur")` : Récupère le premier élément correspondant au sélecteur
  * `document.querySelectorAll("selecteur")` : Récupère un tableau d'éléments correspondants au sélecteur
  * `document.getElementById('id')` Récupère un élément à partir de son id s'il en a un
* [RAPPEL] `element.addEventListener('typeevent', nomDeLaFonction)` : Ajoute un gestionnaire d'événements de type "typeevent" sur element (variable récupérée à l'aide des fonctions ci-dessus)
* [RAPPEL] `this` : Dans une fonction de gestionnaire d'événements (onClickButton, onClickRectangle etc.) permet de récupérer l'élément ciblé par l'événement
* [RAPPEL] L'api classList permet de manipuler facilement les classes (http://www.alsacreations.com/article/lire/1498-lapi-classlist.html)
* [BONUS] Liens pour la création d'un nouvel élément
  * [Création d'un élément dans le DOM](https://developer.mozilla.org/fr/docs/Web/API/Document/createElement)
  * [Insertion dans le DOM](http://www.w3schools.com/jsref/met_node_insertbefore.asp)
  * [Ajouter un enfant à un élément](http://www.w3schools.com/jsref/met_node_appendchild.asp)
  * [Création d'une checkbox](http://stackoverflow.com/questions/866239/creating-the-checkbox-dynamically-using-javascript)