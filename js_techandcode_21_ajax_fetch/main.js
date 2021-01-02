const key='a5746f35427d123f305a50cf8c83d366'
const weatherDiv=document.querySelector('#weather')
let weatherResponse="Παρακαλώ περιμένετε...."
weatherDiv.innerText=weatherResponse

function getWeather(){
    fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=Katerini&lang=el&units=metric&appid=${key}`,
        {method:'GET'})//metric gia vathmoys celsiu
        .then(response=>response.json())
        .then(json=>weatherDiv.innerHTML=`${json.weather[0].description}  ( Θεμοκρασία: ${json.main.temp} <sup>o</sup> Κελσίου ) `)
        .then(setWeatherText())
        .catch(error=>console.error('error:',error))
   
}


function setWeatherText(){
    weatherDiv.innerText=weatherResponse
}

getWeather()


