const getCoordinates = function(){
    let coordData = fetch('http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=baedd7b9aa8c3f169ae679110b759c58',{
        mode : 'cors' 
    })
    .then((data) => data.json())
    .then((jsonData) => jsonData)
    return coordData
}
const getWeather = function(place){
    let weatherData = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&APPID=baedd7b9aa8c3f169ae679110b759c58`,{
        mode : 'cors' 
    })
    .then((data)=>data.json())
    .then((data)=>data)
    return weatherData
}
const placeListen = function(){
    const form = document.querySelector('.form-main')
    form.addEventListener('submit', e=>{
        coordinateModule(form.location.value)
        e.preventDefault()
    })
}
placeListen()
const coordinateModule = function(place){
    let placeNode = document.querySelector('.display-place')
    let temperatureNode = document.querySelector('.display-temperature')
    let skyNode = document.querySelector('.display-sky')

    let weatherData = getWeather(place)
    weatherData.then(data=>{
        console.log(data)
        placeNode.textContent = data.name
        temperatureNode.textContent = data.main.temp
        skyNode.textContent = data.weather[0].main
    })
}