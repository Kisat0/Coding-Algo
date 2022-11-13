
// console.log ("Avant la fonction selection :  " + tableau1);
function tri_selection(tableau,isStat){

    var compteur_selection = 0;
    let minimum_index = 0; 
    //affectation ?
    
    //boucle qui viens nous faire répéter le processur de recherche et d'affectation autant de fois qu'il y a d'elements
    for (var start = 0; start < tableau.length; start++) {
      
        // let minimum = 100;   //!!! il faut renitialiser le minimum a chaque nouvelle recherche
        let minimum = 100;  
        //affectation ?
        // console.log("avant :  " + tableau);

        // console.log("debut de recherche ------------------")

        //boucle qui viens parcourir le tableau pour trouver la plus petite valeur
        for (let index = start; index < tableau.length; index++) {
            const element = tableau[index]; 
            compteur_selection++ ; //affectation 
            if (element < minimum){ 
                compteur_selection++ ; //comparaison 
                minimum = element;
                compteur_selection++ ; //affectation 
                minimum_index = index;
                compteur_selection++ ; //affectation 
                // console.log("minimum trouvé ");
                // console.log("valeur de minimum :  " + element);
                // console.log("index du minimum :  " + minimum_index);
            }
        }
        // console.log("fin des recherches ------------------")


        // il faut swappé sinon on détruit des valeurs
        // console.log("affectation");
        // console.log(tableau[start]);
        let temp = tableau[start];  //on met la valeur qui n'est pas à la bonne place dans une variable temporaire pour ne pas la détruire/perdre
        compteur_selection++ ; //affectation 

        tableau[start] = minimum; // le minimum prend sa nouvelle place (index start)
        compteur_selection++ ; //affectation 
        tableau[minimum_index] = temp; 
        compteur_selection++ ; //affectation 

        // console.log(tableau[start]);
        // console.log("après :  " + tableau);
    }
    if (!isStat) {
        displaySelection(tableau,compteur_selection);
    }
    // console.log ("apres la fonction selection : ");
    console.log(tableau); 
    console.log("valeur final compteurSelection :  " + compteur_selection);
    return compteur_selection; 
}    








