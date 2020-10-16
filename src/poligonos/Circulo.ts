class Circulo{
    private _radio:number

    public constructor(radio:number){
        this._radio = radio
    }

    public get radio(){
        return this._radio
    }

    public getPerimetro(){
        return 2*Math.PI*this._radio
    }

    public getArea(){
        return Math.PI*(this._radio*this._radio)
    }

}   
export{Circulo}