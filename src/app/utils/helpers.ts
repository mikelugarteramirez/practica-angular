import { Juego } from "../interfaces/juego";

export const filterJuegos = (juegos: Juego[]) => {
    return juegos.map((juego) => {
        const precioReal = juego.precio;
        if(juego.descuento == 0) return juego;
        const descuentoPrecio = precioReal * (juego.descuento/100);
        juego.precioDescuento = precioReal - descuentoPrecio;
        return juego;
    });
}