const weeklyReadings = [20, 22, 20.5, 19, 21, 21.5, 23];

const colderDays = weeklyReadings.filter(dayTemperature => {
  return dayTemperature < 20;
});

console.log("Total colder days in week were: " + colderDays.length); // return 1
