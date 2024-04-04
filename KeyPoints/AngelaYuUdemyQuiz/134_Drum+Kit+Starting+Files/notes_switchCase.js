function getDayName(daynumber) {
  let dayName = "";

  switch (daynumber) {
    case 0:
      dayName = "MOnday";
      break;

    case 2:
      dayName = "Tuesday";
      break;

    default:
      console.log(daynumber);
      break;
  }
  return dayName;
}

console.log(getDayName(7));
