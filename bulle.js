function triBulle(tableau) {

    var tbl = tableau.length

    for (let i = 0; i < tbl - 1; i++) {
        for (let j = 0; j < tbl - 1; j++) {
            if (tableau[j + 1] < tableau[j]) {
                var temp = tableau[j]
                tableau[j] = tableau[j + 1]
                tableau[j + 1] = temp
            }
        }

    }
    console.log(tableau)
}

var gg = [30, 2, 65, 78, 9, 1]

triBulle(gg)



