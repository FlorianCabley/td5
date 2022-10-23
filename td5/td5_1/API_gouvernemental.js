const select = document.getElementById("departements")
fetch ('https://geo.api.gouv.fr/departements', {
    method:'get'
}).then(response => response.json())
.then(json => {
    json.forEach(departement => {
        //select.addEventListener("change", selectionDpt);
        //selectionDpt = () => {

        let dpt = document.getElementById("departements").value;
        const option = document.createElement("option");
        dpt.value = departement.code
        option.innerHTML = departement.nom
        select.append(option)
        console.log(option.value)
          
        //}
          
          
    })
})

const selectCommunes = document.getElementById("communes")
fetch ('https://geo.api.gouv.fr/communes', {
    method:'get'
}).then(response => response.json())
.then(json => {
    json.forEach(communes => {
        const option = document.createElement("option");
        option.value = communes.code
        option.innerHTML = communes.nom
        selectCommunes.append(option)
    })
})




