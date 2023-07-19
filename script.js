setInterval(() => {
    const timetext = document.querySelector(".time")
    let date = new Date
    timetext.innerHTML = date.toLocaleTimeString()
}, 1000);
