export async function handler(event, context) {
    const { nombre } = event.queryStringParameters;

    return {
        statusCode: 200,
        body: JSON.stringify({ mensaje: `Proyecto: ${nombre}` })
    };
}