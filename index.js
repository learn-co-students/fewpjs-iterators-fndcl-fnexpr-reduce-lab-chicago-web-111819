const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here


function sumByReducing(arr){
    return arr.reduce(function (total, e){
        return total += e
    })
}

const totalBatteries = sumByReducing(batteryBatches)

