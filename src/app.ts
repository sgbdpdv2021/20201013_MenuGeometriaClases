import { menu } from './vistas/menu'
import { leerTeclado } from './vistas/lecturaTeclado'
import { Triangulo } from './poligonos/Triangulo'
import { Cuadrado } from './poligonos/Cuadrado'
import { Rectangulo } from './poligonos/Rectangulo'
import { Circulo } from './poligonos/Circulo'

const main = async () => {
    let n: number
    do {
        n = await menu()
        switch(n){
            case 1:
                console.log('Calculando perímetro y área de un TRIÁNGULO')
                let base, altura, lado1, lado2: number
                base =  parseInt( await leerTeclado('Introduzca la base del triángulo'))
                altura =  parseInt( await leerTeclado('Introduzca la altura del triángulo'))
                lado1 =  parseInt( await leerTeclado('Introduzca otro lado del triángulo'))
                lado2 =  parseInt( await leerTeclado('Introduzca el último lado del triángulo'))
                let triangulo = new Triangulo(base,altura,lado1,lado2)
                console.log("Perímetro del triángulo="+triangulo.getPerimetro())
                console.log("Área del triángulo="+triangulo.getArea())
                break
            case 2:
                console.log('Calculando perímetro y área de un CUADRADO')
                let lado:number
                lado = parseInt(await leerTeclado('Introduzca el lado del cuadrado'))
                let cuadrado = new Cuadrado(lado)
                console.log("Perímetro del cuadrado="+cuadrado.getPerimetro())
                console.log("Área del cuadrado="+cuadrado.getArea())
                break
            case 3:
                console.log('Calculando perímetro y área de un CÍRCULO')
                let radio:number
                radio = parseInt(await leerTeclado('Introduzca el radio del círculo'))
                let circulo = new Circulo(radio)
                console.log("Perímetro del círculo="+circulo.getPerimetro())
                console.log("Área del círculo="+circulo.getArea())
                break
            case 4:
                console.log('Calculando perímetro y área de un RECTÁGULO')
                let baser, alturar:number
                baser = parseInt(await leerTeclado('Introduzca la base del rectángulo'))
                alturar = parseInt(await leerTeclado('Introduzca la altura del rectángulo'))
                let rectangulo = new Rectangulo(baser,alturar)
                console.log("Perímetro del rectángulo="+ rectangulo.getPerimetro())
                console.log("Área del rectángulo="+ rectangulo.getArea())
                break
            case 0:
                console.log('\n--ADIÓS--')
                break
            default:
                console.log("Opción incorrecta")
                break
        }
    }while (n != 0)
}
main()