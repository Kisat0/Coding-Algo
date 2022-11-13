const div = document.getElementById('content');
function displayStats(size,countM1,countM2,countM3,countM4) {

    div.innerHTML = "";
    
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

function displayBulleOpti(tableauA,count,tableauB){
    div.innerHTML = "";

    var p1 = document.createElement('p');
    var p2 = document.createElement('p');

}