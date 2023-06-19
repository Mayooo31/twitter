// const formatDate = (date: string) => {
//   const inputDate = new Date(date);
//   const day = inputDate.getDate();
//   const month = inputDate.getMonth() + 1;
//   const year = inputDate.getFullYear();

//   const formattedDate = `${day}.${month}.${year}`;
//   return formattedDate;
// };

function formatDate(dateString: string) {
  const currentDate: any = new Date();
  const targetDate: any = new Date(dateString);

  const timeDiff = currentDate - targetDate;
  const minutesDiff = Math.floor(timeDiff / (1000 * 60));
  const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));
  const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  if (minutesDiff < 1) {
    return "now";
  } else if (minutesDiff < 60) {
    return minutesDiff + " m";
  } else if (hoursDiff < 24) {
    return hoursDiff + " h";
  } else if (daysDiff < 7) {
    return daysDiff + " d";
  } else {
    const day = targetDate.getDate();
    const month = targetDate.getMonth() + 1; // Months are zero-based
    const year = targetDate.getFullYear();
    return day + "." + month + "." + year;
  }
}

export default formatDate;
