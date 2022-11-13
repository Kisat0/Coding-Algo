let liste1 = [5, 8, 3, 9, 2, 6];
console.log("avant tri insertion :  " + liste1);

function triInsertion(liste){

for(i=0;i<10;i++){

    Pos=i;

    while(Pos!=0){

        Souv=liste[Pos];
        Test=liste[(Pos-1)];
        if(Souv<Test){
            liste[Pos]=Test;
            liste[(Pos-1)]=Souv;
            Pos=Pos-1;
        }
        else{
            Pos=0;
        }
    }
}
    console.log("après tri insertion :  " + liste);
}

