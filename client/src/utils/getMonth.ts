const getMonth = (date: string) => {
  const monthNames = [
    "leden",
    "únor",
    "březen",
    "duben",
    "květen",
    "červen",
    "červenec",
    "srpen",
    "září",
    "říjen",
    "listopad",
    "prosinec",
  ];

  const timeString = date;
  const dateObj = new Date(timeString);
  const monthIndex = dateObj.getMonth();

  return monthNames[monthIndex];
};

export default getMonth;
