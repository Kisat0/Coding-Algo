var tableau1 = [5, 8, 3, 9, 14];
console.log ("Avant la fonction selection :  " + tableau1);



function tri_selection(tableau){

    let minimum_index = 0;
    
    //boucle qui viens nous faire répéter le processur de recherche et d'affectation autant de fois qu'il y a d'elements
    for (var start = 0; start < tableau.length; start++) {
      
        // let minimum = 100;   //!!! il faut renitialiser le minimum a chaque nouvelle recherche
        let minimum = 100;  
        console.log("avant :  " + tableau);

        console.log("debut de recherche ------------------")

        //boucle qui viens parcourir le tableau pour trouver la plus petite valeur
        for (let index = start; index < tableau.length; index++) {
            const element = tableau[index]; 
            if (element < minimum){
                minimum = element;
                minimum_index = index;
                console.log("minimum trouvé ");
                console.log("valeur de minimum :  " + element);
                console.log("index du minimum :  " + minimum_index);
            }
        }
        console.log("fin des recherches ------------------")


        // il faut swappé sinon on détruit des valeurs
        console.log("affectation");
        console.log(tableau[start]);
        let temp = tableau[start];  //on met la valeur qui n'est pas à la bonne place dans une variable temporaire pour ne pas la détruire/perdre

        tableau[start] = minimum; // le minimum prend sa nouvelle place (index start)
        tableau[minimum_index] = temp; 
        console.log(tableau[start]);

        console.log("après :  " + tableau);
    }

    console.log ("APRES LA FONCTION : ");
    console.log(tableau); 
    return tableau; 
}    



