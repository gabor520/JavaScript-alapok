/**Ha már betöltődött a teljes oldal, akkor fussanak csak le a preogramok */
window.addEventListener("load",init)



function init(){
console.log("Itt vagyok!")
//udvozlet()
document.querySelector("button").addEventListener("click,udvozlet")
valtozok();
}


function valtozok(){
    var vnev1 = 2;
    let vnev2 = 3.45;
    const VNEV3 = 4; /**konstans, az értéke később nem változtatható */
    vnev1 = 2;
    console.log("vnev1",vnev1,typeof vnev1);
    console.log("vnev2",vnev1,typeof vnev2);
    console.log("vnev1",vnev1,typeof VNEV3);
    console.log("vmi",vmi,typeof vmi);

}
var szam1=6;
if (szam1%2==0 && szam1 % 3 == 0){
    console.log("kettővel osztható");

}else if (szam1 % 2 == 0){
    console.log("hkettővel osztható");
}else if (szam1 % 3 == 0){
    console.log("hárommal osztható");
}else {
    console.log("se kettővel, se hárommal nem osztható");

}
console.log("2"===2) //false - nem azonos a típusuk!
console.log("2==2") //true - típus egyezést nem nézi
nap=Math.floor(Math.random()*7)+1
switch(nap){
    case 1:
        console.log("Hétfő")
        break;
    case 2:
        console.log("Kedd")
        break;
    case 3:
        console.log("Szerda")
        break;
    case 4:
        console.log("Csütörtök")
        break;
    case 5:
        console.log("Péntek")
        break;
    case 6:
        console.log("Szombat")
        break;
    case 7:
        console.log("Vasárnap")
        break;
    default:
        console.log("Nincs ilyen nap")

}
function ciklusok(){
    /** 
     for - pontosan tudom hányszor fut le -számlálós
    while - elöltesztelős
     do while -hatultesztelős - biztos hogy egyszer lefut
     
   * / generaljunk 10db veletlen szamot 60 és 100kozott */
    let index = 0;
    while (index<10){
        let vel=Math.floorMath.random()*(100-60+1)+60;
        console.log(vel);
        index++;

}
for (let index = 0; index < 10; index++) {
    let vel=Math.floorMath.random()*(10-0+1)+60;
        console.log(vel);
        index++;
    
}
let vel=Math.floorMath.random()*(10 + 20 + 1) -20;
while(vel<=0){
console.log(vel);
let vel=Math.floorMath.random()*(10 + 20 + 1) -20;
}
}
do{
    vel=Math.floorMath.random()*(10 + 20 + 1) -20;
    console.log(vel);
}while (vel<=0)