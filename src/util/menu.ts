import { leer } from '../util/consolePrint'

export const menu = async () => {
    let n: number
    console.log('\n')
    console.log('1.- Crear objetos de distinto tipo y añadirlos al array.')
    console.log('2.- Listar el contenido del array')
    console.log('3.- Modificar información de un objeto del array')
    console.log('4.- Borrar algún objeto del array')
    console.log('4.- Ver la información de un objeto concreto')
    console.log('0.- Salir')
    n = parseInt( await leer('opción: '))
    return n
}