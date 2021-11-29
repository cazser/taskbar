const showtime = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const calenderMonth = document.querySelector("#calender-month")

    calenderMonth.innerHTML = `${year}年${month}月`
    const days = document.querySelector(".calender-days")
    days.innerHTML = ''
    const firstDayOfThisMonth = new Date(year, month - 1, 1);
    //    console.log(firstDayOfThisMonth.getDay());
    const nextMonth = new Date(year, month + 1 - 1, 1);
    //   console.log(nextMonth.getDay())
    const dates = []


    let curDate = firstDayOfThisMonth;
    while (curDate.getDay() !== 1) {

        curDate = new Date(curDate.getTime() - 24 * 3600 * 1000);
        dates.unshift(curDate)
    }

    curDate = firstDayOfThisMonth;

    while (curDate.getTime() !== nextMonth.getTime()) {
        dates.push(curDate);
        curDate = new Date(curDate.getTime() + 24 * 3600 * 1000)
    }
    curDate = nextMonth;
    while (curDate.getDay() !== 0) {
        dates.push(curDate);
        curDate = new Date(curDate.getTime() + 24 * 3600 * 1000);
    }

    dates.push(curDate);

    for (let i = 0; i < dates.length; i++) {
        const li = document.createElement("li")

        li.textContent = dates[i].getDate();
        const now = new Date();
        if (dates[i].getFullYear() === now.getFullYear() &&
            dates[i].getMonth() === now.getMonth() &&
            dates[i].getDate() === now.getDate()) {
            li.classList.add('today');
        } else if (dates[i].getFullYear() === date.getFullYear() &&
            dates[i].getMonth() === date.getMonth()) {
            li.classList.add('thisMonth');
        } else {
            li.classList.add("normal")
        }
        days.append(li)
    }
}


const showClockTime = (date) => {
    const timewrapper = document.querySelector('.timewrapper')
    const hour = date.getHours();
    const minute = date.getMinutes();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const weekday = date.getDay();
    timewrapper.innerHTML = `
    <span>${hour}:${minute>=10? minute: "0"+minute.toString()}</span>
    <span>${year}/${month}/${day}</span>
    `

    const weekref = "日一二三四五六"
    const today = document.querySelector(".calender-today");
    today.innerHTML = `${month}月${day}日,星期${weekref[weekday]}`

}
const timewrapper = document.querySelector('.timewrapper')
timewrapper.addEventListener('click', () => {
    const calender = document.querySelector(".calender")
    if (calender.classList.contains("hide")) {
        calender.classList.remove('hide')
    } else {
        calender.classList.add('hide')
    }
})