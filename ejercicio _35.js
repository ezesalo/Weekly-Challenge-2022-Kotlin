/*
Agua:
- Super efectivo: fuego, agua
- Neutral:
- debil: planta, electrico

Fuego:
- Super efectivo: Planta, fuego
- Neutral: electrico
- debil: agua

Planta:
- Super efectivo: Planta, agua, electrico
- Neutral:
- debil: fuego

Electrico:
- Super efectivo: electrico
- Neutral: Fuego, agua, planta
- debil:

*/

const efectividad = [{

        nombre: "agua",
        agua: 2,
        fuego: 2,
        planta: 0.5,
        electrico: 0.5
    },
    {
        nombre: "fuego",
        agua: 0.5,
        fuego: 2,
        planta: 2,
        electrico: 1
    },
    {
        nombre: "planta",
        agua: 1,
        fuego: 1,
        planta: 1,
        electrico: 2

    },
    {
        nombre: "electrico",
        agua: 1,
        fuego: 1,
        planta: 1,
        electrico: 2

    }
]

const TIPO = {
    AGUA: "agua",
    FUEGO: "fuego",
    PLANTA: "planta",
    ELECTRICO: "electrico"
}


function batalla(tipoAtacante, tipoDefensor, ataque, defensa) {

    let daño = 50 * (ataque / defensa) * efectividad.find(nombre => nombre.nombre == tipoAtacante)[tipoDefensor]

    return daño

}

console.log(batalla(TIPO.ELECTRICO, TIPO.FUEGO, 10, 5))