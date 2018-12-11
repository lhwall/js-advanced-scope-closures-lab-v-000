function produceDrivingRange(trip){
  return function innerFunction(start, end){
    tripDistance = Math.abs(parseInt(start) - parseInt(end))

    if(tripDistance <= parseInt(trip)) {return `within range by ${parseInt(trip - tripDistance)}`}
    else {return `${tripDistance - parseInt(trip)} blocks out of range`}
  }
}


function produceTipCalculator(tipAmount){
  return function innerFunction(amount){
   return tipAmount * amount
  }
}

function createDriver(){
  let ItemID = 1
  return class{
    constructor(name){
      this.name = name
      this.id = ItemID++
    }
  }
}
