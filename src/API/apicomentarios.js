import Config from '../configuraciones/Config.json';

export const consumir = async () => {
    const path = new URL(Config.COMENTARIOS_API.URL);
    const resultado = await fetch(path);
    return resultado.json();
}; 
