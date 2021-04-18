var search = document.getElementById('#search');
//var cityInput = document.getElementById();
var currentCity= "San Diego";
var uv;
var temperature;
var humidity;
var windSpeed;

//var fiveDayForecast= ;

//Create URL that will take API key and city as variables. Create a function with URL query (API Key var included) function{ City;}
var apiCall = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=c518e9669cda15185c69a73df0fefc4c";
var apiKey = "c518e9669cda15185c69a73df0fefc4c";
var cityCall= "http://api.openweathermap.org/data/2.5/weather?q=SanDiego&appid=c518e9669cda15185c69a73df0fefc4c";

$.ajax({
    apiCall,
    type: "GET",
    success: function(result) {
        console.log(result);
    },
    error: function(error) {
        console.log (error);
    }
});

//Stating the variable 

//Search bar functionality that will pull city information for current weather forecast
function pullCityInfo(){


};

//Search bar functionality that will pull 5-day forecast for current location
function pullCityForecast(){

};

//City and Weather information. I.E. Temperature, Humidity, Wind Speed, and UV Index.
//$('#temperature').text(variable to reference current object from list. temperature);
///$('#humidity').humidity(variable to reference current object from list. temperature);
//$('#wind').wind(variable to reference current object from list. temperature);
//$('#uv').uv(variable to reference current object from list. temperature);

function addPastInput(autoPopulate){
    var autoPopulate= document.getElementById("list").value;
}