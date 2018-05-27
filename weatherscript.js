$(document).ready(function(){
  alert("jquery loaded");
});

var lon;
var lat;

if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(function(position) {
       lon = position.coords.longitude;
       lat = position.coords.latitude;
      


var api="https://fcc-weather-api.glitch.me/api/current?lat="+lat+"&lon="+lon;
// will change the lat/lon to my location
$.getJSON(api, function(data){
    // console.log(data);
    const f=(data.main.temp * 1.8) + 32;
    const c=(data.main.temp) 
    
    icon=data.weather[0].icon;
    $("#location").html(data.name);
    $("#temperature").html(parseInt(f)+"&#176 F");
    
    $("#fcbutton").on("click", function(){
      if(document.getElementById("fcbutton").value == "Change to Celsius") {
        $("#temperature").html(parseInt(c) + "&#176 C");
        $("#fcbutton").attr("value", "Change to Fahrenheit");
      } else {
        if(document.getElementById("fcbutton").value == "Change to Fahrenheit") {
        $("#temperature").html(parseInt(f) + "&#176 F");
        $("#fcbutton").attr("value", "Change to Celsius");
        
       }
     }
   });
    
    
    
    $("#weather").html(data.weather[0].main);
    var img = "<img src="+data.weather[0].icon+">";
    
    $("#weather-img").html(img);

});

});
}

