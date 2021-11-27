const showtime = (date) => {
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
    const calenderMonth = document.querySelector("#calender-month")

    calenderMonth.innerHTML = `${year}年${month}月`
    const today = document.querySelector(".calender-today");
    today.innerHTML = `${month}月${day}日,星期${weekref[weekday]}`
    console.log(weekday)

}

const timewrapper = document.querySelector('.timewrapper')
timewrapper.addEventListener('click', () => {
    const calender = document.querySelector("calender")

})