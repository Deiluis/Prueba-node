const pathParts = window.location.pathname.split("/");
const nombreProyecto = pathParts[2]; // undefined si es solo /proyecto

const obtenerDatos = async (nombreProyecto) => {

    const res = await fetch(`/.netlify/functions/prueba?nombre=${nombreProyecto}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    console.log(res.status);
}

if (nombreProyecto)
    await obtenerDatos(nombreProyecto);