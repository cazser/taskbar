const showtime = () => {
    const timewrapper = document.querySelector('.timewrapper')
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    timewrapper.innerHTML = `
    <span>${hour}:${minute>=10? minute: "0"+minute.toString()}</span>
    <span>${year}/${month}/${day}</span>
    `



}

const timewrapper = document.querySelector('.timewrapper')
timewrapper.addEventListener('click', () => {
    const calender = document.querySelector("calender")

})