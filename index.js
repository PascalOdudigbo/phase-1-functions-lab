// Code your solution in this file!
function distanceFromHqInBlocks(num){
    let blocks = 0;
    num < 42 ? blocks = 42 - num : blocks = num - 42;
    return blocks; 
}

function distanceFromHqInFeet(num){
   const blocks = distanceFromHqInBlocks(num);
   let feet = blocks * 264;
   return feet;
}

function distanceTravelledInFeet(location, destination){
   if(location > destination){
       return (location-destination) * 264;
   }
   else 
   return (destination - location) * 264;
}
function calculatesFarePrice(location, destination) {
    let feet = distanceTravelledInFeet(location, destination);
    let fare = 0;
    if (feet <= 400){
        fare = 0;
        return fare;
    }
    else if (feet > 400 && feet < 2000){
        fare = (feet - 400) * 0.02;
        return fare;
    }
    else if (feet > 2000 && feet < 2500){
        fare = 25;
        return fare;
    }
    else if (feet > 2500){
        return 'cannot travel that far';
    }

  }