// Exercise 8: Enums
// Define an enum for the days of the week.
// Write a function that takes a day (using the enum) and returns whether it is a weekday or weekend.
// Add an additional enum value for holidays.

enum DAY {
  MONDAY = "Monday",
  TUESDAY = "Tuesday",
  WEDNESDAY = "Wednesday",
  THRUSDAY = "Thursday",
  FRIDAY = "Friday",
  SATURDAY = "Saturday",
  SUNDAY = "Sunday",
  HOLIDAY = "Holiday",
}

const checkTypeOfDay = (day: DAY) => {
  if (day === DAY.SUNDAY || day === DAY.SATURDAY) {
    return "weekend";
  } else if (day === DAY.HOLIDAY) {
    return "holiday";
  } else {
    return "weekday";
  }
};

const message1 = checkTypeOfDay(DAY.MONDAY);
console.log(message1); // weekday

const message2 = checkTypeOfDay(DAY.SATURDAY);
console.log(message2); // weekend

const message3 = checkTypeOfDay(DAY.HOLIDAY);
console.log(message3); // holiday
