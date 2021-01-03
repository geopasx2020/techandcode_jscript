const key='a5746f35427d123f305a50cf8c83d366'
const weatherDiv=document.querySelector('#weather')
let weatherResponse="Παρακαλώ περιμένετε...."
weatherDiv.innerText=weatherResponse
//sti get den mporw na exw bodu enw stin post mporw
function getWeather(){
    fetch('http://httpbin.org/delete',//OR:https://e032c095fa626b22a4edac35f6861bb0.m.pipedream.net

          {method: 'DELETE',
          headers:{
              'Accept':'application/json', //toy les toy server dosolipsia se morfi JSON
              'Content-Type':'application/json'
          },
          body:JSON.stringify({'parameter':'test'})

        
        })
          .then(res=>console.log(res))
        
        .catch(error=>console.error('error:',error))
   
}


function setWeatherText(){
    weatherDiv.innerText=weatherResponse
}

getWeather()


