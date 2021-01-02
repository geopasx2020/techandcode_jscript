const weatherDiv=document.querySelector('#weather')
let weatherResponse="Παρακαλώ περιμένετε...."
weatherDiv.innerText=weatherResponse

function getWeather(){
    let res= 200
    return new Promise((resolve,reject)=>{//resolve an pane ola kala,reject an kati den paei kala
        setTimeout(()=>{
            weatherResponse='Ήλιος';
            if (res==200)
              resolve()//me stelnei sto then to getWeather
            else
              reject('Error loading page...')//to reject stelnei san parametro sto error catch
           
            
        },2000); 

    })
   
}


function setWeatherText(){
    weatherDiv.innerText=weatherResponse
}

function moreText(){
    if (weatherResponse='Βροχή'){
        weatherResponse+=', πάρε ομπρέλα'
    }
    if (weatherResponse='Ήλιος'){
        weatherResponse+=', πάρε καπέλο'
    }
    weatherDiv.innerText=weatherResponse
}

getWeather()
    .then(moreText)//otan den exoyme sfalma sto promise or .then(setWatherText)
    .catch((err)=>weatherDiv.innerText=err)

//getWeather(moreText)
