setInterval(() => {
    let newSeconds = new Date().getSeconds();
    let newMinutes = new Date().getMinutes();
    let newHours = new Date().getHours();
    let AmPm = "am";
    const time = document.querySelector(".time");
  
    if (newHours >= 12) {
      AmPm = "pm";
      newHours = newHours - 12;
    }
    if (newSeconds < 10) {
      newSeconds = `0${newSeconds}`;
    }
    if (newMinutes < 10) {
      newMinutes = `0${newMinutes}`;
    }
    if (newHours < 10) {
      newHours = `0${newHours}`;
    }
  
    time.innerText = `${newHours} : ${newMinutes} : ${newSeconds} ${AmPm}`;
  }, 1000);