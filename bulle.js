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
   /*  console.log(tableau)
    console.log("le counter pour le tri à bulle est égale à " +count); */
    return count;
}

var tbl1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
var tbl2 = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]