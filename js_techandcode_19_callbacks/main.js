/*var a=(function(){
    return 1;
})();


setTimeout(function(){a++},2000)


console.log(a)*/
const weatherDiv=document.querySelector('#weather')
let weatherResponse="Παρακαλώ περιμένετε...."
weatherDiv.innerText=weatherResponse

function getWeather(callback){ //to callback einai symvasi
   
    setTimeout(()=>{
        weatherResponse="Βροχή";
        callback()
        },5000);
        
}

function setWeatherText(){
    weatherDiv.innerText=weatherResponse

}

function moreText(){
    if (weatherResponse=='Βροχή'){
        weatherResponse+=', πάρε ομπρέλα'
    }
    weatherDiv.innerText=weatherResponse
}
getWeather(setWeatherText)
getWeather(moreText)

/*setTimeout(()=>{weatherResponse=getWeather()},3000);//emfanizetai afto poy exei mikrotero time
//setTimeout(()=>{weatherDiv.innerText=weatherResponse},6000);
setTimeout(()=>{
    weatherDiv.innerText=weatherResponse},3000);// anti aftou callbacks*/