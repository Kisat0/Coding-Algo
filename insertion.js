//BONUS AFFICHAGE : la variable isStat est un bouléan qui nous sert pour savoir quoi afficher en html 
//                  Elle n'interfère pas dans le tri de la fonction
function triInsertion(liste, isStat) {
    var countInsertion = 0;

    for (i = 0; i < 10; i++) {

        Pos = i;

        while (Pos != 0) {

            Souv = liste[Pos];
            Test = liste[(Pos - 1)];
            countInsertion++ //comparaison 
            if (Souv < Test) {
                countInsertion += 3 // echange de valeur (3 affectation)
                liste[Pos] = Test;

                liste[(Pos - 1)] = Souv;

                Pos = Pos - 1;
            }
            else {
                Pos = 0;
            }
        }
    }
    if (!isStat) {
        displayInsert(liste, countInsertion);
    }
    console.log(liste);
    console.log("valeur final compteurInsertion :  " + countInsertion);
    return countInsertion;
}

