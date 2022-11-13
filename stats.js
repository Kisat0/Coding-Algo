function stat(min, max, step, nbr) {

    var size = min;
    var countM1 = 0;
    var countM2 = 0;
    var countM3 = 0;
    var countM4 = 0;

    while (size <= max) {

        for (let i = 0; i < nbr; i++) {
            var tab1 = [];
            var tab2 = [];
            var tab3 = [];
            var tab4 = [];


            for (let index = 0; index < size; index++) {
                var rand = Math.floor(Math.random() * 100);
                tab1[index] = rand;
                tab2[index] = rand;
                tab3[index] = rand;
                tab4[index] = rand;
            }

            countM1 += triBulleOpti(tab1);
            countM2 += triBulle(tab2);
            countM3 += tri_selection(tab3);
            countM4 += triInsertion(tab4);
        }
        countM1 = countM1 / nbr;
        countM2 = countM2 / nbr;
        countM3 = countM3 / nbr;
        countM4 = countM4 / nbr;
        /*   displayStats(size,countM1,countM2,countM3,countM4); */
        console.log(`Taille du Tableau: ${size}, Moyenne Tri à Bulle Opti: ${countM1}`);
        console.log(`Taille du Tableau: ${size}, Moyenne Tri à Bulle: ${countM2}`);
        console.log(`Taille du Tableau: ${size}, Moyenne Tri par Selection: ${countM3}`);
        console.log(`Taille du Tableau: ${size}, Moyenne Tri par Insertion: ${countM4}`);

        size += step;
    }
    console.log("Function stats finished");
}


