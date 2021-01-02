/*var a=(function(){
    return 1;
})();


setTimeout(function(){a++},2000)


console.log(a)*/
const weatherDiv=document.querySelector('#weather')
let weatherResponse="Παρακαλώ περιμένετε...."
weatherDiv.innerText=weatherResponse

function getWeather(){
    return "Σήμερα θα έχει λιακάδα"
}

setTimeout(()=>{weatherResponse=getWeather()},3000);//emfanizetai afto poy exei mikrotero time
//setTimeout(()=>{weatherDiv.innerText=weatherResponse},6000);
weatherDiv.innerText=weatherResponse