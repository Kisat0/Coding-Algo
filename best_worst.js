function best_worst(tri) {
    
    console.log(" -------------- début jeux d'essaie best & worst -------------- ");
    let tableWorst = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    let tableBest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let worst_selection = tri(tableWorst,true);
    let best_selection = tri(tableBest,true);


    //tri.name nous donne le nom de la valeur passer en argument
    console.log("compteur du " + tri.name + " pour le pire tableau possible:  " + worst_selection);
    console.log("compteur du " + tri.name + " pour le meilleur tableau possible:  " + best_selection);
    
    //BONUS AFFICHAGE index.html: Appel une des fonctions display pour gerer la génération du code html approprié 
    displayBestWorst(tri.name,best_selection,worst_selection);
}