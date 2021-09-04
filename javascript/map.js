// We can do this correction using the map() function like this:

const weeklyReadings = [20, 22, 20.5, 19, 21, 21.5, 23];

const correctedWeeklyReadings = weeklyReadings.map(reading => reading + 1.5);

console.log(correctedWeeklyReadings); // return [ 21.5, 23.5, 22, 20.5, 22.5, 23, 24.5 ]
