//const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6c31185355msh0500f1e7d5181b7p1fe3f6jsnce20a9ebc08d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather=(city)=>{
    cityname.innerHTML=city; //cityname is directly taken from the HTML
fetch( 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city,options)
.then(response => response.json())
.then((response)=> {
    console.log(response)
//cloud_pct.innerHTML = response.cloud_pct
temp.innerHTML = response.temp
temp2.innerHTML = response.temp
feels_like.innerHTML= response.feels_like 
humidity.innerHTML = response.humidity
humidity2.innerHTML = response.humidity
min_temp.innerHTML = response.min_temp
max_temp.innerHTML = response.max_temp
wind_speed.innerHTML = response.wind_speed
wind_speed2.innerHTML = response.wind_speed
wind_degrees.innerHTML = response.wind_degrees
sunrise.innerHTML = response.sunrise
sunset.innerHTML = response.sunset
})
.catch(err => console.log(err));
}
submit.addEventListener("click",(e)=>{
    e.preventDefault(); //Not do reload;
    getWeather(city.value)
})

getWeather("Delhi");

const shangaiweather=(city1)=>{
    fetch( 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city1,options)
    .then(response => response.json())
.then((response)=> {
    a.innerHTML = response.cloud_pct
    b.innerHTML= response.feels_like 
    c.innerHTML=response.humidity
    d.innerHTML=response.max_temp
    e.innerHTML=response.min_temp
    f.innerHTML=response.sunrise
    g.innerHTML=response.sunset
    h.innerHTML=response.temp
    i.innerHTML=response.wind_degrees
    j.innerHTML=response.wind_speed

})
}
shangaiweather("shanghai")


const bostonweather=(city2)=>{
    fetch( 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city2,options)
    .then(response => response.json())
.then((response)=> {
    a1.innerHTML = response.cloud_pct
    b1.innerHTML= response.feels_like 
    c1.innerHTML=response.humidity
    d1.innerHTML=response.max_temp
    e1.innerHTML=response.min_temp
    f1.innerHTML=response.sunrise
    g1.innerHTML=response.sunset
    h1.innerHTML=response.temp
    i1.innerHTML=response.wind_degrees
    j1.innerHTML=response.wind_speed

})
}
bostonweather("Boston");


const lucknowweather=(city3)=>{
    fetch( 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city3,options)
    .then(response => response.json())
.then((response)=> {
    a2.innerHTML = response.cloud_pct
    b2.innerHTML= response.feels_like 
    c2.innerHTML=response.humidity
    d2.innerHTML=response.max_temp
    e2.innerHTML=response.min_temp
    f2.innerHTML=response.sunrise
    g2.innerHTML=response.sunset
    h2.innerHTML=response.temp
    i2.innerHTML=response.wind_degrees
    j2.innerHTML=response.wind_speed

})
}
lucknowweather("lucknow");


const kolkataweather=(city4)=>{
    fetch( 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city4,options)
    .then(response => response.json())
.then((response)=> {
    a3.innerHTML = response.cloud_pct
    b3.innerHTML= response.feels_like 
    c3.innerHTML=response.humidity
    d3.innerHTML=response.max_temp
    e3.innerHTML=response.min_temp
    f3.innerHTML=response.sunrise
    g3.innerHTML=response.sunset
    h3.innerHTML=response.temp
    i3.innerHTML=response.wind_degrees
    j3.innerHTML=response.wind_speed

})
}
kolkataweather("Kolkata");