function triBulleOpti(tableau) {

    var tri = false;
    var count = 0;

    while (tri == false) {

        tri = true

        var tbl = tableau.length


        for (let i = 0; i < tbl - 1; i++) {
                count++
            if (tableau[i] > tableau[i + 1]) {
                count += 3;
                var temp = tableau[i];
                tableau[i] = tableau[i + 1];
                tableau[i + 1] = temp;
                tri = false;
                tbl--;
            }
        }


    }
    console.log(tableau);
    console.log(count);
    return count;
}

var gg = [30, 2, 65]

triBulleOpti(gg)