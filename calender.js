const daysInMonth = (month, year) => {
  return new Date(year, month + 1, 0).getDate();
};

const generateCalendar = (month, year) => {
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = daysInMonth(month, year);

  let calender = "";
  calender += `       ${month + 1}月 ${year}\n`;
  calender += " 日 月 火 水 木 金 土\n";

  for (let i = 0; i < firstDay; i++) {
    calender += "   ";
  }
  for (let i = 1; i <= lastDate; i++) {
    if (i < 10) {
      calender += " ";
    }
    calender += `${i} `;
    if ((i + firstDay) % 7 === 0) {
      calender += "\n";
    }
  }

  console.log(calender);
}

// 引数から月と年を取得
const [, , option, value] = process.argv;
let month, year;
if (option === "-m" && value !== undefined) {
  if (parseInt(value) < 1 || parseInt(value) > 12) {
    console.log("月は1から12の間で指定してください");
    process.exit(1);
  }
  month = parseInt(value) - 1;
  year = new Date().getFullYear();
} else if (option == undefined) {
  month = new Date().getMonth();
  year = new Date().getFullYear();
} else {
  console.log("Usage: node calender.js [-m month]");
  process.exit(1);
}

generateCalendar(month, year);
