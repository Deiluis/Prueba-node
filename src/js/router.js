const pathParts = window.location.pathname.split("/");
const nombreProyecto = pathParts[2]; // undefined si es solo /proyecto

const obtenerDatos = async (nombreProyecto) => {

    // Sanitizar nombre de proyecto

    const res = await fetch(`../productos.json`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    try {
        console.log(res);

        const text = await res.text();
        console.log(text);
    } catch (error) {
        console.log(error);
    }

    console.log(res.status);
}

if (nombreProyecto)
    await obtenerDatos(nombreProyecto);