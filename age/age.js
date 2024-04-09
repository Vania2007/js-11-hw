function birthDateToAge(b) {
  let n = new Date();
  b = new Date(b);
  let age = n.getFullYear() - b.getFullYear();
  let n_2000 = n.setFullYear(2000);
  let b_2000 = b.setFullYear(2000);
  if (n_2000 < b_2000) age -= 1;
  let strYears = "років";
  if (age % 10 === 1 && age !== 11) {
    strYears = "рік";
  } else if (age % 10 < 4 && (age < 11 || age > 14) && age !== 0) {
    strYears = "роки";
  }

  let countOfMonth;
  if (n.getMonth() < b.getMonth()) {
    countOfMonth = n.getMonth() + 12 - b.getMonth();
  } else {
    countOfMonth = n.getMonth() - b.getMonth();
  }
  let strMonth = "місяців";
  if (countOfMonth % 10 === 1 && countOfMonth !== 11) {
    strMonth = "місяць";
  } else if (countOfMonth % 10 < 5 && countOfMonth < 10 && countOfMonth !== 0) {
    strMonth = "місяці";
  }
  let str = `Вам ${age} ${strYears}<br/>І ${countOfMonth} ${strMonth}`;
  return str;
}

document.write(birthDateToAge("2015-06-04"));
