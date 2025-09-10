// Getter = Makes a property readable
// Setter = Makes the property writeable

//Validamos o modificamos


// Si hay setters y getter js los buscara y los ejecutara

class Rectangle{
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    // SETTER ////////////////////////////////////// 

    set width (newWidth){
        if(newWidth>0){
            this._widht = newWidth
        }
        else{
            console.error("Must be a positive")
        }
    }

    set height (newHeight){
        if(newHeight>0){
            this._height = newHeight
        }
        else{
            console.error("Must be a positive")
        }
    }
    /////// GETTERS ///////

    get width(){
        return this._widht;
    }
    get height(){
        return this._height;
    }
    /////////////////////////


}

const rectangle = new Rectangle(3,4)

console.log(rectangle.width) // Si no usamos setter entonces el programa puede que no funcione, ademas usando el _ especificamos que es 
//                              una variable privada
console.log(rectangle.height)