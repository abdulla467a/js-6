function animalCount(miles){
    const first10PerMile = 10;
    const second10PerMile = 50;
    if(miles <=10)

{const count = miles*first10PerMile;
    return count;

}

else if(miles <=20){
    const first10 = 10*first10PerMile;
    const restMiles = miles-10;
    const second10 = restMiles *second10PerMile;
    const totalAnimal = first10 + second10 ;
    return totalAnimal;
}
}
const animals = animalCount(20);
console.log(animals);