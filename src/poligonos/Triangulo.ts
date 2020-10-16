class Triangulo{
    private _base: number
    private _lado2: number
    private _lado3: number
    private _altura: number

    public constructor(base : number, lado2 : number ,lado3 : number ,altura : number){
        this._base = base
        this._lado2 = lado2
        this._lado3 = lado3
        this._altura = altura
    }

    public get base(){
        return this._base
    }

    public get lado2(){
        return this._lado2
    }

    public get lado3(){
        return this._lado3
    }

    public get altura(){
        return this._altura
    }

    public getPerimetro(){
        return this._base+this._lado2+this._lado3
    }

    public getArea(){
        return (this._base*this._altura)/2
    }

}
export{Triangulo}