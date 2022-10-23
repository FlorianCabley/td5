const nom = document.getElementById("meteo")
fetch ('https://api.openweathermap.org/data/2.5/weather?lat=49.1193089&lon=6.1757156&appid=26e8ef5ac26355693fce6ced24c31df5', {
    method:'get'
}).then(response => response.json())
.then(meteo => {
    
    const ville = document.createElement("a");
    ville.innerHTML = meteo.name
    nom.append(ville)
    
    const cc = document.createElement("a");
    cc.innerHTML = meteo.main
    nom.append(cc)

    console.log(meteo)
          
        
          
          
    })