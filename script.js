

// Prayer times for city from aladhan api

let prayerTimesCityManual = {
    countryManual: "Saudi Arabia",
    cityManual: 'Jeddah',
    fetchPrayerManual: function (city, country) {
        fetch("https://api.aladhan.com/v1/timingsByCity?city=" 
        + this.cityManual + "&country= "
        + this.countryManual 
        + "&method=4"
        )
        .then((response) => {
            if (!response.ok) {
              alert("Invalid City Name, Please write the correct name and search again, Thanks");
              throw new Error("Wrong info");
            }
            return response.json();
          })
        .then((data)=>this.displayPrayerManual(data));
    },
  displayPrayerManual: function(data){
    const { timings, date, meta: { timezone, latitude, longitude } } = data.data;
    const { city, country } = data.data.meta;
    const fajr = timings.Fajr;
    const sunrise = timings.Sunrise;
    const dhuhr = timings.Dhuhr;
    const asr = timings.Asr;
    const maghrib = timings.Maghrib;
    const isha = timings.Isha;
    const html = `
        <p>${city}, ${country}</p>
        <p>Timezone: ${timezone}</p>
        <p>Latitude: ${latitude}, Longitude: ${longitude}</p>`;
    document.querySelector('.todayprayer').innerHTML = `
   
    <li class="onprayer">
      <time><strong>${fajr}</strong></time>
      <div class="temp">Fajr</div>
    </li>
    <li class="onprayer ">
      <time><strong>${sunrise}</strong></time>
      <div class="temp">Sunrise</div>
    </li>
    <li class="onprayer">
      <time><strong>${dhuhr}</strong></time>
      <div class="temp">Dhuhr</div>
    </li>
    <li class="onprayer ">
      <time><strong>${asr}</strong></time>
      <div class="temp">Asr</div>
    </li>
    <li class="onprayer ">
      <time><strong>${maghrib}</strong></time>
      <div class="temp">Maghrib</div>
    </li>
    <li class="onprayer ">
      <time><strong>${isha}</strong></time>
      <div class="temp">Isha</div>
    </li>
    `;
 

},

};
prayerTimesCityManual.fetchPrayerManual();

