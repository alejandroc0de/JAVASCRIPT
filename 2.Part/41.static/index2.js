class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }

    sayHello(){
        console.log(`Hello, my username is ${this.username}`)
    }
}

const user1 = new User("Spongebob");

console.log(User.userCount) // Es una variable de la clase en si, no de los objetos 
user1.sayHello()