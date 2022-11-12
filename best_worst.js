function best_worst (tri) {

    let tableWorst = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    let tableBest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let worst_selection = tri(tableWorst);
    let best_selection = tri(tableBest);

    //tri.name nous donne le nom de la valeur passer en argument
    console.log("compteur du " + tri.name + " pour le pire tableau possible:  " + worst_selection);
    console.log("compteur du " + tri.name + " pour le meilleur tableau possible:  " + best_selection);
    
}