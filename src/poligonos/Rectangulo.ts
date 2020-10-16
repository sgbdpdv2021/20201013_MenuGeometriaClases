class Rectangulo{
    private _base: number
    private _altura:number

    public constructor(base : number, altura:number){
        this._base = base
        this._altura = altura
    }

    public get base(){
        return this._base
    }

    public get altura(){
        return this._altura
    }

    public getPerimetro(){
        return this._base*2+this._altura*2
    }

    public getArea(){
        return (this._base*this._altura)
    }

}
export{Rectangulo}