import { Genero } from "./genero";
import { Plataforma } from "./plataforma";

export interface Juego {
    id: number,
    nombre: string,
    desarrolador: string,
    descripcion: string,
    precio: number,
    descuento: number,//porcentaje
    fechaLanzamiento: Date,
    genero?: Genero,
    precioDescuento?: number,
    plataformas?: [Plataforma],
}
