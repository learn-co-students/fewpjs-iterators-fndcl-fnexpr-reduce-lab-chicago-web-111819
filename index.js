const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
const initialTotal = 0; // starting value (for reduce())

// totalBatteries = the sum of all of the battery amounts in the {batteryBatches} Array.
let totalBatteries = batteryBatches.reduce((currentTotal, batteryQty) => { return batteryQty + currentTotal }, initialTotal);

