const minuteElement = document.querySelector(".minute");
const secondElement = document.querySelector(".second");
const hourElement = document.querySelector(".hour");

setInterval(() => {
  const date = new Date();

  const secondDeg = (date.getSeconds() / 60) * 360 - 90;
  const minuteDeg = (date.getMinutes() / 60) * 360 - 90;
  const hourDeg = (date.getHours() / 12) * 360 - 90;

  secondElement.style.transform = `rotate(${secondDeg}deg)`;
  minuteElement.style.transform = `rotate(${minuteDeg}deg)`;
  hourElement.style.transform = `rotate(${hourDeg}deg)`;
}, 1000);
function updateTime() {
  let losAngelesElement = document.querySelector("#los-Angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM DD YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss[<small>] A [</small>]"
    );
  }

  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM DD YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss[<small>] A [</small>]"
    );
  }
  let harareElement = document.querySelector("#harare");
  let harareDateElement = harareElement.querySelector(".date");
  let harareTime = moment().tz("Africa/Harare");

  harareDateElement.innerHTML = harareTime.format("MMMM DD YYYY");
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);

  let citiesElement = document.querySelector(".cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM DD YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small>${cityTime.format("A")}</small></div>
        </div>
        <a href="index.html">All cities</a>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
