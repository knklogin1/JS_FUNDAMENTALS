let familySize=5;
let plannedDistanceToDrive = 250;

function recommendedCar(familySize,plannedDistanceToDrive){
    if(familySize<=4 && plannedDistanceToDrive<200){
        console.log('Tesla')
    }
    else if(familySize<4 && plannedDistanceToDrive>=200){
        console.log('Toyota Camry')
    }
    else {
        console.log('Minivan')
    }
}
recommendedCar(familySize,plannedDistanceToDrive)