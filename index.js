const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

function reducer(array){
    return array.reduce(function(total, value){
        return value + total
    }, 0);
    // return totalBatteries
}

const totalBatteries = reducer(batteryBatches)
