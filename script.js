const buscador = document.querySelector(".search button");
const clima= document.querySelector(".weather");
const imagen = document.querySelector(".weather-icon");
const temperaturas = document.querySelector(".temp");
const city = document.querySelector(".city");
const humedad = document.querySelector(".humidity");
const vel_viento = document.querySelector(".wind");
const apiKey = "d3c39f57206d5904890771c822ffaac3";
const ciudad = document.querySelector(".search input");


buscador.addEventListener("click", async () => {
 

  try {
    
    const respuesta = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${ciudad.value}&appid=${apiKey}`
    );

    if (respuesta.data.cod === 200) {
      const temperatura = respuesta.data["main"]["temp"];    
      temperaturas.innerHTML = `${Math.round(temperatura)}°C`;
      city.innerHTML = respuesta.data["name"];
      humedad.innerHTML = `${respuesta.data["main"]["humidity"]}%`;
      vel_viento.innerHTML = `${respuesta.data["wind"]["speed"]}km/h`;
      imagen.src = "images/clouds.png";      
      clima.style.display = "block";      
    } else {
      console.log(respuesta.data.cod);
      clima.style.display = "none";  
    
    }

  } 
catch (error) {  
  console.error("Error al buscar la ciudad:", error);   
  window.alert("NO SE ENCUENTRAN COINCIDENCIAS")  
}
});