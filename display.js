function displayStats(size,countM1,countM2,countM3,countM4) {
    const div = document.getElementById('content');
    
    var p1 = document.createElement('p');
    var p2 = document.createElement('p');
    var p3 = document.createElement('p');
    var p4 = document.createElement('p');
    p1.innerHTML = `Taille du tableau: ${size} Valeur de la Moyenne du Tri à Bulle Opti: ${countM1}`;
    p2.innerHTML = `Taille du tableau: ${size} Valeur de la Moyenne du Tri à Bulle: ${countM2}`;
    p3.innerHTML = `Taille du tableau: ${size} Valeur de la Moyenne du Tri par Selection: ${countM3}`;
    p4.innerHTML = `Taille du tableau: ${size} Valeur de la Moyenne du Tri par Insertion: ${countM4}`;


    div.appendChild(p1)
    div.appendChild(p2)
    div.appendChild(p3)
    div.appendChild(p4)
}

function displayBubbleOpti(tableauA,count){
    const div = document.getElementById('content');

    div.innerHTML = "";

    var p1 = document.createElement('p');

    p1.innerHTML = `Array after the Sorting: ${tableauA} and count value ${count}`;

    div.appendChild(p1); 

}
function displayBubble(tableauA,count){
    const div = document.getElementById('content');

    div.innerHTML = "";

    var p1 = document.createElement('p');

    p1.innerHTML = `Array after the Sorting: ${tableauA} and count value ${count}`;

    div.appendChild(p1);

}
function displayInsert(tableauA,count){
    const div = document.getElementById('content');

    div.innerHTML = "";

    var p1 = document.createElement('p');

    p1.innerHTML = `Array after the Sorting: ${tableauA} and count value ${count}`;

    div.appendChild(p1);

}
function displaySelection(tableauA,count){
    const div = document.getElementById('content');

    div.innerHTML = "";

    var p1 = document.createElement('p');

    p1.innerHTML = `Array after the Sorting: ${tableauA} and count value ${count}`;

    div.appendChild(p1);

}

function displayBestWorst(triName,resultB,resultW) {
    const div = document.getElementById('content');
    var p1 = document.createElement('p');
    var p2 = document.createElement('p');

    p1.innerHTML = `Pour le tri ${triName} le résultat avec le pire tableau possible est: ${resultW}`;
    p2.innerHTML = `Pour le tri ${triName} le résultat avec le meilleur tableau possible est: ${resultB}`;

    div.appendChild(p1);
    div.appendChild(p2);
}
