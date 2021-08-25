const fs = require("fs")
const crearArchivo = ( base , listar , hasta ) => {
    console.log('=====================')
    console.log(`   Tabla del: ${base}`)
    console.log('=====================')
    let salida = ''
    for( let i = 1; i<=hasta; i++){
        salida = salida.concat(`${ base } X ${ i } = ${ base * i }\n`)
    }
    if(listar){
        console.log(salida)
        fs.writeFileSync(`./salidas/tabla-${ base }.txt`,salida)
        console.log(`tabla-${ base }.txt creado`)
    }    
} 
module.exports = {
    crearArchivo
}