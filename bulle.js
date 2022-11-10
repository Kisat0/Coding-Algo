function triBulle(tableau) {

    var count = 0;
    var tbl = tableau.length

    for (let i = 0; i < tbl - 1; i++) {
        for (let j = 0; j < tbl - 1; j++) {
                count++ 
            if (tableau[j + 1] < tableau[j]) {
                count +=3
                var temp = tableau[j]
                tableau[j] = tableau[j + 1]
                tableau[j + 1] = temp
            }
        }

    }
    console.log(tableau)
    console.log(count);
    return count;
}

var gg = [30, 2, 65]

triBulle(gg)