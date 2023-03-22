const clock = document.querySelector("#clock");

const getClock = () => {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0")
  const miuntes = String(date.getMinutes()).padStart(2, "0")
  clock.innerText = (`${hours}:${miuntes}":${date.getSeconds()}`)
};
getClock()
setInterval(getClock, 1000)