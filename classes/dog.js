export class Dog {
    _name;

    constructor(name){
        this._name = name;
    }

    get name(){
        return this._name;
    }
}