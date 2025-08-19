async function WeatherComponent(){
    const weathers = document.getElementsByClassName("weather_component");
    for(var i=0;i<weathers.length;i++){
        const id = weathers[i].getAttribute("city");
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`;
        try {
            const rs = await fetch(url);
            const data = await rs.json();
            const html = `
                <div class="col-xl-3 col-md-6 md-4">
                    <div class="card item">
                        <div class="card-body text-white">
                            <h3>${e.dt_txt}</h3>
                            <h2>${e.main.temp} <sup>0</sup>C</h2>
                            <p>${e.weather[0].description}</p>
                            <img src="https://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png" />
                        </div>
                    </div>
                </div>`;
            weathers[i].innerHTML = html;
        } catch (error) {
            
        }
        
    }
    
}
WeatherComponent();