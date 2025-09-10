// Static : keyword that defines properties or methods that belong to the class itself rather than objects
//          created from the class.
//          Asi que cada cosa que tiene static pertene a la clase y no a los objetos que creemos dentro de la clase


class MathUtil{
    static PI = 3.14159

    static getDiameter(radius){
        return radius*2
    }
    static getCircunference(radius){
        return 2* this.PI * radius;
    }

}

console.log(MathUtil.PI)
console.log(MathUtil.getDiameter(10))
console.log(MathUtil.getCircunference(20))