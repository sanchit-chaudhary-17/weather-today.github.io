var api="c961886e4779c69fa231e6672fb06257";
var temp;
function fetch_weather(cityname)
{
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
    cityname + "&units=metric&appid=" +
    api).then((response)=> {
        if (!response.ok) {
            alert("City Not Found :( ");
            throw new Error("City Not Found");
          }
          return response.json();
    }).then((data)=>display_data(data));
}

function display_data(data)
{
   var cname=data.name;
   var icon=data.weather[0].icon;
   var desc=data.weather[0].description;
    temp=data.main.temp;
   var humidity=data.main.humidity;
   var speed=data.wind.speed;
   document.querySelector(".city").innerText = "Weather in " + cname;
   document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + icon + ".png";
   document.querySelector(".desc").innerText = desc;
   document.querySelector(".temp").innerText = temp;
   document.querySelector(".humidity").innerText ="Humidity: " + humidity + "%";
   document.querySelector(".wind").innerText ="Wind Speed: " + speed + " km/h";
   document.body.style.backgroundImage ="url('https://source.unsplash.com/1600x900/?" + cname + "')"; 
   document.querySelector(".weather").classList.remove("loading");
}

function search_weather()
{
    fetch_weather(document.querySelector("#search-bar").value);
}
var butn=document.querySelector("#butn");
butn.addEventListener("click",function(){
    search_weather();
});

var val=document.querySelector("#search-bar");
val.addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        search_weather();
      }
}); 
fetch_weather("New Delhi");