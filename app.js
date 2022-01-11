let formularioUI = document.querySelector("#formulario")
console.log(formularioUI)

let listaDeActividades = document.getElementById("listaActividades")
console.log(listaDeActividades);

let arregloActividades = []

function crearItem(actividad)
{
    let itemActividad = { 
        actividad : actividad,
        estado : false
    }
    arregloActividades.push(itemActividad)
    return itemActividad;
}

formularioUI.addEventListener("submit", 
    function (e) {
        e.preventDefault()
        //console.log("apretando el boton submit")
        let actividadUI = document.querySelector("#actividad").value
        console.log(actividadUI)

        if (actividadUI.length == 0)
        {
            alert("Intoduce algo");
        }
        else
        {
            crearItem(actividadUI);
            formularioUI.reset()
            console.log(arregloActividades)
        }
    }
)

