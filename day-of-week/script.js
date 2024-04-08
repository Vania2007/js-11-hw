let weekday = [
  "Неділя",
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "П'ятниця",
  "Субота",
];
let day = new Date();
let dayOfWeek = weekday[day.getDay()];
let dayNumber = day.getDate();
if (dayNumber < 10) {
  dayNumber = "0" + dayNumber;
}
let month = day.getMonth();
if (month < 10) {
  month = "0" + month;
}
let year = day.getFullYear();
document.getElementById(
  "output"
).innerHTML = `Сьогодні:<br/>${dayOfWeek} ${dayNumber}.${month}.${year}`;
