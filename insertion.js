function triInsertion(liste){
var countInsertion = 0;

for(i=0;i<10;i++){

    Pos=i;

    while(Pos!=0){

        Souv=liste[Pos];
        countInsertion ++ //affectation
        Test=liste[(Pos-1)];
        countInsertion ++ //affectation
        if(Souv<Test){
            countInsertion ++ //comparaison
            liste[Pos]=Test;
            countInsertion ++ //affectation
            liste[(Pos-1)]=Souv;
            countInsertion ++ //affectation
            Pos=Pos-1;
        }
        else{
            Pos=0;
        }
    }
}
    console.log(liste);
    console.log("valeur final compteurInsertion :  " + countInsertion);
    return countInsertion;
}

