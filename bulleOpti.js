/* function triBulleOpti(tableau) {

    var tri = false;

    while (tri == false) {

        tri = true

        var tbl = tableau.length


        for (let i = 0; i < tbl - 1; i++) {

            if (tableau[i] > tableau[i + 1]) {

                var temp = tableau[i];
                tableau[i] = tableau[i + 1];
                tableau[i + 1] = temp;
                tri = false;
                tbl--;
            }
        }


    }
    console.log(tableau);
}

var gg = [30, 2, 65, 78, 9, 1]

triBulleOpti(gg) */