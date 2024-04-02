const apikey = "a1bf0bc32e96aab2b26cd6dfcbad669a";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".input-area input");
const searchbtn = document.querySelector(".input-area button");

async function checkWeather(city) {
    // const response = await fetch(apiurl + city + `&appid=${apikey}`);
    const response = await fetch(apiurl + city + "&appid=" + apikey);
    var data = await response.json();

    console.log(data);
    // console.log(response)

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".hmd").innerHTML = data.main.humidity + "%";
    document.querySelector(".speed").innerHTML = Math.round(data.wind.speed) + " km/hr";
    if (data.weather[0].main == "Clouds") {
        document.querySelector(".photo").src = "https://img.icons8.com/?size=200&id=zIVmoh4T8wh7&format=png";
    } else if (data.weather[0].main == "Clear") {
        document.querySelector(".photo").src = "https://img.icons8.com/?size=512&id=15352&format=png";
    } else if (data.weather[0].main == "Rain") {
        document.querySelector(".photo").src = "https://img.icons8.com/?size=200&id=15360&format=png";
    } else if (data.weather[0].main == "Mist") {
        document.querySelector(".photo").src = "https://img.icons8.com/?size=200&id=113637&format=png";
    } else if (data.weather[0].main == "Drizzle") {
        document.querySelector(".photo").src = "https://img.icons8.com/?size=200&id=Els9zZ3nyEze&format=png";
    }
}

let input = document.querySelector("input");
input.addEventListener('keyup', function(e) {
    if (e.keyCode == 97) {
        checkWeather(searchbox.value);
    }
})


searchbtn.addEventListener("click", function() {
    checkWeather(searchbox.value);

})