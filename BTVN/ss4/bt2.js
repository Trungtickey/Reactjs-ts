let greetingWithWeather = (name,weather)=>{
    if(weather === "sunny"){
        console.log(`Lô ${name}! Today is sunny, it's so great!`)
    } else if (weather === "rainy"){
        console.log(`Chào ${name}! Today is rain, remember to take an umbrella!`)
    } else {
        console.log(`Lô ${name}! Today is undefind the weather`)
    }
}


greetingWithWeather("Tickey rainny","sunny");