export class Triangulo{
    private _base: number
    private _lado2: number
    private _lado3: number
    private _altura: number

    constructor(base : number, lado2 : number, lado3 : number, altura : number){
        this._base = base
        this._lado2 = lado2
        this._lado3 = lado3
        this._altura = altura
    }

    get base(){
        return this._base
    }

    get lado2(){
        return this._lado2
    }

    get lado3(){
        return this._lado3
    }

    get altura(){
        return this._altura
    }

    set altura(_altura: number){
        this._altura = _altura
    }
    perimetro(){
        return this._base+this._lado2+this._lado3
    }

    area(){
        return (this._base*this._altura)/2
    }

}
