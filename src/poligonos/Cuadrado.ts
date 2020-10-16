class Cuadrado{
    private _lado: number

    public constructor(lado : number){
        this._lado = lado
    }

    public get lado(){
        return this._lado
    }

    public getPerimetro(){
        return this._lado*4
    }

    public getArea(){
        return (this._lado*this._lado)
    }

}
export{Cuadrado}