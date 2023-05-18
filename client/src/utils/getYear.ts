const getYear = (date: string) => {
  const timeString = date;
  const dateObj = new Date(timeString);
  return dateObj.getFullYear();
};

export default getYear;
