function updateTime() {
    const now = new Date();
    const pstTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));
    let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let dayformat = ["0th", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th", "21st", "22nd", "23rd", "24th", "25th", "26th", "27th", "28th", "29th", "30th", "31st"];
    let hours = pstTime.getHours();
    let minutes = pstTime.getMinutes();
    let day = pstTime.getDay();
    let dayName = dayNames[day];
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById("day").textContent = dayNames[day] + ", " + months[pstTime.getMonth()] + " " + dayformat[pstTime.getDate()] + ", " + pstTime.getFullYear();
    document.getElementById("clock").textContent = `${hours}:${minutes} ${ampm}`;
  }
  setInterval(updateTime, 1000);
  updateTime();