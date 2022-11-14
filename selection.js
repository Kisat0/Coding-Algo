//BONUS AFFICHAGE : la variable isStat est un bouléan qui nous sert pour savoir quoi afficher en html 
//                  Elle n'interfère pas dans le tri de la fonction
function tri_selection(tableau,isStat){

    var compteur_selection = 0;
    let minimum_index = 0; 
  
    
    //boucle qui viens nous faire répéter le processur de RECHERCHE et d'AFFECTATION autant de fois qu'il y a d'elements
    for (var start = 0; start < tableau.length; start++) {
      
        //par défault c'est la première valeur a traiter qui est considéré comme minimum
        minimum_index = start;  
        compteur_selection++;
        //j'ai un doute sur cette affectation , elle ajoute autant de point au compteur qu'il y a d'element dans le tableau
    

        //RECHERCHE// boucle qui viens parcourir le tableau pour trouver la plus petite valeur
        for (let index = start; index < tableau.length; index++) {
            compteur_selection++ ; //comparaison 
            if (tableau[index] < tableau[minimum_index]){ 
                minimum_index = index;
                compteur_selection++ ; //affectation 
            }
        }

        //AFFECTATION// il faut swappé sinon on détruit des valeurs
        let temp = tableau[start];  //on met la valeur qui n'est pas à la bonne place dans une variable temporaire pour ne pas la détruire/perdre
        compteur_selection++ ; //affectation 

        tableau[start] = tableau[minimum_index]; // le minimum prend sa nouvelle place (index start)
        compteur_selection++ ; //affectation 

        tableau[minimum_index] = temp; //la valeur qui n'était pas a la bonne place prend l'ancienne place du minimum
        compteur_selection++ ; //affectation 
    }

    //BONUS AFFICHAGE index.html: Appel une des fonction display pour gerer la génération du code html approprié 
    if (!isStat) {
        displaySelection(tableau,compteur_selection);
    }
    console.log(tableau); 
    console.log("valeur final compteurSelection :  " + compteur_selection);
    return compteur_selection; 
}    







